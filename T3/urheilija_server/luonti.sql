-- --------------------------------------------------------
-- Verkkotietokone:              127.0.0.1
-- Palvelinversio:               10.11.0-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Versio:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for urheilija-app
CREATE DATABASE IF NOT EXISTS `urheilija-app` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `urheilija-app`;

-- Dumping structure for taulu urheilija-app.urheilijat
CREATE TABLE IF NOT EXISTS `urheilijat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `etunimi` varchar(20) NOT NULL,
  `sukunimi` varchar(20) NOT NULL,
  `kutsumanimi` varchar(20) NOT NULL,
  `syntymavuosi` date NOT NULL,
  `paino` int NOT NULL,
  `kuva` text NOT NULL,
  `laji` varchar(40) NOT NULL,
  `saavutukset` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;

-- Dataa populointtin
INSERT INTO `urheilijat` (`etunimi`, `sukunimi`, `kutsumanimi`, `syntymavuosi`, `paino`, `kuva`, `laji`, `saavutukset`)
         VALUES
	('Lauri', 'Markkanen', 'Lauri', '1996-00-00', 105, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Lauri_Markkanen%2C_Cavaliers_vs_Rockets_on_December_15%2C_2021_%28cropped%29.jpg/800px-Lauri_Markkanen%2C_Cavaliers_vs_Rockets_on_December_15%2C_2021_%28cropped%29.jpg', 'koripallo', 'Tulokkaiden ykköstähdistöjoukkuessa 2018, Nopeimmin 100 kolmen pisteen koria NBA-tulokaskaudellaan heittänyt pelaaja (41 ottelua), Eniten ns. seitsenjalkaisen (väh. 213 cm pituisen) heittämiä kolmen pisteen koreja yhdessä ottelussa (8 kpl, sivuaa Dirk Nowitzkin ennätystä), Ensimmäinen tulokaskaudellaan 1000 pistettä, 500 levypalloa ja 110 kolmen pisteen koria kirjauttanut pelaaja, Eniten Chicago Bullsissa tulokaskaudellaan kolmen pisteen koreja (145) heittänyt pelaaja, Pohjoismaiden historian pienimmällä varausnumerolla (7.) NBA:han varattu pelaaja, NBA:n kehittynein pelaaja (MIP) 2023'),
	('Mikael', 'Granlund', 'Mikael', '1992-00-00', 84, 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Mikael_Granlund_at_Minnesota_Wild_open_practice_at_Tria_Rink_in_St_Paul%2C_MN.jpg/1024px-Mikael_Granlund_at_Minnesota_Wild_open_practice_at_Tria_Rink_in_St_Paul%2C_MN.jpg', 'jääkiekko', '    Kauden paras tulokas (Jarmo Wasaman muistopalkinto): 2010,
    Kauden herrasmiespelaaja (Raimo Kilpiö -palkinto): 2010,
    Runkosarjan tulokkaiden pistepörssin voitto: 2010,
    Runkosarjan tulokkaiden syöttöpörssin voitto: 2010,
    Mestaruus (Kanada-malja): 2011,
    Pudotuspelien pistepörssin voitto: 2011 (jakoi voiton Juha-Pekka Haatajan kanssa),
    Pudotuspelien syöttöpörssin voitto: 2011');
