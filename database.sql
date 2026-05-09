CREATE DATABASE githubfinder;

USE githubfinder;

CREATE TABLE searches(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
