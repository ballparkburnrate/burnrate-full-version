-- USER TABLE

INSERT INTO `burnrate_db`.`Users`
(`firstname`,`lastname`,`username`,`about`,`email`,`password`, `last_login`, `status`, `createdAt`,`updatedAt`)
VALUES
("Martin", "Ash", "martinash", "","martinash@gmail.com", 
"$2a$08$Re2AMVUdT1bG/G0euptPNuq/7TdezvPz.i/nGeileiQAyiInd/fnG",
curdate(), "active", curdate(), curdate());


INSERT INTO `burnrate_db`.`Users`
(`firstname`,`lastname`,`username`,`about`,`email`,`password`, `last_login`, `status`, `createdAt`,`updatedAt`)
VALUES
("Peter", "Walsh", "peterwal", "","peterwalh@gmail.com", 
"$2a$08$Re2AMVUdT1bG/G0euptPNuq/7TdezvPz.i/nGeileiQAyiInd/fnG",
curdate(), "active", curdate(), curdate());


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





INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `vendor`, `description`, `createdAt`,`updatedAt`,
`UserId`)
VALUES
(0, curdate(), 400,"Training", "123", "123", curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `vendor`, `description`, `createdAt`,`updatedAt`,
`UserId`)
VALUES
(0, curdate(), 200,"Food", "123", "123", curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `vendor`, `description`, `createdAt`,`updatedAt`,
`UserId`)
VALUES
(0, curdate(), 600,"Employees", "123", "123", curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Expenses`
(`isRecurring`, `date`, `amount`, `category`, `vendor`, `description`, `createdAt`,`updatedAt`,
`UserId`)
VALUES
(0, curdate(), 5500,"Rent", "123", "123", curdate(), curdate(), 2);




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



INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `customer`, `description`, `createdAt`, `updatedAt`,
`UserId`)
VALUES
(0, curdate(), 3000, "Bootcamp", "Sells", curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `customer`, `description`, `createdAt`, `updatedAt`,
`UserId`)
VALUES
(0, curdate(), 600, "American Bank", "Sells", curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `customer`, `description`, `createdAt`, `updatedAt`,
`UserId`)
VALUES
(0, curdate(), 750, "Berkeley University", "Sells", curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Incomes`
(`isRecurring`, `date`, `amount`, `customer`, `description`, `createdAt`, `updatedAt`,
`UserId`)
VALUES
(0, curdate(), 1000, "Google", "Sells", curdate(), curdate(), 2);

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


INSERT INTO `burnrate_db`.`Cash`
( `date`, `amount`, `createdAt`, `updatedAt`,`UserId`)
VALUES (curdate(), 500, curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Cash`
( `date`, `amount`, `createdAt`, `updatedAt`,`UserId`)
VALUES (curdate(), 1000, curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Cash`
( `date`, `amount`, `createdAt`, `updatedAt`,`UserId`)
VALUES (curdate(), 300, curdate(), curdate(), 2);

INSERT INTO `burnrate_db`.`Cash`
( `date`, `amount`, `createdAt`, `updatedAt`,`UserId`)
VALUES (curdate(), 800, curdate(), curdate(), 2);