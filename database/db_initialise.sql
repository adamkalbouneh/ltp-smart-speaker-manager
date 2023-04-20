DROP SCHEMA IF EXISTS `app_db`;
CREATE SCHEMA IF NOT EXISTS `app_db`;
USE `app_db`;

-- Creating structure for table app_db.test
CREATE TABLE IF NOT EXISTS `test` (
    `test_id` INT(11) NOT NULL AUTO_INCREMENT,
    `test_name` VARCHAR(200) COLLATE UTF8MB4_UNICODE_520_CI DEFAULT NULL,
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
    `user_id` INT(11) NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(200) COLLATE UTF8MB4_UNICODE_520_CI DEFAULT NULL,
    `email` VARCHAR(200) COLLATE UTF8MB4_UNICODE_520_CI DEFAULT NULL,
    `password` VARCHAR(200) DEFAULT NULL,
    PRIMARY KEY (`user_id`)
);

-- Inserting sample values for 'users'
INSERT INTO `users` (`name`, `email`, `password`) VALUES
	('Ethan', 'ethanaharris10@gmail.com', '$2b$12$KSMCPLDpIy2G2vF7AmlaberrVDHH4llQ0x.V0nPLMuKGiq99s5ylC'),
	('Milos', 'vujovicm@cardiff.ac.uk', '$2b$12$KSMCPLDpIy2G2vF7AmlaberrVDHH4llQ0x.V0nPLMuKGiq99s5ylC'),
	('Marwa', 'omarfm@cardiff.ac.uk', '$2b$12$KSMCPLDpIy2G2vF7AmlaberrVDHH4llQ0x.V0nPLMuKGiq99s5ylC'),
	('Adam', 'kalbouneha@cardiff.ac.uk', '$2b$12$KSMCPLDpIy2G2vF7AmlaberrVDHH4llQ0x.V0nPLMuKGiq99s5ylC'),
	('Ahmad', 'shahina@cardiff.ac.uk', '$2b$12$KSMCPLDpIy2G2vF7AmlaberrVDHH4llQ0x.V0nPLMuKGiq99s5ylC'),
	('TestingAccount', 'testing@testing.co.uk', '$2b$12$KSMCPLDpIy2G2vF7AmlaberrVDHH4llQ0x.V0nPLMuKGiq99s5ylC');



