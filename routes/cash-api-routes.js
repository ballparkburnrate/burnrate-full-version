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
        db.Cash.create(req.body).then(function (dbCash) {
            res.json(dbCash);
        });
    });
};