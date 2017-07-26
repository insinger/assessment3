-- MySQL dump 10.13  Distrib 5.7.18, for osx10.12 (x86_64)
--
-- Host: localhost    Database: quipdb
-- ------------------------------------------------------
-- Server version	5.7.18

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
-- Table structure for table `Billing`
--

DROP TABLE IF EXISTS `Billing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Billing` (
  `Billing_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Users_User_ID` int(11) DEFAULT NULL,
  `Company_Name` varchar(255) DEFAULT NULL,
  `Billing_Address` varchar(255) DEFAULT NULL,
  `Billing_Plan` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Billing_ID`),
  KEY `billing_ibfk_1` (`Users_User_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Billing`
--

LOCK TABLES `Billing` WRITE;
/*!40000 ALTER TABLE `Billing` DISABLE KEYS */;
INSERT INTO `Billing` VALUES (1,1,'Initech','1 Somewhere ave',1,'2017-07-25 14:48:21','2017-07-25 14:48:21');
/*!40000 ALTER TABLE `Billing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ContentRequests`
--

DROP TABLE IF EXISTS `ContentRequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ContentRequests` (
  `Request_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Request_Date` datetime DEFAULT NULL,
  `Request_Text` varchar(255) DEFAULT NULL,
  `Request_DueDate` datetime DEFAULT NULL,
  `Users_User_ID` int(11) NOT NULL,
  `Lessons_Lesson_ID` int(11) NOT NULL,
  `Content_Supplied` int(4) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Request_ID`),
  KEY `Users_User_ID` (`Users_User_ID`),
  KEY `Lessons_Lesson_ID` (`Lessons_Lesson_ID`),
  CONSTRAINT `contentrequests_ibfk_1` FOREIGN KEY (`Users_User_ID`) REFERENCES `Users` (`User_ID`),
  CONSTRAINT `contentrequests_ibfk_2` FOREIGN KEY (`Lessons_Lesson_ID`) REFERENCES `Lessons` (`Lesson_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ContentRequests`
--

LOCK TABLES `ContentRequests` WRITE;
/*!40000 ALTER TABLE `ContentRequests` DISABLE KEYS */;
/*!40000 ALTER TABLE `ContentRequests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DistributionList_Users`
--

DROP TABLE IF EXISTS `DistributionList_Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DistributionList_Users` (
  `Users_User_ID` int(11) NOT NULL,
  `DistributionLists_DistributionList_ID` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Users_User_ID`,`DistributionLists_DistributionList_ID`),
  KEY `DistributionLists_DistributionList_ID` (`DistributionLists_DistributionList_ID`),
  CONSTRAINT `distributionlist_users_ibfk_1` FOREIGN KEY (`Users_User_ID`) REFERENCES `Users` (`User_ID`),
  CONSTRAINT `distributionlist_users_ibfk_2` FOREIGN KEY (`DistributionLists_DistributionList_ID`) REFERENCES `DistributionLists` (`DistributionList_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DistributionList_Users`
--

LOCK TABLES `DistributionList_Users` WRITE;
/*!40000 ALTER TABLE `DistributionList_Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `DistributionList_Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DistributionLists`
--

DROP TABLE IF EXISTS `DistributionLists`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DistributionLists` (
  `DistributionList_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) DEFAULT NULL,
  `Billing_Billing_ID` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`DistributionList_ID`),
  KEY `Billing_Billing_ID` (`Billing_Billing_ID`),
  CONSTRAINT `distributionlists_ibfk_1` FOREIGN KEY (`Billing_Billing_ID`) REFERENCES `Billing` (`Billing_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DistributionLists`
--

LOCK TABLES `DistributionLists` WRITE;
/*!40000 ALTER TABLE `DistributionLists` DISABLE KEYS */;
/*!40000 ALTER TABLE `DistributionLists` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `LessonFeedback`
--

DROP TABLE IF EXISTS `LessonFeedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `LessonFeedback` (
  `Completed` datetime DEFAULT NULL,
  `Lessons_Lesson_ID` int(11) NOT NULL,
  `Users_User_ID` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Lessons_Lesson_ID`,`Users_User_ID`),
  KEY `Users_User_ID` (`Users_User_ID`),
  CONSTRAINT `lessonfeedback_ibfk_1` FOREIGN KEY (`Lessons_Lesson_ID`) REFERENCES `Lessons` (`Lesson_ID`),
  CONSTRAINT `lessonfeedback_ibfk_2` FOREIGN KEY (`Users_User_ID`) REFERENCES `Users` (`User_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `LessonFeedback`
--

LOCK TABLES `LessonFeedback` WRITE;
/*!40000 ALTER TABLE `LessonFeedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `LessonFeedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Lessons`
--

DROP TABLE IF EXISTS `Lessons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Lessons` (
  `Lesson_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Category` varchar(255) DEFAULT NULL,
  `Billing_Billing_ID` int(11) NOT NULL,
  `Lesson_Title` varchar(255) DEFAULT NULL,
  `Lesson_Subtitle` varchar(255) DEFAULT NULL,
  `Publish_Date` datetime DEFAULT NULL,
  `Is_Building` int(4) DEFAULT NULL,
  `Is_Built` int(4) DEFAULT NULL,
  `Is_Deployed` int(4) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Lesson_ID`),
  KEY `Billing_Billing_ID` (`Billing_Billing_ID`),
  CONSTRAINT `lessons_ibfk_1` FOREIGN KEY (`Billing_Billing_ID`) REFERENCES `Billing` (`Billing_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Lessons`
--

LOCK TABLES `Lessons` WRITE;
/*!40000 ALTER TABLE `Lessons` DISABLE KEYS */;
/*!40000 ALTER TABLE `Lessons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Lessons_Snippets`
--

DROP TABLE IF EXISTS `Lessons_Snippets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Lessons_Snippets` (
  `Lessons_Lesson_ID` int(11) NOT NULL,
  `Snippets_Snippet_ID` int(11) NOT NULL,
  `Order` int(11) DEFAULT NULL,
  `Is_Enabled` int(4) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Lessons_Lesson_ID`,`Snippets_Snippet_ID`),
  KEY `Snippets_Snippet_ID` (`Snippets_Snippet_ID`),
  CONSTRAINT `lessons_snippets_ibfk_1` FOREIGN KEY (`Lessons_Lesson_ID`) REFERENCES `Lessons` (`Lesson_ID`),
  CONSTRAINT `lessons_snippets_ibfk_2` FOREIGN KEY (`Snippets_Snippet_ID`) REFERENCES `Snippets` (`Snippet_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Lessons_Snippets`
--

LOCK TABLES `Lessons_Snippets` WRITE;
/*!40000 ALTER TABLE `Lessons_Snippets` DISABLE KEYS */;
/*!40000 ALTER TABLE `Lessons_Snippets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Questions`
--

DROP TABLE IF EXISTS `Questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Questions` (
  `Question_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Question_Text` varchar(255) DEFAULT NULL,
  `Option1` varchar(255) DEFAULT NULL,
  `Option2` varchar(255) DEFAULT NULL,
  `Option3` varchar(255) DEFAULT NULL,
  `Option4` varchar(255) DEFAULT NULL,
  `Correct_AnswerNumber` int(11) DEFAULT NULL,
  `Snippets_Snippet_ID` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Question_ID`),
  KEY `Snippets_Snippet_ID` (`Snippets_Snippet_ID`),
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`Snippets_Snippet_ID`) REFERENCES `Snippets` (`Snippet_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Questions`
--

LOCK TABLES `Questions` WRITE;
/*!40000 ALTER TABLE `Questions` DISABLE KEYS */;
/*!40000 ALTER TABLE `Questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SnippetFeedback`
--

DROP TABLE IF EXISTS `SnippetFeedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SnippetFeedback` (
  `SnippetFeedback_ID` int(11) NOT NULL,
  `Lessons_Lesson_ID` int(11) NOT NULL,
  `Users_User_ID` int(11) NOT NULL,
  `Snippets_Snippet_ID` int(11) NOT NULL,
  `Rating` int(11) DEFAULT NULL,
  `Comment` varchar(255) DEFAULT NULL,
  `Time_Spent` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`SnippetFeedback_ID`),
  KEY `Lessons_Lesson_ID` (`Lessons_Lesson_ID`),
  KEY `Users_User_ID` (`Users_User_ID`),
  KEY `Snippets_Snippet_ID` (`Snippets_Snippet_ID`),
  CONSTRAINT `snippetfeedback_ibfk_1` FOREIGN KEY (`Lessons_Lesson_ID`) REFERENCES `Lessons` (`Lesson_ID`),
  CONSTRAINT `snippetfeedback_ibfk_2` FOREIGN KEY (`Users_User_ID`) REFERENCES `Users` (`User_ID`),
  CONSTRAINT `snippetfeedback_ibfk_3` FOREIGN KEY (`Snippets_Snippet_ID`) REFERENCES `Snippets` (`Snippet_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SnippetFeedback`
--

LOCK TABLES `SnippetFeedback` WRITE;
/*!40000 ALTER TABLE `SnippetFeedback` DISABLE KEYS */;
/*!40000 ALTER TABLE `SnippetFeedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Snippets`
--

DROP TABLE IF EXISTS `Snippets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Snippets` (
  `Snippet_ID` int(11) NOT NULL AUTO_INCREMENT,
  `Users_User_ID` int(11) NOT NULL,
  `Snippet_Title` varchar(255) DEFAULT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Lessons_Lesson_ID` int(11) NOT NULL,
  `Billing_Billing_ID` int(11) NOT NULL,
  `Snippet_RefOrPath` varchar(255) DEFAULT NULL,
  `Is_Video` int(4) DEFAULT NULL,
  `Is_Audio` int(4) DEFAULT NULL,
  `Is_Image` int(4) DEFAULT NULL,
  `Is_Question` int(4) DEFAULT NULL,
  `Duration` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`Snippet_ID`),
  KEY `Users_User_ID` (`Users_User_ID`),
  KEY `Lessons_Lesson_ID` (`Lessons_Lesson_ID`),
  KEY `Billing_Billing_ID` (`Billing_Billing_ID`),
  CONSTRAINT `snippets_ibfk_1` FOREIGN KEY (`Users_User_ID`) REFERENCES `Users` (`User_ID`),
  CONSTRAINT `snippets_ibfk_2` FOREIGN KEY (`Lessons_Lesson_ID`) REFERENCES `Lessons` (`Lesson_ID`),
  CONSTRAINT `snippets_ibfk_3` FOREIGN KEY (`Billing_Billing_ID`) REFERENCES `Billing` (`Billing_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Snippets`
--

LOCK TABLES `Snippets` WRITE;
/*!40000 ALTER TABLE `Snippets` DISABLE KEYS */;
/*!40000 ALTER TABLE `Snippets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `User_ID` int(11) NOT NULL AUTO_INCREMENT,
  `First_Name` varchar(255) NOT NULL,
  `Last_Name` varchar(255) NOT NULL,
  `Is_TC` int(4) DEFAULT NULL,
  `Is_CC` int(4) DEFAULT NULL,
  `Is_S` int(4) DEFAULT NULL,
  `Is_B` int(4) DEFAULT NULL,
  `Is_ADMIN` int(4) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Mobile` varchar(255) DEFAULT NULL,
  `Job_Title` varchar(255) DEFAULT NULL,
  `Department` varchar(255) DEFAULT NULL,
  `Billing_ID` int(11) DEFAULT NULL,
  `Picture_Path` varchar(255) DEFAULT NULL,
  `Picture_Blob` blob,
  `Expertise` varchar(255) DEFAULT NULL,
  `Is_Active` int(4) NOT NULL,
  `Password_Hash` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`User_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Fred','Flintstone',1,0,1,1,0,'ff@bedrock.com','777-7777','Mayor','Rock sorting',1,'','','Dinosaur hunting',1,'password','2017-07-25 14:48:21','2017-07-25 14:48:21'),(2,'fn','ln',1,0,1,0,0,'em@em.com','123','jt','dpt',1,'','data:image/png;base64,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','exp',1,'password','2017-07-26 01:23:17','2017-07-26 01:23:17');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-26 10:25:03
