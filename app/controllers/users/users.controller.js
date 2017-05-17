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

route.put("/personal/:id", function (req, res) {

    data = {};
    data['personal_details'] = req.body;
    userModel.update(req.params.id, data).then( function () {

        res.sendStatus(200);
    }).catch( function ( err ){

      res.send(err).status(400);
    });
});

// route.put("/contact/:id", function (req, res) {

//     userModel.update(req.params.id, "contact_details", req.body).then( function () {
        
//         res.sendStatus(200)
//     }).catch( function ( err ){

//       res.send(err).status(400);
//     });
// });

module.exports = route;