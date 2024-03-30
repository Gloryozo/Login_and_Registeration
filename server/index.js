const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(express.json()); 

const port = 3001;

const openDb = () => {
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'User Dataset',
        password: 'Nipuni',
        port: 5432
    })
    return pool;
}

// Get request handler

app.get("/", (req, res) => {
    const pool = openDb();

    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message }); 
        }
        res.status(200).json(results.rows);

    })
})
// Post request handler

app.post("/add", (req, res) => {
    // Destructure required fields from the request body
    const { first_name, last_name, email, phone, password } = req.body;

    // Check if any required field is missing
    if (!first_name || !last_name || !email || !phone || !password) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Insert user into the database
    const pool = openDb();
    const query = 'INSERT INTO users (first_name, last_name, email, phone, password) VALUES ($1, $2, $3, $4, $5)';
    const values = [first_name, last_name, email, phone, password];

    pool.query(query, values, (error,result) => {
        if (error) {
            // Handle database error
            console.error("Database error:", error);
            return res.status(500).json({ error: "Failed to add user" });
        }
        // Check the affected row count to ensure the user was inserted successfully
    if (result.rowCount === 1) {
        res.status(200).json({ message: "User added successfully" });
    }else {
        console.error("Failed to add user:, No rows affected");
        res.status(500).json({ error: "Failed to add user" });
    };
});
})

app.listen(port);