USE `mysql`;

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
	('TestingAccount', 'testing@testing.co.uk', '$2b$12$KSMCPLDpIy2G2vF7AmlaberrVDHH4llQ0x.V0nPLMuKGiq99s5ylC');



