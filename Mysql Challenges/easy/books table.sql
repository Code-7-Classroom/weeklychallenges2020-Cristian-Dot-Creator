DROP DATABASE IF EXISTS topfavbooks;
CREATE database topfavbooks;

USE topfavbooks;

CREATE TABLE books(
id INT AUTO_INCREMENT,
   Title VARCHAR(100),
   Publish_Date date,
   first_name VARCHAR(255),
   last_name VARCHAR(255),
   PRIMARY KEY(id)
);

show tables;

INSERT INTO books(Title, Publish_Date, first_name, last_name)
VALUES ('1984', 19480608, 'George', 'Orwell'),('GONE', 20080115, 'Michael', 'Grant'),('Killing Floor', 19970428, ' Lee', 'Child'),('50 laws of power', 20090908, '50', 'Cent'), ('48 Laws of Power ', 19980608, 'Robert', 'lee');
INSERT INTO book(titleName, firstName, lastName, publishDate, id) VALUES 
('The Cat in the Hat', 'Dr.Suess','null', '1957-12-03', 6),('Green Eggs and Ham', 'Dr.Suess',null, '1960-08-12', 7);

DELETE from book WHERE publishDate = '1925-04-10';

SELECT*FROM book;


SELECT * FROM books;