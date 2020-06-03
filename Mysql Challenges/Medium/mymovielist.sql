-- MEDIUM
DROP DATABASE IF EXISTS mymovieList;
CREATE DATABASE mymovieList;
DROP TABLE IF EXISTS movies;

USE mymovieList;
CREATE TABLE movies (
id INT AUTO_INCREMENT PRIMARY KEY,
titleName VARCHAR(255),
releaseDate DATE,
rating INT
);

INSERT INTO movies(titleName, releaseDate, rating ,id) VALUES 
('Scooby Doo', '2010-11-08', 3, 1),('Batman', '2020-07-30', 4, 2),
('Superman', '2020-09-07', 5, 3),('Scream', '1997-06-13', 3, 4),
('Sonic', '2018-02-09', 7, 5),('Pokemon', '1994-12-08', 9, 6),
('Digimon', '1992-04-14', 6, 7),('Titanic', '1990-06-21', 10, 8),
('Invisible', '2005-06-11', 10, 9),('Dark Matter', '2017-12-13', 10, 10);


SELECT titleName FROM movies
WHERE titleName LIKE '%s%';


SELECT*FROM movies;



