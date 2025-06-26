CREATE DATABASE IF NOT EXISTS BankDB;
USE BankDB;
CREATE TABLE IF NOT EXISTS SavingsAccounts (
    AccountID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    Balance DECIMAL(10,2)
);

-- Employees Table
CREATE TABLE IF NOT EXISTS Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    Department VARCHAR(50),
    Salary DECIMAL(10,2)
);

-- Generic Accounts Table (for fund transfer)
CREATE TABLE IF NOT EXISTS Accounts (
    AccountID INT PRIMARY KEY,
    AccountHolder VARCHAR(100),
    Balance DECIMAL(10,2)
);
-- Savings Accounts
INSERT INTO SavingsAccounts VALUES
(1, 'Amit', 10000),
(2, 'Rita', 15000);

-- Employees
INSERT INTO Employees VALUES
(101, 'Rahul', 'IT', 60000),
(102, 'Neha', 'HR', 55000),
(103, 'Ajay', 'IT', 50000);


INSERT INTO Accounts VALUES
(1005, 'Amit', 20000),
(1006, 'Rita', 15000);

USE BankDB;

DELIMITER //

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
  UPDATE SavingsAccounts
  SET Balance = Balance + (Balance * 0.01);
END //

DELIMITER ;

CREATE PROCEDURE UpdateEmployeeBonus(IN deptName VARCHAR(50), IN bonusPercent DECIMAL(5,2))
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * (bonusPercent / 100))
  WHERE Department = deptName
END //

DELIMITER ;

DELIMITER //

CREATE PROCEDURE TransferFunds(
  IN fromAccount INT,
  IN toAccount INT,
  IN amount DECIMAL(10,2)
)
BEGIN
  DECLARE fromBal DECIMAL(10,2);

  -- Get balance of source account
  SELECT Balance INTO fromBal
  FROM Accounts
  WHERE AccountID = fromAccount;

  -- Check balance and transfer
  IF fromBal >= amount THEN
    -- Deduct from source
    UPDATE Accounts
    SET Balance = Balance - amount
    WHERE AccountID = fromAccount;

    -- Add to destination
    UPDATE Accounts
    SET Balance = Balance + amount
    WHERE AccountID = toAccount;
  ELSE
    SIGNAL SQLSTATE '45000'
    SET MESSAGE_TEXT = 'Insufficient balance in source account';
  END IF;
END //

DELIMITER ;
CALL ProcessMonthlyInterest();
CALL UpdateEmployeeBonus('IT', 10);
CALL TransferFunds(1003, 1004, 5000);

