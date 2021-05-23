-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: standvirtualpw
-- ------------------------------------------------------
-- Server version	8.0.24

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `listadepreferencia`
--

DROP TABLE IF EXISTS `listadepreferencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listadepreferencia` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(512) DEFAULT NULL,
  `modelo` varchar(512) DEFAULT NULL,
  `clienteId` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listadepreferencia`
--

LOCK TABLES `listadepreferencia` WRITE;
/*!40000 ALTER TABLE `listadepreferencia` DISABLE KEYS */;
INSERT INTO `listadepreferencia` VALUES (1,'Ligeiros','C4 Cactus',1),(2,'Ligeiros','Mercedes Class A',2),(3,'Ligeiros','Mercedes Class B',2),(4,'Ligeiros','Tesla - Modelo S',4),(5,'Ligeiros','Tesla - Modelo C',4),(6,'Ligeiros','Tesla - Modelo A',4),(7,'Ligeiros','Tesla - Modelo B',4),(8,'Ligeiros','BMW - Serie 1',25),(9,'Ligeiros','BMW - Serie 2 Cabrio',25),(10,'Ligeiros','BMW - i4',25),(11,'Ligeiros','BMW - M8 Coupé',25),(12,'Ligeiro','Modelo A',14),(13,'Ligeiro','Modelo 3',14),(14,'Ligeiro','Modelo Y',14),(15,'Ligeiro','Modelo X',14),(16,'Ligeiro','Classe B',7),(17,'Ligeiro','EQS',7),(18,'Ligeiro','Classe E',7),(19,'Ligeiro','Novo Leon',10),(20,'Ligeiro','Arona',10),(21,'Ligeiro','Ibiza',10),(22,'Ligeiro','Picanto',12),(23,'Ligeiro','E-Niro',12),(24,'Ligeiro','XCEED',12),(25,'Ligeiro','Stonic',12),(26,'Ligeiro','Ceed SW',12),(27,'Ligeiro','Jaguar F-Type',18),(28,'Ligeiro','Jaguar XE',18),(29,'Ligeiro','Jaguar I-PACE',18),(30,'Ligeiro','Jaguar E-PACE',18);
/*!40000 ALTER TABLE `listadepreferencia` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-23  1:56:48
