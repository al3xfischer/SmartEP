/*
SQLyog Ultimate v12.2.4 (64 bit)
MySQL - 5.7.26 : Database - smartep
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`smartep` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `smartep`;

/*Table structure for table `Action` */

DROP TABLE IF EXISTS `Action`;

CREATE TABLE `Action` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Action` varchar(500) NOT NULL,
  `Stamp` datetime NOT NULL,
  `UserId` int(20) NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `actions_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `Action` */

LOCK TABLES `Action` WRITE;

insert  into `Action`(`Id`,`Action`,`Stamp`,`UserId`) values 
(1,'Change Wohnzimmer Value to 23','2019-05-07 19:32:07',2);

UNLOCK TABLES;

/*Table structure for table `Actor` */

DROP TABLE IF EXISTS `Actor`;

CREATE TABLE `Actor` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Value` varchar(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `Actor` */

LOCK TABLES `Actor` WRITE;

insert  into `Actor`(`Id`,`Name`,`Value`) values 
(1,'HZG Wohnzimmer','23'),
(2,'HZG Schlafzimmer','22'),
(3,'HZG Büro','21');

UNLOCK TABLES;

/*Table structure for table `Device` */

DROP TABLE IF EXISTS `Device`;

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

/*Data for the table `Device` */

LOCK TABLES `Device` WRITE;

insert  into `Device`(`Id`,`SensorId`,`ActorId`,`Name`) values 
(1,1,1,'Wohnzimmer'),
(2,2,2,'Schlafzimmer'),
(3,3,3,'Büro');

UNLOCK TABLES;

/*Table structure for table `Log` */

DROP TABLE IF EXISTS `Log`;

CREATE TABLE `Log` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Message` varchar(500) NOT NULL,
  `Stamp` datetime NOT NULL,
  `UserId` int(20) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `logs_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `User` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `Log` */

LOCK TABLES `Log` WRITE;

insert  into `Log`(`Id`,`Message`,`Stamp`,`UserId`) values 
(1,'asdf','2019-05-08 19:12:32',NULL),
(2,'asdf','2019-05-08 19:14:25',NULL);

UNLOCK TABLES;

/*Table structure for table `Role` */

DROP TABLE IF EXISTS `Role`;

CREATE TABLE `Role` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

/*Data for the table `Role` */

LOCK TABLES `Role` WRITE;

insert  into `Role`(`Id`,`Name`) values 
(1,'user'),
(2,'admin');

UNLOCK TABLES;

/*Table structure for table `Sensor` */

DROP TABLE IF EXISTS `Sensor`;

CREATE TABLE `Sensor` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) NOT NULL,
  `Value` varchar(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `Sensor` */

LOCK TABLES `Sensor` WRITE;

insert  into `Sensor`(`Id`,`Name`,`Value`) values 
(1,'HZG Wohnzimmer','22'),
(2,'HZG Schlafzimmer','22'),
(3,'HZG Büro','21');

UNLOCK TABLES;

/*Table structure for table `User` */

DROP TABLE IF EXISTS `User`;

CREATE TABLE `User` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) DEFAULT NULL,
  `Keyword` varchar(50) NOT NULL,
  `Salt` varchar(200) DEFAULT NULL,
  `RoleId` int(20) NOT NULL,
  `Uuid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `NAME` (`Name`),
  KEY `RoleId` (`RoleId`),
  CONSTRAINT `User_ibfk_1` FOREIGN KEY (`RoleId`) REFERENCES `Role` (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

/*Data for the table `User` */

LOCK TABLES `User` WRITE;

insert  into `User`(`Id`,`Name`,`Keyword`,`Salt`,`RoleId`,`Uuid`) values 
(1,'alex','default',NULL,2,'defautluuid'),
(2,'peter','default',NULL,2,'defautluuid'),
(3,'kevin','default',NULL,2,'defautluuid');

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
