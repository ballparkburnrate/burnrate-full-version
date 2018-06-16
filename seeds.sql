-- USER TABLE

INSERT INTO `burnrate_db`.`Users`
(`fullName`, `phoneNumber`, `address`, `city`, `state`, `zipCode`, `createdAt`,`updatedAt`)
VALUES
("User1", "123456", "123 Av", "Berkeley", "CA", "12345", curdate(), curdate());

INSERT INTO `burnrate_db`.`Users`
(`fullName`, `phoneNumber`, `address`, `city`, `state`, `zipCode`, `createdAt`,`updatedAt`)
VALUES
("User2", "123456", "123 Av", "Berkeley", "CA", "12345", curdate(), curdate());

INSERT INTO `burnrate_db`.`Users`
(`fullName`, `phoneNumber`, `address`, `city`, `state`, `zipCode`, `createdAt`,`updatedAt`)
VALUES
("User3", "123456", "123 Av", "Berkeley", "CA", "12345", curdate(), curdate());

INSERT INTO `burnrate_db`.`Users`
(`fullName`, `phoneNumber`, `address`, `city`, `state`, `zipCode`, `createdAt`,`updatedAt`)
VALUES
("User4", "123456", "123 Av", "Berkeley", "CA", "12345", curdate(), curdate());



-- EXPENSE TABLE

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Expe1", curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Expe2", curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Expe1", curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Expe2", curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Expe1", curdate(), curdate(), 3);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Expe2", curdate(), curdate(), 3);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Expe1", curdate(), curdate(), 4);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Expe2", curdate(), curdate(), 4);


-- INCOME TABLE

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Inco1", curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Inco2", curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Inco3", curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Inco4", curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Inco5", curdate(), curdate(), 3);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Inco6", curdate(), curdate(), 3);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Inco7", curdate(), curdate(), 4);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `category`, `createdAt`, `updatedAt`, `UserId`)
VALUES
(1, curdate(), 546.6, "Inco7", curdate(), curdate(), 4);

-- CASH TABLE

INSERT INTO `burnrate_db`.`Cash`
(`date`,`amount`,`createdAt`,`updatedAt`,`UserId`)
VALUES
(curdate(), 5678, curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Cash`
(`date`,`amount`,`createdAt`,`updatedAt`,`UserId`)
VALUES
(curdate(), 5678, curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Cash`
(`date`,`amount`,`createdAt`,`updatedAt`,`UserId`)
VALUES
(curdate(), 5678, curdate(), curdate(), 3);

INSERT INTO `burnrate_db`.`Cash`
(`date`,`amount`,`createdAt`,`updatedAt`,`UserId`)
VALUES
(curdate(), 5678, curdate(), curdate(), 4);