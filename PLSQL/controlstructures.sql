CREATE DATABASE IF NOT EXISTS BankDB;
USE BankDB;

CREATE TABLE IF NOT EXISTS Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    Balance DECIMAL(10,2),
    IsVIP BOOLEAN DEFAULT FALSE,
    InterestRate DECIMAL(5,2)
);

CREATE TABLE IF NOT EXISTS Loans (
    LoanID INT PRIMARY KEY,
    CustomerID INT,
    DueDate DATE,
    Amount DECIMAL(10,2),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
INSERT INTO Customers VALUES
(1, 'Amit', 65, 8000, FALSE, 10.00),
(2, 'Rita', 45, 12000, FALSE, 9.50),
(3, 'John', 70, 15000, FALSE, 11.00),
(4, 'Neha', 35, 9500, FALSE, 9.75);

INSERT INTO Loans VALUES
(101, 1, DATE_ADD(CURDATE(), INTERVAL 15 DAY), 50000),
(102, 2, DATE_ADD(CURDATE(), INTERVAL 45 DAY), 40000),
(103, 3, DATE_ADD(CURDATE(), INTERVAL 10 DAY), 60000);
DELIMITER //

CREATE PROCEDURE ApplyInterestDiscount()
BEGIN
  DECLARE done INT DEFAULT 0;
  DECLARE cid INT;
  DECLARE age INT;

  DECLARE cur CURSOR FOR SELECT CustomerID, Age FROM Customers;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

  OPEN cur;

  read_loop: LOOP
    FETCH cur INTO cid, age;
    IF done THEN
      LEAVE read_loop;
    END IF;

    IF age > 60 THEN
      UPDATE Customers SET InterestRate = InterestRate - 1 WHERE CustomerID = cid;
    END IF;
  END LOOP;

  CLOSE cur;
END //

DELIMITER ;
DELIMITER //

CREATE PROCEDURE PromoteToVIP()
BEGIN
  DECLARE done INT DEFAULT 0;
  DECLARE cid INT;
  DECLARE bal DECIMAL(10,2);

  DECLARE cur CURSOR FOR SELECT CustomerID, Balance FROM Customers;
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

  OPEN cur;

  vip_loop: LOOP
    FETCH cur INTO cid, bal;
    IF done THEN
      LEAVE vip_loop;
    END IF;

    IF bal > 10000 THEN
      UPDATE Customers SET IsVIP = TRUE WHERE CustomerID = cid;
    END IF;
  END LOOP;

  CLOSE cur;
END //

DELIMITER ;
DELIMITER //

CREATE PROCEDURE SendLoanReminders()
BEGIN
  DECLARE done INT DEFAULT 0;
  DECLARE cname VARCHAR(100);
  DECLARE loan_id INT;
  DECLARE due DATE;

  DECLARE cur CURSOR FOR
    SELECT c.Name, l.LoanID, l.DueDate
    FROM Customers c
    JOIN Loans l ON c.CustomerID = l.CustomerID
    WHERE l.DueDate BETWEEN CURDATE() AND DATE_ADD(CURDATE(), INTERVAL 30 DAY);

  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

  OPEN cur;

  reminder_loop: LOOP
    FETCH cur INTO cname, loan_id, due;
    IF done THEN
      LEAVE reminder_loop;
    END IF;

    SELECT CONCAT('Reminder: Loan ID ', loan_id, ' for customer ', cname, ' is due on ', due) AS Reminder;
  END LOOP;

  CLOSE cur;
END //

DELIMITER ;
CALL ApplyInterestDiscount();
CALL PromoteToVIP();
CALL SendLoanReminders();