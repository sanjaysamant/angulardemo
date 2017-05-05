var express = require ('express'); //EXPRESS Package
var bodyParser = require('body-parser');// get body-parser
var route = express.Router();	//define our app using express
// var userModel = require('../model/user.model');
// var session = require('express-session');
route.use(bodyParser.urlencoded({ extended: true })); // for parsing   application/x-www-form-urlencoded
route.use(bodyParser.json()); // for parsing application/json
// route.use(bodyParser.json({ type: 'application/vnd.api+json' }))

/**
 * 
 * Register user
 */
route.post('/register', function (req, res) {
    console.log(req.body);//res.sendStatus(200);
    // userModel.create(req.body).then( function () {

    //         res.sendStatus(200);
    // }).catch( function (err) {

    //     res.status(400).send(err);
    // });
});

/**
 * 
 * Login user
 */
route.post('/login', function (req, res) {

    // userModel.authenticate(req.body.email, req.body.password).then( function () {

    //     res.sendStatus(200);
    // }).catch( function (err) {

    //     res.status(400).send(err);
    // });
});
module.exports = route;