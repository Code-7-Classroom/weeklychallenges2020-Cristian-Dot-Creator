-- Very Hard: Copy the table from your Very Easy Challenge 
-- Write a query to add in three cars at once 
-- Write a query to add in prices and colors for each of these cars 
-- Write a query to put the Make and Model together in one column 
-- Create a new query that adds an additional column to the results to show how many cars have the same Make.

DROP DATABASE IF EXISTS carList2;
CREATE DATABASE carList2;

USE carList2;
CREATE TABLE cars2 (
id INT AUTO_INCREMENT PRIMARY KEY,
carMake VARCHAR(255),
carModel VARCHAR(255),
carYear INT
);

INSERT INTO cars2(carMake, carModel, carYear, id) VALUES ('Honda','Accord',2010 ,1),('Honda','Civic', 2012, 2),('Honda','CR-V', 2009 ,3);

ALTER TABLE cars2 ADD carPrice INT;
ALTER TABLE cars2 ADD carColor VARCHAR(255);

UPDATE cars2 SET carPrice = 24020 
WHERE carModel = "Accord";
UPDATE cars2 SET carPrice = 19850 
WHERE carModel = "Civic";
UPDATE cars2 SET carPrice = 250250 
WHERE carModel = "CR-V";

UPDATE cars2 SET carColor = 'Black' 
WHERE id = 1;
UPDATE cars2 SET carColor = 'White' 
WHERE id = 2;
UPDATE cars2 SET carColor = 'Orange' 
WHERE id = 3;

SELECT CONCAT(carMake , ' ' , carModel) AS carType FROM cars2;

SELECT carMake, COUNT(carMake) FROM cars2
GROUP BY carMake HAVING COUNT(carMake) > 1;


SELECT*FROM carModel;

SELECT*FROM cars;
