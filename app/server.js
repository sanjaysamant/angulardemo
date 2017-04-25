var express = require ('express'); //EXPRESS Package
var cors = require('cors')
var app = express();	//define our app using express
var bodyParser = require('body-parser');// get body-parser
// var morgan = require('morgan'); //use to see requests
var mongoose = require('mongoose') //for working with mongoDB
// var path = require('path');
var auth = require('./model/auth.model.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', function (req, res) {

    res.send("hello world");
});
app.post('/api/login', function (req, res) {
    
    console.log(req);
    //res.send(JSON.stringify(req));
});

// app.use('/api/login', auth);
// app.use('/api/  register', auth);
//console.log(server.address().addres);
// start server
var server = app.listen(8001, 'localhost', function () {

    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});

module.exports = app;