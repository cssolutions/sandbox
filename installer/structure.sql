

DROP TABLE IF EXISTS `csaba_test_favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `csaba_test_favorite` (
  `ctfid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `csatorna` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ctfid`),
  UNIQUE KEY `csaba_test_favorite_uid_unique` (`ctfid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;


LOCK TABLES `csaba_test_favorite` WRITE;
/*!40000 ALTER TABLE `csaba_test_favorite` DISABLE KEYS */;
INSERT INTO `csaba_test_favorite` VALUES (1,1,'http://www.google.hu'),(2,1,'https://www.drupal.org/documentation'),(3,1,'http://index.hu/'),(4,1,'http://vicclap.hu/'),(6,1,'duna');
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


LOCK TABLES `group` WRITE;
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
INSERT INTO `group` VALUES (0,'Guest','a:0:{}','a:0:{}',NULL,NULL,NULL,NULL),(1,'Administrators','a:0:{}','a:0:{}',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `group` ENABLE KEYS */;
UNLOCK TABLES;
