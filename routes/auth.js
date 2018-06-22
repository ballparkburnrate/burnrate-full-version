var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);

    app.get('/datainput', authController.datainput);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/datainput',
        failureRedirect: '/signup',
        failureFlash: true
    }
    ));




    app.get('/index', isLoggedIn, authController.dashboard);


    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/index',
        failureRedirect: '/signin',
        failureFlash: true
    }
    ));


    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }


}






