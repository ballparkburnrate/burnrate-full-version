var exports = module.exports = {}
var db = require("../models");

exports.signup = function (req, res) {

  res.render('signup');

}

exports.signin = function (req, res) {

  res.render('signin');

}

exports.datainput = function (req, res) {

  res.render('datainput');

}

exports.dashboard = function (req, res) {

  var idUser = req.user.id;

  db.Cash.findOne({
    attributes: ['UserId', [db.sequelize.fn('SUM', db.sequelize.col('amount')), 'amount']],
    where: {
      UserId: idUser
    },
    group: ['UserId']
  }).then(function (dbCash) {

    db.Expense.findAll({
      attributes: ['category', [db.sequelize.fn('SUM', db.sequelize.col('amount')), 'amount']],
      where: {
        UserId: idUser
      },
      group: ['category']
    }).then(function (dbExpense) {

      db.Income.findAll({
        attributes: ['customer', [db.sequelize.fn('SUM', db.sequelize.col('amount')), 'amount']],
        where: {
          UserId: idUser
        },
        group: ['customer']
      }).then(function (dbIncome) {

        db.Expense.findAll({
          where: {
            UserId: idUser
          }
        }).then(function (dbExpenseByUser) {

          db.Income.findAll({
            where: {
              UserId: idUser
            }
          }).then(function (dbIncomeByUser) { 
            
            db.Cash.findAll({
              where: {
                UserId: idUser
              }
            }).then(function (dbCashByUser) { 

            res.render('index', {
              cashResults: JSON.stringify(dbCash, null, 2),
              expenseResult: JSON.stringify(dbExpense, null, 2),
              incomeResult: JSON.stringify(dbIncome, null, 2),
              dbExpenseByUser: dbExpenseByUser,                   
              dbIncomeByUser: dbIncomeByUser,
              dbCashByUser: dbCashByUser

            });
          });
        });
      });
    });
  });


  });

}

exports.logout = function (req, res) {

  req.session.destroy(function (err) {
    res.redirect('/');
  });

}