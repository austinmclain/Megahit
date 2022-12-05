-- Using MySQL:

-- Create schema
DROP DATABASE IF EXISTS megahit;
CREATE SCHEMA megahit;
USE megahit;

-- Create user
DROP USER IF EXISTS 'megahit_user'@'localhost';
CREATE USER 'megahit_user'@'localhost' IDENTIFIED BY '1234';
GRANT ALL PRIVILEGES ON megahit.* TO 'megahit_user'@'localhost';
FLUSH PRIVILEGES;

-- Create tables
CREATE TABLE billing_info (
	card_number DECIMAL(16,0) NOT NULL,
    CHECK (card_number >= 0),
    first_name VARCHAR(32) NOT NULL,
    last_name VARCHAR(32) NOT NULL,
    zip_code DECIMAL(5,0) NOT NULL,
    CHECK (card_number >= 0),
    street_address VARCHAR(64) NOT NULL,
    state VARCHAR(32) NOT NULL,
    city VARCHAR(32) NOT NULL,
    PRIMARY KEY(card_number)
);

CREATE TABLE user_account (
	email_address VARCHAR(128) NOT NULL,
    account_password VARCHAR(16) NOT NULL,
    CHECK (LENGTH(account_password) > 3),
    card_number DECIMAL(16,0) NOT NULL,
    CHECK (card_number >= 0),
    PRIMARY KEY(email_address),
    FOREIGN KEY(card_number) REFERENCES billing_info(card_number)
);

CREATE TABLE movie (
	movie_id INT NOT NULL AUTO_INCREMENT,
    movie_title VARCHAR(128) NOT NULL,
    movie_year INT,
    movie_runtime INT, -- This will be in minutes.
    pg_rating VARCHAR(6) NOT NULL,
    PRIMARY KEY(movie_id)
);

CREATE TABLE genre (
	movie_id INT NOT NULL,
    keyword VARCHAR(32) NOT NULL,
    PRIMARY KEY(movie_id, keyword),
    FOREIGN KEY (movie_id) REFERENCES movie(movie_id)
);

CREATE TABLE user_profile (
	email_address VARCHAR(128) NOT NULL,
    profile_name VARCHAR(32) NOT NULL,
    profile_picture INT DEFAULT 1,
    PRIMARY KEY(email_address, profile_name),
    FOREIGN KEY(email_address) REFERENCES user_account(email_address)
);

CREATE TABLE favorite (
	email_address VARCHAR(128) NOT NULL,
    profile_name VARCHAR(32) NOT NULL,
    movie_id INT NOT NULL,
    PRIMARY KEY(email_address, profile_name, movie_id),
    FOREIGN KEY(email_address, profile_name) REFERENCES user_profile(email_address, profile_name),
    FOREIGN KEY(movie_id) REFERENCES movie(movie_id)
);

CREATE TABLE payment_type (
	p_type VARCHAR(32) NOT NULL,
    amount DECIMAL(6,2) NOT NULL,
    CHECK (amount >= 0),
    time_before_expiration INT, -- This will be in days.
    PRIMARY KEY(p_type)
);
    
CREATE TABLE payment (
	payment_id INT NOT NULL AUTO_INCREMENT,
    payment_type VARCHAR(32) NOT NULL,
    CHECK (payment_type = "movie_buy" OR payment_type = "movie_rent"
    OR payment_type = "gold_one" OR payment_type = "gold_three" OR payment_type = "gold_six"),
    payment_date DATETIME DEFAULT NOW(),
    expiration_date DATETIME,
    email_address VARCHAR(128) NOT NULL,
    profile_name VARCHAR(32) NOT NULL,
    movie_id INT DEFAULT NULL,
    PRIMARY KEY(payment_id),
    FOREIGN KEY(payment_type) REFERENCES payment_type(p_type),
    FOREIGN KEY(email_address, profile_name) REFERENCES user_profile(email_address, profile_name),
    FOREIGN KEY(movie_id) REFERENCES movie(movie_id)
);

-- Create trigger for payment table
DELIMITER $$

CREATE TRIGGER after_payment_insert
BEFORE INSERT
ON payment FOR EACH ROW
BEGIN
    SET @days = (SELECT time_before_expiration FROM payment_type, (SELECT NEW.payment_type) AS new_payment WHERE payment_type.p_type = new_payment.payment_type);
    SET NEW.expiration_date = DATE_ADD(NOW(), INTERVAL (SELECT @days) DAY);
END$$

DELIMITER ;

-- Populate tables with data
INSERT INTO billing_info VALUES
	(1234567891234567, "Austin", "McLain", 10101, "1010 Random Street", "Random", "Missouri"),
    (1234567891234568, "John", "Smith", 20101, "1011 Random Street", "Random", "Kansas");
    
INSERT INTO user_account VALUES
	("austin@email.com", 12345, 1234567891234567),
    ("john@email.com", 2048, 1234567891234568);
    
-- Information from IMDb
INSERT INTO movie (movie_title, movie_year, movie_runtime, pg_rating) VALUES
	("Top Gun: Maverick", 2022, 130, "PG-13"),
    ("Bullet Train", 2022, 127, "R");
    
INSERT INTO genre VALUES
	(1, "Action"),
    (1, "Drama"),
    (2, "Action"),
    (2, "Comedy"),
    (2, "Thriller");
    
INSERT INTO user_profile (email_address, profile_name) VALUES
	("austin@email.com", "Austin"),
    ("austin@email.com", "Steve"),
    ("john@email.com", "John");
    
INSERT INTO payment_type VALUES
	("movie_buy", 14.99, NULL),
    ("movie_rent", 4.99, 2),
    ("gold_one", 19.99, 30),
    ("gold_three", 34.99, 90),
    ("gold_six", 69.99, 180);
    
INSERT INTO payment (payment_type, email_address, profile_name) VALUES
	("gold_six", "austin@email.com", "Austin");