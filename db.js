var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:adminpassword@ds133127.mlab.com:33127/web-api-test', 
{ useMongoClient: true });