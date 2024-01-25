CREATE DATABASE bookbox;

CREATE TABLE user_detail(
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(255),
    password VARCHAR(255),
    e_mail VARCHAR(255),
    phone_no VARCHAR(10)
);

CREATE TABLE books(
	book_id SERIAL PRIMARY KEY,
	category VARCHAR(255),
	book_name VARCHAR(255),
	Author VARCHAR(255),
	description VARCHAR(255),
	price DECIMAL(10,2),
	Released_year VARCHAR(255),
	IMAGE VARCHAR(255)
);