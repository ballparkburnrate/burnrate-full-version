var db = require("../models");

module.exports = function (app) {
    app.get("/api/expenses", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        console.log(req);

        db.Expense.findAll({
            include: [db.User]
        }).then(function (dbExpense) {
            console.log(dbExpense);
            res.json(dbExpense);
        });
    });

    app.get("/api/expenses/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Expense.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbExpense) {
            res.json(dbExpense);
        });
    });

    app.get("/api/expenses/by-user/:id", (req, res) => {
        db.Expense.findAll({
            where: {
                UserId: req.params.id
            }
        }).then(function (dbExpense) {
            res.json(dbExpense);
        });
    });

    app.get("/api/expenses/by-category/:id", (req, res) => {
        db.Expense.findAll({
            attributes: ['category', [db.sequelize.fn('SUM', db.sequelize.col('amount')), 'amount']],
            where: {
                UserId: req.params.id
            },
            group: ['category']            
        }).then(function (dbExpense) {
            res.json(dbExpense);
        });
    });

    app.post("/api/expenses", function (req, res) {
        db.Expense.create(req.body).then(function (dbExpense) {
            res.json(dbExpense);
        });
    });
};