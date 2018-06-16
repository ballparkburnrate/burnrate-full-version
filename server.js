// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var passport = require('passport')
var session = require('express-session')
//var env = require('dotenv').load()
var exphbs = require('express-handlebars')
var flash = require("connect-flash");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(flash());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({ extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');


app.use('/public', express.static(__dirname + '/public'));

// Requiring our models for syncing
var db = require("./models");

//Routes
var authRoute = require('./routes/auth.js')(app, passport);


//load passport strategies
require('./config/passport/passport.js')(passport, db.user);


// Sets up the Express app to handle data parsing


// Static directory
app.use('/public', express.static(__dirname + '/public'));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/expense-api-routes.js")(app);
require("./routes/income-api-routes.js")(app);
require("./routes/cash-api-routes.js")(app);
require("./routes/user-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});