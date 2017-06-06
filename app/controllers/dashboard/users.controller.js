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

route.get('/', function (req, res){
    console.log(req.session);
  res.render('index', {
    title: 'Welcome'
  });
});

/**
 * Get user by id
 */

// app.get('/api/dashboard', function(req, res) {

//     userModel.getUserByID(req.params.id).then( function ( result) {

//         res.send(result);
//     }).catch (function (err){

//       res.send(err).status(400);

//     })
// })

/**
 * Get user info data api
 */
// route.get("/:id/:pageTitle", function (req, res){

//     userModel.getByID(req.params.id, req.params.pageTitle).then( function ( result) {

//         res.send(result);
//     }).catch (function (err){

//       res.send(err).status(400);

//     })
// })

/**
 * Get all users by type
 */

// route.get("/:user_type", function (req, res){

//     userModel.getUsersByType(req.params.user_type).then(function (result) {

//         res.send(result);
//     }).catch(function (err){
        
//         res.send(err).status(400);
//     });
// });
/**
 * Personal Details
 */
// route.put("/personal/:id", function (req, res) {

//     userModel.update(req.params.id, req.body).then( function (result) {

//         res.send("OK");
//     }).catch( function ( err ){

//       res.send(err).status(400);
//     });
// });
/**
 * Educational Details
 */
// route.put("/edu/:id", function (req, res) {

//     userModel.update(req.params.id, req.body).then( function () {
        
//         res.sendStatus("OK")
//     }).catch( function ( err ){

//       res.send(err).status(400);
//     });
// });

/**
 * Contact Details
 */
// route.put("/contact/:id", function (req, res) {

//     userModel.update(req.params.id, req.body).then( function () {
        
//         res.sendStatus(200)
//     }).catch( function ( err ){

//       res.send(err).status(400);
//     });
// });

/**
 * Other Details
 */
// route.put("/other/:id", function (req, res) {

//     userModel.update(req.params.id, req.body).then( function () {
        
//         res.sendStatus(200)
//     }).catch( function ( err ){

//       res.send(err).status(400);
//     });
// });

module.exports = route;