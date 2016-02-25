-- MySQL dump 10.16  Distrib 10.1.9-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: objfw
-- ------------------------------------------------------
-- Server version	10.1.9-MariaDB

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
-- Table structure for table `cache`
--

DROP TABLE IF EXISTS `cache`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cache` (
  `key` varchar(192) COLLATE utf8_bin NOT NULL,
  `data` longblob NOT NULL,
  `expires` int(10) unsigned NOT NULL,
  PRIMARY KEY (`key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cache`
--

LOCK TABLES `cache` WRITE;
/*!40000 ALTER TABLE `cache` DISABLE KEYS */;
/*!40000 ALTER TABLE `cache` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `csaba_test_favorite`
--

DROP TABLE IF EXISTS `csaba_test_favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `csaba_test_favorite` (
  `ctfid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `csatorna` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ctfid`),
  UNIQUE KEY `csaba_test_favorite_uid_unique` (`ctfid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `csaba_test_favorite`
--

LOCK TABLES `csaba_test_favorite` WRITE;
/*!40000 ALTER TABLE `csaba_test_favorite` DISABLE KEYS */;
INSERT INTO `csaba_test_favorite` VALUES (0,0,''),(2,1,'HBO'),(3,1,'DIGI FILM'),(15,1,'MTV'),(16,1,'National Geographic'),(17,1,'Comedy Central');
/*!40000 ALTER TABLE `csaba_test_favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group` (
  `gid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) DEFAULT NULL,
  `allow` text,
  `deny` text,
  `created` int(10) unsigned DEFAULT NULL,
  `created_uid` int(10) unsigned DEFAULT NULL,
  `modified` int(10) unsigned DEFAULT NULL,
  `modified_uid` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`gid`),
  UNIQUE KEY `name` (`name`),
  KEY `created_uid` (`created_uid`),
  KEY `modified_uid` (`modified_uid`),
  CONSTRAINT `group_ibfk_1` FOREIGN KEY (`created_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `group_ibfk_2` FOREIGN KEY (`modified_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group`
--

LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
INSERT INTO `group` VALUES (0,'Guest','a:0:{}','a:0:{}',NULL,NULL,NULL,NULL),(1,'Administrators','a:0:{}','a:0:{}',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info`
--

DROP TABLE IF EXISTS `info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `info` (
  `mid` int(10) NOT NULL AUTO_INCREMENT,
  `uid_to` int(10) unsigned DEFAULT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text NOT NULL,
  `uid` int(10) unsigned DEFAULT NULL,
  `created` int(10) unsigned DEFAULT NULL,
  `created_uid` int(10) unsigned DEFAULT NULL,
  `modified` int(10) unsigned DEFAULT NULL,
  `modified_uid` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`mid`),
  KEY `uid` (`uid`),
  KEY `uid_to` (`uid_to`),
  KEY `created_uid` (`created_uid`),
  KEY `modified_uid` (`modified_uid`),
  CONSTRAINT `info_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `info_ibfk_2` FOREIGN KEY (`uid_to`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `info_ibfk_3` FOREIGN KEY (`created_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `info_ibfk_4` FOREIGN KEY (`modified_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info`
--

LOCK TABLES `info` WRITE;
/*!40000 ALTER TABLE `info` DISABLE KEYS */;
/*!40000 ALTER TABLE `info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info_status`
--

DROP TABLE IF EXISTS `info_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `info_status` (
  `mid` int(10) NOT NULL,
  `uid` int(10) unsigned NOT NULL,
  `read` int(10) unsigned NOT NULL,
  PRIMARY KEY (`mid`,`uid`),
  KEY `uid` (`uid`),
  CONSTRAINT `info_status_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info_status`
--

LOCK TABLES `info_status` WRITE;
/*!40000 ALTER TABLE `info_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `info_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lang`
--

DROP TABLE IF EXISTS `lang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `lang` (
  `md5` varchar(32) NOT NULL,
  `page` varchar(128) DEFAULT NULL,
  `en` mediumblob NOT NULL,
  `hu` mediumblob,
  `created` int(10) unsigned DEFAULT NULL,
  `created_uid` int(10) unsigned DEFAULT NULL,
  `modified` int(10) unsigned DEFAULT NULL,
  `modified_uid` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`md5`),
  KEY `created_uid` (`created_uid`),
  KEY `modified_uid` (`modified_uid`),
  CONSTRAINT `lang_ibfk_1` FOREIGN KEY (`created_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `lang_ibfk_2` FOREIGN KEY (`modified_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lang`
--

LOCK TABLES `lang` WRITE;
/*!40000 ALTER TABLE `lang` DISABLE KEYS */;
INSERT INTO `lang` VALUES ('0de8fd49700beadf7165edfb8835977b','register','captcha failed',NULL,NULL,NULL,NULL,NULL),('1d27f3c3390e9964df1d1f83841e548b','403#page::error/403','click here to login',NULL,NULL,NULL,NULL,NULL),('526da8f2c92c8f3f99e999037cf0bf7f','register','registration successful',NULL,NULL,NULL,NULL,NULL),('563873d38950b841aebf89c3be1b1a35','register','registration',NULL,NULL,NULL,NULL,NULL),('5e81ad3847a290dc650b47618b9cbc7e','user/login','login failed',NULL,NULL,NULL,NULL,NULL),('5f4dcc3b5aa765d61d8327deb882cf99','user/login#page::user/login','password',NULL,NULL,NULL,NULL,NULL),('61edd15fc4c64e4e00b8418fcfbf6f8e','register',':count min',NULL,NULL,NULL,NULL,NULL),('6efa341755b558aecbcac98c8b4a281d','403#page::error/403','you not have permission to access this page (%path)',NULL,NULL,NULL,NULL,NULL),('72ab9d0304d3e84c6aa2dd15eda282f2','register','1 hour',NULL,NULL,NULL,NULL,NULL),('9358286ff91b513aa424c92c8142e6e5','user/login#layout::default','this site makes extensive use of javaScript.</b><br />Please <a href=\"https://www.google.com/support/adsense/bin/answer.py?answer=12654\">enable javaScript</a> in your internet browser',NULL,NULL,NULL,NULL,NULL),('b2e4eb4227f40ad00677e50bae438eff','user/login#page::user/login','username or e-mail',NULL,NULL,NULL,NULL,NULL),('c54cf9ece8e0637f5afb3d29f560b244','user/login#page::user/login','lost password recovery',NULL,NULL,NULL,NULL,NULL),('d341f745e16e4c6b60cc6a694226cbe9','user/login','user not found or password is not match',NULL,NULL,NULL,NULL,NULL),('d56b699830e77ba53855679cb1d252da','user/login#page::user/login','login',NULL,NULL,NULL,NULL,NULL),('ed4c19ebd6e636375b5c245ec162a4b4','register/activate','this account isn\'t exists',NULL,NULL,NULL,NULL,NULL),('fd9160bbd656f75ab74e8935e4330d9e','user/login#widget::sidebar','navigation',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `lang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mail_queue`
--

DROP TABLE IF EXISTS `mail_queue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mail_queue` (
  `mqid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `recipient_set` mediumblob NOT NULL,
  `subject` varchar(255) NOT NULL,
  `body` mediumblob NOT NULL,
  `status` enum('new','pending','in_progress','on_hold','success','cancelled','failed') NOT NULL DEFAULT 'new',
  `created` int(10) unsigned DEFAULT NULL,
  `created_uid` int(10) unsigned DEFAULT NULL,
  `modified` int(10) unsigned DEFAULT NULL,
  `modified_uid` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`mqid`),
  KEY `created_uid` (`created_uid`),
  KEY `modified_uid` (`modified_uid`),
  CONSTRAINT `mail_queue_ibfk_1` FOREIGN KEY (`created_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `mail_queue_ibfk_2` FOREIGN KEY (`modified_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mail_queue`
--

LOCK TABLES `mail_queue` WRITE;
/*!40000 ALTER TABLE `mail_queue` DISABLE KEYS */;
/*!40000 ALTER TABLE `mail_queue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mail_queue_addr`
--

DROP TABLE IF EXISTS `mail_queue_addr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mail_queue_addr` (
  `mqaid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `mqid` int(10) unsigned NOT NULL,
  `rsetid` int(10) unsigned NOT NULL,
  `email` varchar(255) NOT NULL,
  `try` tinyint(2) unsigned NOT NULL DEFAULT '0',
  `status` enum('new','pending','success','cancelled','failed') NOT NULL DEFAULT 'new',
  `error` varchar(128) DEFAULT NULL,
  `created` int(10) unsigned DEFAULT NULL,
  `modified` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`mqaid`),
  KEY `mqid` (`mqid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mail_queue_addr`
--

LOCK TABLES `mail_queue_addr` WRITE;
/*!40000 ALTER TABLE `mail_queue_addr` DISABLE KEYS */;
/*!40000 ALTER TABLE `mail_queue_addr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `session` (
  `sid` varchar(128) COLLATE utf8_bin NOT NULL,
  `uid` int(10) unsigned NOT NULL,
  `updated` int(10) unsigned NOT NULL,
  `OS` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `data` varchar(4096) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`sid`),
  KEY `uid` (`uid`)
) ENGINE=MEMORY DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL DEFAULT '-',
  `pass` varchar(32) DEFAULT NULL,
  `real_name` varchar(128) DEFAULT NULL,
  `state` enum('new','enabled','disabled') NOT NULL DEFAULT 'new',
  `gid` varchar(255) DEFAULT NULL,
  `def_gid` int(10) unsigned DEFAULT NULL,
  `lang` enum('en','hu') NOT NULL DEFAULT 'hu',
  `email` varchar(128) DEFAULT NULL,
  `phone` int(13) unsigned DEFAULT NULL,
  `credits` decimal(6,2) unsigned NOT NULL DEFAULT '0.00',
  `lastlogin` int(10) unsigned DEFAULT NULL,
  `lastsessid` varchar(32) DEFAULT NULL,
  `created` int(10) unsigned DEFAULT NULL,
  `created_uid` int(10) unsigned DEFAULT NULL,
  `created_ip` varchar(15) DEFAULT NULL,
  `created_host` varchar(32) DEFAULT NULL,
  `modified` int(10) unsigned DEFAULT NULL,
  `modified_uid` int(10) unsigned DEFAULT NULL,
  `modified_ip` varchar(15) DEFAULT NULL,
  `modified_host` varchar(32) DEFAULT NULL,
  `data` blob,
  PRIMARY KEY (`uid`),
  UNIQUE KEY `name` (`name`),
  KEY `created_uid` (`created_uid`),
  KEY `modified_uid` (`modified_uid`),
  KEY `def_gid` (`def_gid`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`created_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`modified_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `user_ibfk_3` FOREIGN KEY (`def_gid`) REFERENCES `group` (`gid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'admin','21232f297a57a5a743894a0e4a801fc3','Administrator','enabled','1',1,'en',NULL,NULL,0.00,1456301714,'463a2f00479f451872876199c783b448',1340189442,NULL,NULL,NULL,1456301714,1,'10.160.6.68','csaba-ThinkCentre-M73.local','N;'),(18,'csaba.farkas','f8a35086a20c2bab8b8c2f794b15b360','Csaba Farkas','enabled','1',1,'hu','csaba.farkas@digi.co.hu',0,0.00,NULL,NULL,1454571979,1,'10.160.6.68','csaba-ThinkCentre-M73.local',1455275379,1,'10.160.6.68','csaba-ThinkCentre-M73.local',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vars`
--

DROP TABLE IF EXISTS `vars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `vars` (
  `grp` varchar(128) NOT NULL,
  `key` varchar(32) NOT NULL,
  `value` varchar(255) NOT NULL,
  `value2` text NOT NULL,
  `value3` varchar(255) NOT NULL,
  `parent` varchar(16) NOT NULL,
  `state` enum('disabled','enabled') NOT NULL DEFAULT 'enabled',
  `created` int(10) unsigned DEFAULT NULL,
  `created_uid` int(10) unsigned DEFAULT NULL,
  `modified` int(10) unsigned DEFAULT NULL,
  `modified_uid` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`key`,`grp`,`parent`),
  KEY `created_uid` (`created_uid`),
  KEY `modified_uid` (`modified_uid`),
  CONSTRAINT `vars_ibfk_1` FOREIGN KEY (`created_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `vars_ibfk_2` FOREIGN KEY (`modified_uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vars`
--

LOCK TABLES `vars` WRITE;
/*!40000 ALTER TABLE `vars` DISABLE KEYS */;
/*!40000 ALTER TABLE `vars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `watchdog`
--

DROP TABLE IF EXISTS `watchdog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `watchdog` (
  `wid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Primary Key: Unique watchdog event ID.',
  `uid` int(10) unsigned DEFAULT NULL COMMENT 'The users.uid of the user who triggered the event.',
  `type` varchar(64) NOT NULL DEFAULT '' COMMENT 'Type of log message, for example "user" or "page not found."',
  `message` longblob NOT NULL COMMENT 'Text of log message to be passed into the t() function.',
  `uname` varchar(64) NOT NULL COMMENT 'User name logged in when entry created.',
  `variables` longblob NOT NULL COMMENT 'Serialized array of variables that match the message string and that is passed into the t() function.',
  `severity` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT 'The severity level of the event; ranges from 0 (Emergency) to 7 (Debug)',
  `link` varchar(128) DEFAULT '' COMMENT 'Link to view the result of the event.',
  `location` text NOT NULL COMMENT 'URL of the origin of the event.',
  `referer` text COMMENT 'URL of referring page.',
  `hostname` varchar(32) NOT NULL DEFAULT '' COMMENT 'Hostname of the user who triggered the event.',
  `timestamp` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'Unix timestamp of when event occurred.',
  PRIMARY KEY (`wid`),
  KEY `type` (`type`),
  KEY `uid` (`uid`),
  CONSTRAINT `watchdog_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Table that contains logs of all system events.';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `watchdog`
--

LOCK TABLES `watchdog` WRITE;
/*!40000 ALTER TABLE `watchdog` DISABLE KEYS */;
/*!40000 ALTER TABLE `watchdog` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-02-25 15:53:31
