-- Lecture 9 - slide 60 : MySQL Setup and Sample Data
-- mysql -u root -p < setup.sql

CREATE DATABASE IF NOT EXISTS web_course;
USE web_course;

CREATE TABLE IF NOT EXISTS students (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  programme VARCHAR(100) NOT NULL
);

INSERT INTO students (name, programme)
VALUES ('Alice', 'Computing');
