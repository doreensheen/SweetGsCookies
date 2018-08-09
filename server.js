// ----------------------------------------------------------------------------------------------------
// require connection
var con = require("./config/connection.js");

// ----------------------------------------------------------------------------------------------------
// require express
var express = require("express");
var app = express();

// require path
var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

// ----------------------------------------------------------------------------------------------------
// require express-handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// ----------------------------------------------------------------------------------------------------
// define PORT
var PORT = process.env.PORT || 1000;

// ----------------------------------------------------------------------------------------------------
// get pages
app.get("/", function(req, res) {
    res.render("home");
})
app.get("/about", function(req, res) {
    res.render("about");
})
app.get("/gallery", function(req, res) {
    res.render("gallery");
})
app.get("/customorder", function(req, res) {
    res.render("customorder");
})
app.get("/faq", function(req, res) {
    res.render("faq");
})
app.get("/contact", function(req, res) {
    res.render("contact");
})


// ----------------------------------------------------------------------------------------------------
// server listening
app.listen(PORT, function () {
    console.log("Server running on PORT " + PORT);
})

// ----------------------------------------------------------------------------------------------------
