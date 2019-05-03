CREATE DATABASE smartep;

-- CREATE USER 'admin'@'localhost' IDENTIFIED BY 'smarteppw';

-- GRANT ALL PRIVILEGES ON smartep.* TO 'admin'@'localhost';

USE smartep;

CREATE TABLE users (NAME VARCHAR(20));

INSERT INTO users VALUES ("peter"),("kevin"),("alex");