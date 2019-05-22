-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: smartep
-- ------------------------------------------------------
-- Server version	5.7.26

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

DROP DATABASE IF EXISTS smartep;

CREATE DATABASE smartep;

USE smartep;

--
-- Table structure for table `Action`
--

DROP TABLE IF EXISTS `Action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Action` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Action` text NOT NULL,
  `Stamp` datetime NOT NULL,
  `UserId` int(20) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `actions_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Action`
--

LOCK TABLES `Action` WRITE;
/*!40000 ALTER TABLE `Action` DISABLE KEYS */;
INSERT INTO `Action` VALUES (3,'name: \'Heizung Buero\' to \'Heizung Buero Boden\'','2019-05-22 13:10:21',8),(4,'name: \'Heizung Schlafzimmer\' to \'Heizung Schlafzimmer Alt\'','2019-05-22 13:12:33',8);
/*!40000 ALTER TABLE `Action` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Actor`
--

DROP TABLE IF EXISTS `Actor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Actor` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Value` varchar(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Actor`
--

LOCK TABLES `Actor` WRITE;
/*!40000 ALTER TABLE `Actor` DISABLE KEYS */;
INSERT INTO `Actor` VALUES (1,'HZG Wohnzimmer','22'),(2,'HZG Schlafzimmer','22'),(3,'HZG Buero','21');
/*!40000 ALTER TABLE `Actor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Device`
--

DROP TABLE IF EXISTS `Device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Device` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `SensorId` int(20) NOT NULL,
  `ActorId` int(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `SensorId` (`SensorId`),
  KEY `ActorId` (`ActorId`),
  CONSTRAINT `devices_ibfk_1` FOREIGN KEY (`SensorId`) REFERENCES `Sensor` (`Id`),
  CONSTRAINT `devices_ibfk_2` FOREIGN KEY (`ActorId`) REFERENCES `Actor` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Device`
--

LOCK TABLES `Device` WRITE;
/*!40000 ALTER TABLE `Device` DISABLE KEYS */;
INSERT INTO `Device` VALUES (1,1,1,'Heizung Wohnzimmer XYZ'),(2,2,2,'Heizung Schlafzimmer Alt'),(3,3,3,'Heizung Buero Boden');
/*!40000 ALTER TABLE `Device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Log`
--

DROP TABLE IF EXISTS `Log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Log` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Message` text NOT NULL,
  `Stamp` datetime NOT NULL,
  `UserId` int(20) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `logs_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Log`
--

LOCK TABLES `Log` WRITE;
/*!40000 ALTER TABLE `Log` DISABLE KEYS */;
INSERT INTO `Log` VALUES (1,'error: QueryFailedError: ER_DUP_ENTRY: Duplicate entry \'testUser\' for key \'NAME\'','2019-05-18 10:02:07',NULL),(2,'error: QueryFailedError: ER_DUP_ENTRY: Duplicate entry \'asdf\' for key \'NAME\'','2019-05-18 10:50:35',NULL),(3,'error: QueryFailedError: ER_DUP_ENTRY: Duplicate entry \'asdf\' for key \'NAME\'','2019-05-18 10:50:36',NULL),(4,'error: QueryFailedError: ER_DUP_ENTRY: Duplicate entry \'asdf\' for key \'NAME\'','2019-05-18 10:50:36',NULL),(5,'error: QueryFailedError: ER_DUP_ENTRY: Duplicate entry \'asdf\' for key \'NAME\'','2019-05-18 10:50:36',NULL),(6,'error: QueryFailedError: ER_DUP_ENTRY: Duplicate entry \'asdf\' for key \'NAME\'','2019-05-18 10:50:37',NULL),(7,'error: QueryFailedError: ER_DUP_ENTRY: Duplicate entry \'asdf\' for key \'NAME\'','2019-05-18 10:50:37',NULL),(8,'error: QueryFailedError: ER_DUP_ENTRY: Duplicate entry \'asdf\' for key \'NAME\'','2019-05-18 10:50:37',NULL),(9,'error: QueryFailedError: ER_DUP_ENTRY: Duplicate entry \'asdf\' for key \'NAME\'','2019-05-18 10:50:38',NULL),(10,'(GET) / => {}','2019-05-22 13:03:50',NULL),(11,'(GET) /runtime.js => {}','2019-05-22 13:03:50',NULL),(12,'(GET) /polyfills.js => {}','2019-05-22 13:03:50',NULL),(13,'(GET) /vendor.js => {}','2019-05-22 13:03:50',NULL),(14,'(GET) /styles.js => {}','2019-05-22 13:03:50',NULL),(15,'(GET) /main.js => {}','2019-05-22 13:03:50',NULL),(16,'(POST) /api/register => {\"name\":\"user\",\"keyword\":\"user\"}','2019-05-22 13:04:27',NULL),(17,'(GET) /login => {}','2019-05-22 13:07:31',NULL),(18,'(GET) /runtime.js => {}','2019-05-22 13:07:31',NULL),(19,'(GET) /polyfills.js => {}','2019-05-22 13:07:31',NULL),(20,'(GET) /styles.js => {}','2019-05-22 13:07:31',NULL),(21,'(GET) /vendor.js => {}','2019-05-22 13:07:31',NULL),(22,'(GET) /main.js => {}','2019-05-22 13:07:31',NULL),(23,'(GET) /favicon.ico => {}','2019-05-22 13:07:32',NULL),(24,'(POST) /api/login => {\"name\":\"alex\",\"keyword\":\"alex\"}','2019-05-22 13:07:36',NULL),(25,'(GET) /api/devices => {}','2019-05-22 13:07:38',NULL),(26,'(POST) /api/login => {\"name\":\"user\",\"keyword\":\"user\"}','2019-05-22 13:07:45',NULL),(27,'(GET) /api/devices => {}','2019-05-22 13:07:47',NULL),(28,'(GET) /runtime.js.map => {}','2019-05-22 13:08:11',NULL),(29,'(GET) /polyfills.js.map => {}','2019-05-22 13:08:11',NULL),(30,'(GET) /styles.js.map => {}','2019-05-22 13:08:11',NULL),(31,'(GET) /vendor.js.map => {}','2019-05-22 13:08:11',NULL),(32,'(GET) /main.js.map => {}','2019-05-22 13:08:11',NULL),(33,'(GET) /devices => {}','2019-05-22 13:08:52',NULL),(34,'(GET) /runtime.js => {}','2019-05-22 13:08:52',NULL),(35,'(GET) /polyfills.js => {}','2019-05-22 13:08:52',NULL),(36,'(GET) /styles.js => {}','2019-05-22 13:08:52',NULL),(37,'(GET) /vendor.js => {}','2019-05-22 13:08:52',NULL),(38,'(GET) /main.js => {}','2019-05-22 13:08:52',NULL),(39,'(GET) /runtime.js.map => {}','2019-05-22 13:08:52',NULL),(40,'(GET) /polyfills.js.map => {}','2019-05-22 13:08:52',NULL),(41,'(GET) /styles.js.map => {}','2019-05-22 13:08:52',NULL),(42,'(GET) /vendor.js.map => {}','2019-05-22 13:08:52',NULL),(43,'(GET) /main.js.map => {}','2019-05-22 13:08:52',NULL),(44,'(GET) /api/devices => {}','2019-05-22 13:08:53',NULL),(45,'(GET) /favicon.ico => {}','2019-05-22 13:08:53',NULL),(46,'(GET) /api/devices => {}','2019-05-22 13:08:55',NULL),(47,'(GET) /api/actions => {}','2019-05-22 13:08:55',NULL),(48,'error: QueryFailedError: ER_DATA_TOO_LONG: Data too long for column \'Message\' at row 1','2019-05-22 13:10:21',NULL),(49,'(GET) /admin => {}','2019-05-22 13:10:24',NULL),(50,'(GET) /runtime.js => {}','2019-05-22 13:10:24',NULL),(51,'(GET) /polyfills.js => {}','2019-05-22 13:10:24',NULL),(52,'(GET) /styles.js => {}','2019-05-22 13:10:24',NULL),(53,'(GET) /vendor.js => {}','2019-05-22 13:10:24',NULL),(54,'(GET) /main.js => {}','2019-05-22 13:10:24',NULL),(55,'(GET) /runtime.js.map => {}','2019-05-22 13:10:24',NULL),(56,'(GET) /polyfills.js.map => {}','2019-05-22 13:10:24',NULL),(57,'(GET) /styles.js.map => {}','2019-05-22 13:10:24',NULL),(58,'(GET) /vendor.js.map => {}','2019-05-22 13:10:24',NULL),(59,'(GET) /main.js.map => {}','2019-05-22 13:10:24',NULL),(60,'(GET) /api/devices => {}','2019-05-22 13:10:24',NULL),(61,'(GET) /api/actions => {}','2019-05-22 13:10:24',NULL),(62,'(GET) /favicon.ico => {}','2019-05-22 13:10:24',NULL),(63,'(PUT) /api/update/devices => {\"devices\":[{\"id\":1,\"sensorId\":1,\"actorId\":1,\"name\":\"Heizung Wohnzimmer XYZ\",\"actor\":{\"id\":1,\"name\":\"HZG Wohnzimmer\",\"value\":\"22\"},\"sensor\":{\"id\":1,\"name\":\"HZG Wohnzimmer\",\"value\":\"22\"}},{\"id\":2,\"sensorId\":2,\"actorId\":2,\"name\":\"Heizung Schlafzimmer\",\"actor\":{\"id\":2,\"name\":\"HZG Schlafzimmer\",\"value\":\"22\"},\"sensor\":{\"id\":2,\"name\":\"HZG Schlafzimmer\",\"value\":\"22\"}},{\"id\":3,\"sensorId\":3,\"actorId\":3,\"name\":\"Heizung Buero Boden\",\"actor\":{\"id\":3,\"name\":\"HZG Buero\",\"value\":\"21\"},\"sensor\":{\"id\":3,\"name\":\"HZG Buero\",\"value\":\"21\"}}]}','2019-05-22 13:11:28',NULL),(64,'(GET) /admin => {}','2019-05-22 13:11:38',NULL),(65,'(GET) /runtime.js => {}','2019-05-22 13:11:38',NULL),(66,'(GET) /polyfills.js => {}','2019-05-22 13:11:38',NULL),(67,'(GET) /styles.js => {}','2019-05-22 13:11:38',NULL),(68,'(GET) /vendor.js => {}','2019-05-22 13:11:38',NULL),(69,'(GET) /main.js => {}','2019-05-22 13:11:38',NULL),(70,'(GET) /runtime.js.map => {}','2019-05-22 13:11:38',NULL),(71,'(GET) /polyfills.js.map => {}','2019-05-22 13:11:38',NULL),(72,'(GET) /styles.js.map => {}','2019-05-22 13:11:38',NULL),(73,'(GET) /vendor.js.map => {}','2019-05-22 13:11:38',NULL),(74,'(GET) /main.js.map => {}','2019-05-22 13:11:39',NULL),(75,'(GET) /api/devices => {}','2019-05-22 13:11:39',NULL),(76,'(GET) /api/actions => {}','2019-05-22 13:11:39',NULL),(77,'(GET) /favicon.ico => {}','2019-05-22 13:11:39',NULL),(78,'(PUT) /api/update/devices => {\"devices\":[{\"id\":1,\"sensorId\":1,\"actorId\":1,\"name\":\"Heizung Wohnzimmer XYZ\",\"actor\":{\"id\":1,\"name\":\"HZG Wohnzimmer\",\"value\":\"22\"},\"sensor\":{\"id\":1,\"name\":\"HZG Wohnzimmer\",\"value\":\"22\"}},{\"id\":2,\"sensorId\":2,\"actorId\":2,\"name\":\"Heizung Schlafzimmer Alt\",\"actor\":{\"id\":2,\"name\":\"HZG Schlafzimmer\",\"value\":\"22\"},\"sensor\":{\"id\":2,\"name\":\"HZG Schlafzimmer\",\"value\":\"22\"}},{\"id\":3,\"sensorId\":3,\"actorId\":3,\"name\":\"Heizung Buero Boden\",\"actor\":{\"id\":3,\"name\":\"HZG Buero\",\"value\":\"21\"},\"sensor\":{\"id\":3,\"name\":\"HZG Buero\",\"value\":\"21\"}}]}','2019-05-22 13:12:33',NULL),(79,'(GET) /admin => {}','2019-05-22 13:12:40',NULL),(80,'(GET) /runtime.js => {}','2019-05-22 13:12:40',NULL),(81,'(GET) /polyfills.js => {}','2019-05-22 13:12:40',NULL),(82,'(GET) /styles.js => {}','2019-05-22 13:12:40',NULL),(83,'(GET) /vendor.js => {}','2019-05-22 13:12:40',NULL),(84,'(GET) /main.js => {}','2019-05-22 13:12:40',NULL),(85,'(GET) /runtime.js.map => {}','2019-05-22 13:12:40',NULL),(86,'(GET) /polyfills.js.map => {}','2019-05-22 13:12:40',NULL),(87,'(GET) /styles.js.map => {}','2019-05-22 13:12:40',NULL),(88,'(GET) /vendor.js.map => {}','2019-05-22 13:12:40',NULL),(89,'(GET) /main.js.map => {}','2019-05-22 13:12:40',NULL),(90,'(GET) /api/devices => {}','2019-05-22 13:12:40',NULL),(91,'(GET) /api/actions => {}','2019-05-22 13:12:40',NULL),(92,'(GET) /favicon.ico => {}','2019-05-22 13:12:41',NULL),(93,'(GET) /MaterialIcons-Regular.woff2 => {}','2019-05-22 13:13:27',NULL),(94,'(GET) /runtime.js.map => {}','2019-05-22 13:13:36',NULL),(95,'(GET) /polyfills.js.map => {}','2019-05-22 13:13:36',NULL),(96,'(GET) /styles.js.map => {}','2019-05-22 13:13:36',NULL),(97,'(GET) /vendor.js.map => {}','2019-05-22 13:13:36',NULL),(98,'(GET) /main.js.map => {}','2019-05-22 13:13:36',NULL),(99,'(PUT) /api/update/devices => {\"devices\":[{\"id\":1,\"sensorId\":1,\"actorId\":1,\"name\":\"Heizung Wohnzimmer XYZ\",\"actor\":{\"id\":1,\"name\":\"HZG Wohnzimmer\",\"value\":\"22\"},\"sensor\":{\"id\":1,\"name\":\"HZG Wohnzimmer\",\"value\":\"22\"}},{\"id\":2,\"sensorId\":2,\"actorId\":2,\"name\":\"Heizung Schlafzimmer Alt\",\"actor\":{\"id\":2,\"name\":\"HZG Schlafzimmer\",\"value\":\"22\"},\"sensor\":{\"id\":2,\"name\":\"HZG Schlafzimmer\",\"value\":\"22\"}},{\"id\":3,\"sensorId\":3,\"actorId\":3,\"name\":\"Heizung Buero Boden\",\"actor\":{\"id\":3,\"name\":\"HZG Buero\",\"value\":\"21\"},\"sensor\":{\"id\":3,\"name\":\"HZG Buero\",\"value\":\"21\"}}]}','2019-05-22 13:13:47',NULL);
/*!40000 ALTER TABLE `Log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Role` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Role`
--

LOCK TABLES `Role` WRITE;
/*!40000 ALTER TABLE `Role` DISABLE KEYS */;
INSERT INTO `Role` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `Role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sensor`
--

DROP TABLE IF EXISTS `Sensor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sensor` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Value` varchar(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sensor`
--

LOCK TABLES `Sensor` WRITE;
/*!40000 ALTER TABLE `Sensor` DISABLE KEYS */;
INSERT INTO `Sensor` VALUES (1,'HZG Wohnzimmer','22'),(2,'HZG Schlafzimmer','22'),(3,'HZG Buero','21');
/*!40000 ALTER TABLE `Sensor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `Keyword` varchar(200) NOT NULL,
  `Salt` varchar(200) NOT NULL,
  `RoleId` int(20) NOT NULL,
  `Uuid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `NAME` (`Name`),
  KEY `RoleId` (`RoleId`),
  CONSTRAINT `User_ibfk_1` FOREIGN KEY (`RoleId`) REFERENCES `Role` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (4,'admin','$2b$15$PUATrUkFAkZ/Jz3iyy2bBum9g2jvPR0Tmv15fis5QqmNUvY2ABEo.','$2b$15$PUATrUkFAkZ/Jz3iyy2bBu',2,'cc8b7d3d-0a90-4f04-b196-07c2ebc09b24'),(8,'user','$2b$15$lv0jnFnXxRtqmOLO19qdGOVYjzMfKS.JfpPeVkcJTjCUSeIP3yrq6','$2b$15$lv0jnFnXxRtqmOLO19qdGO',1,'de4c324d-64d7-45be-bdaf-522a9d5d74b5');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-22 11:15:18
