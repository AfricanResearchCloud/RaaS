//Initialize required bits and pieces
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var morgan = require('morgan');

//Get DB config
var configDB = require('./config/database.js');
require('./config/passport')(passport);
app.use(morgan('dev'));

mongoose.connect(configDB.url);

// routes ======================================================================
require('./app/routes.js')(app, passport);
app.listen(port);
