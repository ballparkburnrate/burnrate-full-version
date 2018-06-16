-- EXPENSE TABLE

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `vendor`, `description`, `createdAt`,`updatedAt`,
`UserId`)
VALUES
(0, curdate(), 3000,"Training", "123", "123", curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `vendor`, `description`, `createdAt`,`updatedAt`,
`UserId`)
VALUES
(0, curdate(), 2500,"Food", "123", "123", curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `vendor`, `description`, `createdAt`,`updatedAt`,
`UserId`)
VALUES
(0, curdate(), 6000,"Employees", "123", "123", curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `vendor`, `description`, `createdAt`,`updatedAt`,
`UserId`)
VALUES
(0, curdate(), 5500,"Rent", "123", "123", curdate(), curdate(), 1);


-- INCOME TABLE

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `customer`, `description`, `createdAt`, `updatedAt`,
`UserId`)
VALUES
(0, curdate(), 3000, "Bootcamp", "Sells", curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `customer`, `description`, `createdAt`, `updatedAt`,
`UserId`)
VALUES
(0, curdate(), 60000, "American Bank", "Sells", curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `customer`, `description`, `createdAt`, `updatedAt`,
`UserId`)
VALUES
(0, curdate(), 75000, "Berkeley University", "Sells", curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `customer`, `description`, `createdAt`, `updatedAt`,
`UserId`)
VALUES
(0, curdate(), 100000, "Google", "Sells", curdate(), curdate(), 1);

-- CASH TABLE

INSERT INTO `burnrate_db`.`Cash`
( `date`, `amount`, `createdAt`, `updatedAt`,`UserId`)
VALUES (curdate(), 500, curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Cash`
( `date`, `amount`, `createdAt`, `updatedAt`,`UserId`)
VALUES (curdate(), 1000, curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Cash`
( `date`, `amount`, `createdAt`, `updatedAt`,`UserId`)
VALUES (curdate(), 300, curdate(), curdate(), 1);

INSERT INTO `burnrate_db`.`Cash`
( `date`, `amount`, `createdAt`, `updatedAt`,`UserId`)
VALUES (curdate(), 800, curdate(), curdate(), 1);