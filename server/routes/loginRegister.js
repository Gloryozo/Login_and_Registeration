const express = require('express');
const { query } = require('../helpers/db.js')

const registerRouter = express.Router();

registerRouter.get("/", async(req, res) => {
    try{
        const result = await query('SELECT * FROM users' );
        const rows = result.rows ? result.rows : [];
        res.status(200).json(rows)
    }catch(error){
        console.log(error);
        res.status(500).json({error:error})
    }
});


registerRouter.post('/new', async(req, res) => {
    try {
        const { first_name, last_name, email, phone_number, password } = req.body;

        // Ensure all required fields are provided
        if (!first_name || !last_name || !email || !phone_number || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Insert user data into the users table
        const result = await query('INSERT INTO users (first_name, last_name, email, phone_number, password) VALUES ($1, $2, $3, $4, $5) RETURNING *', [first_name, last_name, email, phone_number, password]);

        res.status(200).json({ id: result.rows[0].user_id });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = { registerRouter }