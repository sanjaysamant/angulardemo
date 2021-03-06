var express = require ('express'); //EXPRESS Package
var bodyParser = require('body-parser');// get body-parser
var app = express();	//define our app using express
var cors = require('cors');
var multer = require('multer');
var session = require('express-session');
// var morgan = require('morgan'); //use to see requests
// var assert = require('assert');
// var path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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
//Multer file upload
  // var storage = multer.diskStorage({ //multers disk storage settings
  //     destination: function (req, file, cb) {
  //         cb(null, './uploads/')
  //     },
  //     filename: function (req, file, cb) {
  //         var datetimestamp = Date.now();
  //         cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
  //     }
  // });
  // var upload = multer({ //multer settings
  //                 storage: storage
  //             }).single('file');
  // /** API path that will upload the files */
  // app.post('/upload', function(req, res) {
  //     upload(req,res,function(err){
  //         if(err){
  //               res.json({error_code:1,err_desc:err});
  //               return;
  //         }
  //           res.json({error_code:0,err_desc:null});
  //     })<br />
  //   });



app.set('view engine', 'ejs');

app.set('views', './view/dashboard');
app.use("/public",express.static(__dirname + "/public/dashboard/"));

//routes
app.use('/api/auth', require('./controllers/auth/auth.controller'));
app.use('/api/users', require('./controllers/users/users.controller'));
app.use('/api/user', require('./controllers/users/users.controller'));

app.use('/api/dashboard', require('./controllers/dashboard/users.controller'));
// app.get('/api', function (req, res) {
//     res.send('/api/login');
// } );
// start server
var server = app.listen(8001, function () {

    console.log('Server listening at ' + server.address().port);
});

// module.exports = app;