var express = require ('express'); //EXPRESS Package
var bodyParser = require('body-parser');// get body-parser
var route = express.Router();	//define our app using express
var multer = require('multer');
var validator = require('validator');
var userModel = require('../../model/user.model');
var session = require('express-session');
route.use(bodyParser.urlencoded({ extended: true })); // for parsing   application/x-www-form-urlencoded
route.use(bodyParser.json()); // for parsing application/json
// route.use(bodyParser.json({ type: 'application/vnd.api+json' }))

route.use(session({
    secret: "qwaszx",
    proxy: true,
    resave: true,
    saveUninitialized: true
}));


// var storage = multer.diskStorage({
//   // destino del fichero
//   destination: function (req, file, cb) {
//     cb(null, './public/uploads/')
//   },
//   // renombrar fichero
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

// var upload = multer({ storage: storage });

// app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
//   console.log('files', req.files);
//   res.send(req.files);
// });





/**
 * 
 * Register user
 */
route.post('/register', function (req, res) {

    if(req.body.password === req.body.c_password){

      //console.log(req.body);
      return userModel.create(req.body).then( function () {
        
        res.sendStatus(200);
      }).catch( function (err) {
        console.log(err);
          res.send(err).status(400);
      });
    }else{

      res.send( "Please match the password");
    }
});

/**
 * 
 * Login user
 */
route.post('/login', function (req, res) {

    return userModel.login(req.body).then( function () {
      
     req.session.auth = req.body;
     res.sendStatus(200);

    }).catch( function (err) {

      res.send(err).status(400);
    })
});

/**
 * 
 * Logout User
 */
route.get('/logout', function (req, res) {


    req.session.destroy();
    res.sendStatus(200);
});

module.exports = route;