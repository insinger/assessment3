var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var Sequelize = require("sequelize");
var session = require('express-session');
var passport = require('passport');


// loads config.js, which in turn loads either development.js or production.js
const config = require('./config');

const NODE_PORT = process.env.NODE_PORT || config.PORT || 3000;
const NODE_HOSTNAME = process.env.NODE_HOSTNAME || config.HOSTNAME || 3000;

const CLIENT_FOLDER = path.join(__dirname, '/../client');  // public
const MSG_FOLDER = path.join(CLIENT_FOLDER, '/assets/messages');

// open DB connection, load individual database models & set associations
const dbmodels = require('./db'); // dbmodels keys are the sequelize Model objects for all the tables

// instantiate HTTP server
var app = express();

// disable caching for non-static routes
app.set('etag',false);

// helps make POST data availabe in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(session({
  secret: config.SECRET,
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

// route for serving static files
app.use(express.static(CLIENT_FOLDER));

var auth = require('./auth')(app, passport,dbmodels);
// load additional route handlers
require('./routes')(app, dbmodels,auth,passport); // defines API endpoints and their handlers
// 404 handler - always last
app.use(function(req, res) {
	console.log("404 handler!");
	res.status(404).sendFile(path.join(MSG_FOLDER + "/404.html"));
});

// TODO:put back once debugging done
// 500 handler - has 4 parameter signature
// app.use(function(err, req, res, next) {
// 	console.log("500 handler!");
// 	res.status(500).sendFile(path.join(MSG_FOLDER + '/500.html'));
// });

// start HTTP server
app.listen(NODE_PORT,NODE_HOSTNAME, function() {
	console.log("Server listening on "+NODE_HOSTNAME+" on port " + NODE_PORT);
});
