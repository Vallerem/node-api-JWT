require("dotenv").config();

var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var AuthController = require('./auth/AuthController');
var RouteController = require('./routes/RouteController');

app.use('/', RouteController);
app.use('/users', UserController);
app.use('/api/v1/auth', AuthController);

module.exports = app;