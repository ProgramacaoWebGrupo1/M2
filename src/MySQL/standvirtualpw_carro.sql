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
-- Table structure for table `carro`
--

DROP TABLE IF EXISTS `carro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(512) DEFAULT NULL,
  `modelo` varchar(512) DEFAULT NULL,
  `preco` int DEFAULT NULL,
  `potencia` int DEFAULT NULL,
  `cor` varchar(512) DEFAULT NULL,
  `ano` int DEFAULT NULL,
  `marcaId` int DEFAULT NULL,
  `nome_marca` varchar(512) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carro`
--

LOCK TABLES `carro` WRITE;
/*!40000 ALTER TABLE `carro` DISABLE KEYS */;
INSERT INTO `carro` VALUES (2,'Ligeiro','Classe A',27000,200,'Preto',2020,2,'Mercedes'),(3,'Ligeiro','C4 Cactus',24000,110,'Preto',2020,1,'Citrõen'),(4,'Ligeiro','C3',17000,100,'Branco',2021,1,'Citrõen'),(5,'Ligeiro','string',20000,140,'Preto',2018,5,'Fiat'),(6,'Ligeiro','Modelo A',23000,120,'Preto',2017,6,'Volvo'),(7,'Ligeiro','Modelo A',18000,110,'Verde',2016,7,'Kia'),(8,'Ligeiro','Modelo B',40000,200,'Cinzento',2016,8,'Jaguar'),(9,'Ligeiro','Modelo A',60000,220,'Branco',2018,8,'Jaguar'),(10,'Ligeiro','Modelo A',20000,160,'Preto',2014,17,'Ford'),(11,'Ligeiro','Modelo B',14000,110,'Preto',2012,17,'Ford'),(12,'Ligeiro','Modelo C',15000,110,'Roxo',2013,18,'Opel'),(13,'Ligeiro','Modelo A',70000,260,'Laranja',2019,4,'Porsche'),(14,'Ligeiro','Modelo A',30000,200,'Preto',2020,3,'BMW'),(15,'Ligeiro','Modelo A',28000,180,'Preto',2021,2,'Mercedes'),(16,'Ligeiro','Modelo C',16000,120,'Preto',2019,2,'Mercedes'),(17,'Ligeiro','Modelo B',22000,160,'Branco',2020,2,'Mercedes'),(18,'Ligeiro','Modelo A',16000,100,'Branco',2017,9,'Nissan'),(19,'Ligeiro','Modelo S',60000,1020,'Branco',2021,11,'Tesla'),(20,'Ligeiro','Modelo A',40000,180,'Cizento',2019,16,'Peugeot'),(21,'Ligeiro','Modelo B',20000,120,'Preto',2016,16,'Peugeot'),(22,'Ligeiro','Modelo A',16000,120,'Preto',2015,12,'Renault'),(23,'Ligeiro','Modelo A',17000,130,'Preto',2017,7,'Kia'),(24,'Ligeiro','Modelo C',15000,160,'Preto',2015,10,'Seat'),(25,'Ligeiro','Modelo A',20000,220,'Preto',2019,10,'Seat'),(26,'Ligeiro','Modelo A',22000,200,'Preto',2019,10,'Seat'),(27,'Ligeiro','Modelo A',50000,200,'Preto',2020,13,'Jeep'),(28,'Ligeiro','Modelo A',60000,200,'Rosa',2021,18,'Aston Martin'),(29,'Ligeiro','Modelo A',50000,260,'Cizento',2021,3,'BMW'),(30,'Ligeiro','Modelo Z',20000,110,'Cizento',2014,6,'Volvo'),(31,'Ligeiro','C4 Cactus',27000,120,'Preto',2019,1,'Citrõen'),(32,'Ligeiro','Tesla - Modelo S',30000,1020,'Preto',2021,11,'Tesla'),(33,'Ligeiro','Tesla - Modelo S',32000,1000,'Branco',2020,11,'Tesla');
/*!40000 ALTER TABLE `carro` ENABLE KEYS */;
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
