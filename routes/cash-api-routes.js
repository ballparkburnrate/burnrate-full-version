var db = require("../models");

module.exports = function (app) {
    app.get("/api/cash", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post

        db.Cash.findAll({
            include: [db.User]
        }).then(function (dbCash) {
            res.json(dbCash);
        });
    });

    app.get("/api/cash/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Cash.findOne({
            attributes: ['category', [db.sequelize.fn('SUM', db.sequelize.col('amount')), 'amount']],
            where: {
                id: req.params.id
            }
        }).then(function (dbCash) {
            res.json(dbCash);
        });
    });

    app.get("/api/cash/by-user/:id", (req, res) => {
        db.Cash.findAll({
            where: {
                UserId: req.params.id
            }
        }).then(function (dbCash) {
            res.json(dbCash);
        });
    });

    app.post("/api/cash", function (req, res) {
        var newCash = {
            UserId: req.user.id,
            amount: req.body.cashamt
        }
        db.Cash.create(newCash).then(function (dbCash) {
            res.redirect("/index");
        });
    });

    app.post("/api/cash/update/:id", function(req, res) {
        console.log(req.body.amount);
        db.Cash.update({
            amount: req.body.amount
          }, {
            where: {
                UserId: req.user.id
            }
        }).then(function(dbCash) {
            console.log("Updated Starting Cash");
            res.json(dbCash);
        });
    });  
};