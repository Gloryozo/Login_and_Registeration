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
    const pool = openDb();
    const { first_name,last_name, email, phone,password } = req.body;

    pool.query('INSERT INTO users (first_name,last_name, email, phone, password) VALUES ($1, $2, $3, $4, $5)', [first_name,last_name, email, phone, password], (error) => {
        if (error) {
            res.status(500).json({ error: error.message }); 
        }
        res.status(200).send('User added successfully');
    })
})

app.listen(port);