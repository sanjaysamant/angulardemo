var express = require ('express'); //EXPRESS Package
var app = express();	//define our app using express

var cors = require('cors');
var session = require('express-session');
var bodyParser = require('body-parser');// get body-parser
// var morgan = require('morgan'); //use to see requests
// var assert = require('assert');
// var path = require('path');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

/**
 * Header Control
 */
app.use(function(req, res, next) {

  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  next();
} );
//routes
app.use('/api/register', require('./controllers/auth.controller'));
app.use('/api/login', require('./controllers/auth.controller'));
// app.use('/api/users', require('./controllers/users.controller'));

// app.get('/api', function (req, res) {
//     res.send('/api/login');
// } );
// start server
var server = app.listen(8001, 'localhost', function () {

    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});

// module.exports = app;