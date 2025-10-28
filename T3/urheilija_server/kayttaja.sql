CREATE USER IF NOT EXISTS 'kayttaja'@'localhost' IDENTIFIED BY 'salasana';
USE `urheilija-app`;
GRANT INSERT,UPDATE,DELETE,SELECT ON urheilijat TO 'kayttaja'@'localhost' IDENTIFIED BY 'salasana'; 