CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone_number VARCHAR(12) NOT NULL,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users (first_name, last_name, email, phone_number, password)
VALUES ('John', 'Doe', 'john@example.com', '123-456-7890', 'password123');