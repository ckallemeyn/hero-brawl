CREATE DATABASE Heroes;

USE Heroes;

CREATE TABLE IF NOT EXISTS users (
	id INT NOT NULL PRIMARY KEY auto_increment ,
    fullname VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255)
) ENGINE=INNODB;


CREATE TABLE IF NOT EXISTS heroes (
	  id INT PRIMARY KEY auto_increment,
	  name VARCHAR(255) NOT NULL,
    intelligence VARCHAR(3) NOT NULL,
    strength VARCHAR(3) NOT NULL,
    speed VARCHAR(3) NOT NULL,
	  durability VARCHAR(3) NOT NULL,
    power VARCHAR(3) NOT NULL,
    combat VARCHAR(3) NOT NULL,
	  image VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    CONSTRAINT fk_user_id
    FOREIGN KEY (user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE=INNODB;