use saoc5f2urscky4wd;

CREATE TABLE `Bamazon` (
	`ItemID` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`ProductName` VARCHAR( 255) NOT NULL,
	`DepartmentName` VARCHAR( 255 ) NOT NULL,
	`Price` FLOAT(11, 2) NOT NULL,
	`StockQuantity` Int(11) NOT NULL,

	PRIMARY KEY ( `ItemId` ) );

select * from Bamazon;

show tables;

drop table allcharacters;

---




ALTER TABLE Bamazon MODIFY Price decimal(10,2);

DELETE FROM Bamazon WHERE ItemID = 1;

UPDATE Bamazon SET ItemID = 13 WHERE StockQuantity = 500;
select * from Bamazon ORDER BY ItemID ASC;


INSERT INTO Bamazon(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
1,
"Snickers",
"Food",
1.29,
211
);

INSERT INTO Bamazon(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
2,
"Twix",
"Food",
1.50,
50
);

INSERT INTO Bamazon(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
3,
"Gobstoppers",
"Food",
.99,
500
);

INSERT INTO Bamazon(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
4,
"M&M's",
"Food",
1.11,
20
);

INSERT INTO Bamazon(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
5,
"Starburst",
"Food",
1.59,
15
);

INSERT INTO Bamazon(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
6,
"Hershey's",
"Food",
1.99,
100
);

INSERT INTO Bamazon(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
7,
"Ferroche",
"Food",
2.50,
23
);

INSERT INTO Bamazon(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
8,
"Samsung Galaxy S3",
"Electronics",
625,
5
);

INSERT INTO Bamazon(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
9,
"Ipod Touch",
"Electronics",
59.99,
10
);

INSERT INTO Bamazon(ItemID, ProductName, DepartmentName, Price, StockQuantity) 
VALUES (
10,
"Skullcandy Sidewinder",
"Electronics",
24.99,
7
);

