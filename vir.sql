-- MySQL dump 10.13  Distrib 5.6.31, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: vir
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.9-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `account_id` int(11) NOT NULL AUTO_INCREMENT,
  `partner_id` int(11) unsigned NOT NULL,
  `account_type_id` tinyint(3) unsigned NOT NULL,
  `debit` bigint(20) DEFAULT '0',
  `credit` bigint(20) DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`account_id`),
  KEY `fk_account_partner_id` (`partner_id`),
  KEY `fk_account_type_id` (`account_type_id`),
  CONSTRAINT `fk_account_partner_id` FOREIGN KEY (`partner_id`) REFERENCES `partner` (`partner_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_account_type_id` FOREIGN KEY (`account_type_id`) REFERENCES `account_type` (`account_type_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_entry`
--

DROP TABLE IF EXISTS `account_entry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account_entry` (
  `account_entry_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `account_id` int(11) NOT NULL,
  `ledger_account_id` smallint(6) unsigned NOT NULL,
  `debit` mediumint(9) DEFAULT '0',
  `credit` mediumint(9) DEFAULT '0',
  PRIMARY KEY (`account_entry_id`),
  KEY `fk_account_entry_account_id` (`account_id`),
  KEY `fk_account_entry_ledger_account_id` (`ledger_account_id`),
  CONSTRAINT `fk_account_entry_account_id` FOREIGN KEY (`account_id`) REFERENCES `account` (`account_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_account_entry_ledger_account_id` FOREIGN KEY (`ledger_account_id`) REFERENCES `ledger_account` (`ledger_account_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_entry`
--

LOCK TABLES `account_entry` WRITE;
/*!40000 ALTER TABLE `account_entry` DISABLE KEYS */;
/*!40000 ALTER TABLE `account_entry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `account_type`
--

DROP TABLE IF EXISTS `account_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account_type` (
  `account_type_id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` char(2) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`account_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_type`
--

LOCK TABLES `account_type` WRITE;
/*!40000 ALTER TABLE `account_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `account_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `acl`
--

DROP TABLE IF EXISTS `acl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `acl` (
  `acl_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `group_id` int(11) unsigned NOT NULL,
  `resource` varchar(16) NOT NULL,
  `action` varchar(16) NOT NULL,
  PRIMARY KEY (`acl_id`),
  KEY `profilesId` (`group_id`),
  CONSTRAINT `fk_acl_group_id` FOREIGN KEY (`group_id`) REFERENCES `group` (`group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `acl`
--

LOCK TABLES `acl` WRITE;
/*!40000 ALTER TABLE `acl` DISABLE KEYS */;
/*!40000 ALTER TABLE `acl` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact` (
  `contact_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nick_name` varchar(55) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name_prefix` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `last_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `first_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `third_name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `position` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`contact_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_phone`
--

DROP TABLE IF EXISTS `contact_phone`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact_phone` (
  `contact_phone_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `contact_id` int(11) unsigned NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country_code` varchar(3) COLLATE utf8_unicode_ci DEFAULT NULL,
  `prefix` varchar(3) COLLATE utf8_unicode_ci DEFAULT NULL,
  `number` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`contact_phone_id`),
  KEY `fk_contact_phone_id` (`contact_id`),
  CONSTRAINT `fk_contact_phone_id` FOREIGN KEY (`contact_id`) REFERENCES `contact` (`contact_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_phone`
--

LOCK TABLES `contact_phone` WRITE;
/*!40000 ALTER TABLE `contact_phone` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact_phone` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `email_confirmation`
--

DROP TABLE IF EXISTS `email_confirmation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `email_confirmation` (
  `email_confirmation_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `code` char(32) NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  `modified_at` int(10) unsigned DEFAULT NULL,
  `confirmed` char(1) DEFAULT 'N',
  PRIMARY KEY (`email_confirmation_id`),
  KEY `fk_email_confirmation_user_id` (`user_id`),
  CONSTRAINT `fk_email_confirmation_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `email_confirmation`
--

LOCK TABLES `email_confirmation` WRITE;
/*!40000 ALTER TABLE `email_confirmation` DISABLE KEYS */;
/*!40000 ALTER TABLE `email_confirmation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_login`
--

DROP TABLE IF EXISTS `failed_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_login` (
  `failed_login_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `ip_address` char(15) NOT NULL,
  `attempted` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`failed_login_id`),
  KEY `usersId` (`user_id`),
  CONSTRAINT `fk_failed_login_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_login`
--

LOCK TABLES `failed_login` WRITE;
/*!40000 ALTER TABLE `failed_login` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group` (
  `group_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `active` char(1) NOT NULL,
  PRIMARY KEY (`group_id`),
  KEY `active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group`
--

LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
INSERT INTO `group` VALUES (1,'Administrator','Y'),(2,'User','Y'),(3,'Guest','Y'),(101,'Translator','Y');
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ledger_account`
--

DROP TABLE IF EXISTS `ledger_account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ledger_account` (
  `ledger_account_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(155) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ledger_account_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ledger_account`
--

LOCK TABLES `ledger_account` WRITE;
/*!40000 ALTER TABLE `ledger_account` DISABLE KEYS */;
/*!40000 ALTER TABLE `ledger_account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logged_user`
--

DROP TABLE IF EXISTS `logged_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `logged_user` (
  `logged_user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `session` char(32) DEFAULT NULL,
  `salt` char(32) DEFAULT NULL,
  `token` char(128) DEFAULT NULL,
  `last_activity` varchar(45) DEFAULT NULL,
  `is_active` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`logged_user_id`),
  KEY `fk_logged_user_user_id` (`user_id`),
  CONSTRAINT `fk_logged_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logged_user`
--

LOCK TABLES `logged_user` WRITE;
/*!40000 ALTER TABLE `logged_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `logged_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner`
--

DROP TABLE IF EXISTS `partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partner` (
  `partner_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `short_name` varchar(55) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tax_number` char(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`partner_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner`
--

LOCK TABLES `partner` WRITE;
/*!40000 ALTER TABLE `partner` DISABLE KEYS */;
/*!40000 ALTER TABLE `partner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner_address`
--

DROP TABLE IF EXISTS `partner_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partner_address` (
  `partner_address_id` int(11) unsigned NOT NULL,
  `partner_id` int(11) unsigned NOT NULL,
  `country` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `postal` varchar(5) COLLATE utf8_unicode_ci NOT NULL,
  `city` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `street` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `street_type` int(11) unsigned NOT NULL,
  `street_number` int(10) unsigned NOT NULL,
  `floor` int(10) unsigned DEFAULT NULL,
  `door` int(10) unsigned DEFAULT NULL,
  `place` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `comment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`partner_address_id`),
  KEY `fk_partner_address_partner_id` (`partner_id`),
  CONSTRAINT `fk_partner_address_partner_id` FOREIGN KEY (`partner_id`) REFERENCES `partner` (`partner_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner_address`
--

LOCK TABLES `partner_address` WRITE;
/*!40000 ALTER TABLE `partner_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `partner_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partner_bank`
--

DROP TABLE IF EXISTS `partner_bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partner_bank` (
  `partner_bank_id` int(11) NOT NULL,
  `partner_id` int(11) unsigned NOT NULL,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `account` char(24) COLLATE utf8_unicode_ci NOT NULL,
  `bank` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`partner_bank_id`),
  KEY `fk_partner_bank_partner_id` (`partner_id`),
  CONSTRAINT `fk_partner_bank_partner_id` FOREIGN KEY (`partner_id`) REFERENCES `partner` (`partner_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partner_bank`
--

LOCK TABLES `partner_bank` WRITE;
/*!40000 ALTER TABLE `partner_bank` DISABLE KEYS */;
/*!40000 ALTER TABLE `partner_bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_change`
--

DROP TABLE IF EXISTS `password_change`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_change` (
  `password_change_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `ip_address` char(15) NOT NULL,
  `user_agent` varchar(48) NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`password_change_id`),
  KEY `usersId` (`user_id`),
  CONSTRAINT `fk_password_change_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_change`
--

LOCK TABLES `password_change` WRITE;
/*!40000 ALTER TABLE `password_change` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_change` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `remember_token`
--

DROP TABLE IF EXISTS `remember_token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `remember_token` (
  `remember_token_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `token` char(32) NOT NULL,
  `user_agent` varchar(120) NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`remember_token_id`),
  KEY `token` (`token`),
  KEY `fk_remember_token_user_id` (`user_id`),
  CONSTRAINT `fk_remember_token_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `remember_token`
--

LOCK TABLES `remember_token` WRITE;
/*!40000 ALTER TABLE `remember_token` DISABLE KEYS */;
/*!40000 ALTER TABLE `remember_token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reset_password`
--

DROP TABLE IF EXISTS `reset_password`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reset_password` (
  `reset_password_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `code` varchar(48) NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  `modified_at` int(10) unsigned DEFAULT NULL,
  `reset` char(1) NOT NULL,
  PRIMARY KEY (`reset_password_id`),
  KEY `usersId` (`user_id`),
  CONSTRAINT `fk_reset_password_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reset_password`
--

LOCK TABLES `reset_password` WRITE;
/*!40000 ALTER TABLE `reset_password` DISABLE KEYS */;
/*!40000 ALTER TABLE `reset_password` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `success_login`
--

DROP TABLE IF EXISTS `success_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `success_login` (
  `success_login_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `ip_address` char(15) NOT NULL,
  `user_agent` varchar(120) NOT NULL,
  PRIMARY KEY (`success_login_id`),
  KEY `usersId` (`user_id`),
  CONSTRAINT `fk_success_login_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `success_login`
--

LOCK TABLES `success_login` WRITE;
/*!40000 ALTER TABLE `success_login` DISABLE KEYS */;
/*!40000 ALTER TABLE `success_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` char(60) NOT NULL,
  `salt` char(32) NOT NULL,
  `must_change_password` char(1) DEFAULT NULL,
  `banned` char(1) NOT NULL,
  `suspended` char(1) NOT NULL,
  `active` char(1) DEFAULT NULL,
  `lang` char(2) NOT NULL DEFAULT 'en',
  `data` blob,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Adminisztrátor','admin@admin.hu','$2y$11$BEK2O/LqMLaMTis8G.9T7uzaKVAtMvnhekM83afk3BNJ8bVLzJeqy','CWBdjk1qBZRxuJtQeQWKP5zZq+Lobw==','N','N','N','Y','hu',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `variable`
--

DROP TABLE IF EXISTS `variable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `variable` (
  `variable_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `value` blob,
  PRIMARY KEY (`variable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `variable`
--

LOCK TABLES `variable` WRITE;
/*!40000 ALTER TABLE `variable` DISABLE KEYS */;
/*!40000 ALTER TABLE `variable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `worksheet`
--

DROP TABLE IF EXISTS `worksheet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `worksheet` (
  `worksheet_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `partner_id` int(10) unsigned NOT NULL,
  `place` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `closed_at` datetime DEFAULT NULL,
  PRIMARY KEY (`worksheet_id`),
  KEY `fk_worksheet_partner_id` (`partner_id`),
  CONSTRAINT `fk_worksheet_partner_id` FOREIGN KEY (`partner_id`) REFERENCES `partner` (`partner_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worksheet`
--

LOCK TABLES `worksheet` WRITE;
/*!40000 ALTER TABLE `worksheet` DISABLE KEYS */;
/*!40000 ALTER TABLE `worksheet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `worksheet_work`
--

DROP TABLE IF EXISTS `worksheet_work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `worksheet_work` (
  `worksheet_work_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `worksheet_id` int(10) unsigned NOT NULL,
  `worksheet_worktype_id` int(10) unsigned NOT NULL,
  `duration` mediumint(8) unsigned DEFAULT NULL,
  `quantity` int(10) unsigned DEFAULT NULL,
  `accounting_basis` enum('quantity','duration') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'quantity',
  `unit_price` int(10) unsigned NOT NULL,
  `created_at` datetime NOT NULL,
  `closed_at` datetime DEFAULT NULL,
  PRIMARY KEY (`worksheet_work_id`),
  KEY `fk_worksheet_work_worksheet_id` (`worksheet_id`),
  KEY `fk_worksheet_work_worksheet_worktype_id` (`worksheet_worktype_id`),
  CONSTRAINT `fk_worksheet_work_worksheet_id` FOREIGN KEY (`worksheet_id`) REFERENCES `worksheet` (`worksheet_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_worksheet_work_worksheet_worktype_id` FOREIGN KEY (`worksheet_worktype_id`) REFERENCES `worksheet_worktype` (`worksheet_worktype_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worksheet_work`
--

LOCK TABLES `worksheet_work` WRITE;
/*!40000 ALTER TABLE `worksheet_work` DISABLE KEYS */;
/*!40000 ALTER TABLE `worksheet_work` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `worksheet_worktype`
--

DROP TABLE IF EXISTS `worksheet_worktype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `worksheet_worktype` (
  `worksheet_worktype_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `accounting_basis` enum('duration','quantity') COLLATE utf8_unicode_ci NOT NULL,
  `unit_price` int(10) unsigned NOT NULL,
  PRIMARY KEY (`worksheet_worktype_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `worksheet_worktype`
--

LOCK TABLES `worksheet_worktype` WRITE;
/*!40000 ALTER TABLE `worksheet_worktype` DISABLE KEYS */;
/*!40000 ALTER TABLE `worksheet_worktype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `x_contact_partner`
--

DROP TABLE IF EXISTS `x_contact_partner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `x_contact_partner` (
  `x_contact_partner_id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_id` int(11) unsigned DEFAULT NULL,
  `partner_id` int(11) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`x_contact_partner_id`),
  KEY `fk_contact_id` (`contact_id`),
  KEY `fk_partner_id` (`partner_id`),
  CONSTRAINT `fk_contact_id` FOREIGN KEY (`contact_id`) REFERENCES `contact` (`contact_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_partner_id` FOREIGN KEY (`partner_id`) REFERENCES `partner` (`partner_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `x_contact_partner`
--

LOCK TABLES `x_contact_partner` WRITE;
/*!40000 ALTER TABLE `x_contact_partner` DISABLE KEYS */;
/*!40000 ALTER TABLE `x_contact_partner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `x_user_group`
--

DROP TABLE IF EXISTS `x_user_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `x_user_group` (
  `x_user_group_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `group_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`x_user_group_id`),
  KEY `fk_user_group_user_id` (`user_id`),
  KEY `fk_user_group_group_id` (`group_id`),
  CONSTRAINT `fk_user_group_group_id` FOREIGN KEY (`group_id`) REFERENCES `group` (`group_id`),
  CONSTRAINT `fk_user_group_user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `x_user_group`
--

LOCK TABLES `x_user_group` WRITE;
/*!40000 ALTER TABLE `x_user_group` DISABLE KEYS */;
INSERT INTO `x_user_group` VALUES (1,1,1),(2,1,101);
/*!40000 ALTER TABLE `x_user_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'vir'
--

--
-- Dumping routines for database 'vir'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-10 17:05:06
