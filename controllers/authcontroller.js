var exports = module.exports = {}
var db = require("../models");

exports.signup = function(req,res){

	res.render('signup'); 

}

exports.signin = function(req,res){

	res.render('signin'); 

}

exports.dashboard = function(req,res){

  db.Cash.findAll({
    include: [db.User]
  }).then(function (dbCash) {
      res.render('index', {
        cashResults: JSON.stringify(dbCash, null, 2),
      });   
  });

}

exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  });

}