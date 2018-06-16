// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/xxxxx.html"));
    res.send('Welcome to Passport with Sequelize');
  });

  // cms route loads cms.html
  app.get("/xxxx", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/xxxx.html"));
  });

  // blog route loads blog.html
  app.get("/xxxx", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/xxxx.html"));
  });

  // authors route loads author-manager.html
  app.get("/xxxxx", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/xxxxx.html"));
  });

};