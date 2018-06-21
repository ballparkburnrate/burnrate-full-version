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

     app.get("/api/incomes/by-customer/:id", (req, res) => {
        db.Income.findAll({
            attributes: ['customer', [db.sequelize.fn('SUM', db.sequelize.col('amount')), 'amount']],
            where: {
                UserId: req.params.id
            },
            group: ['customer']            
        }).then(function (dbIncome) {
            res.json(dbIncome);
        });
    });

    app.post("/api/incomes", function (req, res) {
        console.log(req.body);
        console.log(req.user);
        var newIncome = {
            isRecurring: true,
            date: req.body.incomedate,
            amount: req.body.incomeamt,
            customer: req.body.customer,
            description: req.body.incomedesc,
            UserId: req.user.id
        };

        db.Income.create(newIncome).then(function (dbIncome) {
            console.log("New income added.")
            res.redirect("/index");
        });
    });


    app.delete("/api/incomes/:id", function(req, res) {
        db.Income.destroy({
          where: {
            id: req.params.id
          }
        })
          .then(function(dbIncome) {
            res.json(dbIncome);
          });
      });
};