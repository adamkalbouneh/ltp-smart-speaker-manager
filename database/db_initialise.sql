-- Dumping database structure for e2s_db
CREATE DATABASE IF NOT EXISTS `app_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci */;
USE `app_db`;

-- Dumping structure for table app_db.test_table
CREATE TABLE IF NOT EXISTS `test` (
  `test_id` int(11) NOT NULL AUTO_INCREMENT,
  `test_name` varchar(200) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL,
  PRIMARY KEY (`test_id`)
);

INSERT INTO `test` (`test_name`) VALUES
	('Phil'),
	('Bob'),
	('Frank'),
	('Garry');


