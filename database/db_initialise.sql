CREATE DATABASE IF NOT EXISTS `app_db`;
USE `app_db`;

-- Creating structure for table app_db.test
CREATE TABLE IF NOT EXISTS `test` (
  `test_id` int(11) NOT NULL AUTO_INCREMENT,
  `test_name` varchar(200) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`test_id`)
);
-- Inserting sample values for 'test'
INSERT INTO `test` (`test_name`) VALUES
	('Phil'),
	('Bob'),
	('Frank'),
	('Garry');

-- Creating structure for table app_db.test
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `email` varchar(200) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
);

-- Inserting sample values for 'users'
INSERT INTO `users` (`name`, `email`, `password`) VALUES
	('Ethan', 'ethanaharris10@gmail.com', 'password'),
	('Milos', 'vujovicm@cardiff.ac.uk', 'password'),
	('Marwa', 'omarfm@cardiff.ac.uk', 'password'),
	('Adam', 'kalbouneha@cardiff.ac.uk', 'password'),
	('Ahmad', 'shahina@cardiff.ac.uk', 'password');



