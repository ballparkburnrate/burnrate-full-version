var db = require("../models");

module.exports = function (app) {
    app.get("/api/incomes", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        console.log(req);

        db.Income.findAll({
            include: [db.User]
        }).then(function (dbIncome) {
            console.log(dbIncome);
            res.json(dbIncome);
        });
    });

    app.get("/api/incomes/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Income.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbIncome) {
            res.json(dbIncome);
        });
    });

    app.get("/api/incomes/by-user/:id", (req, res) => {
        db.Income.findAll({
            where: {
                UserId: req.params.id
            }
        }).then(function (dbIncome) {
            res.json(dbIncome);
        });
    });

     app.get("/api/incomes/by-category/:id", (req, res) => {
        db.Income.findAll({
            attributes: ['category', [db.sequelize.fn('SUM', db.sequelize.col('amount')), 'amount']],
            where: {
                UserId: req.params.id
            },
            group: ['category']            
        }).then(function (dbIncome) {
            res.json(dbIncome);
        });
    });

    app.post("/api/incomes", function (req, res) {
        db.Income.create(req.body).then(function (dbIncome) {
            res.json(dbIncome);
        });
    });
};