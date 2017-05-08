var bcrypt = require('bcrypt');
var mongo = require('mongoskin');
var Q = require('q');
var _ = require('lodash');
var db = mongo.db('mongodb://127.0.0.1/angulardemo');

db.bind('demotest');
// var hash = bcrypt.hashSync("12345", salt);
var model       = {};
model.login     = login;
model.create    = create;
model.update    = update;
model.destroy   = destroy;
model.edit      = edit; 

module.exports = model;

/**
 * 
 * Create User
 */
function create (userData){

    var deferred = Q.defer();

    db.demotest.findOne({"email" : userData.email}, function (err, user) {
        if (err) deferred.reject(err);

        if(user){

            deferred.reject('Email "' + userData.email + '" is already taken');
        }
        else{

            createUser();
        }
    });
    
    function createUser() {

        var user = _.omit(userData, ['password', 'c_password']);
        user.password = bcrypt.hashSync(userData.password, 10);
        db.demotest.insert(user, function (err, doc) {

            if (err) deferred.reject(err);

            deferred.resolve();
        });
    }

    return deferred.promise;

}

/**
 * 
 * User Login
 */
function login(email, password) {
    
    var salt = bcrypt.genSaltSync(10);
    var collection = db.collection('demotest');
    collection.find({"email" : email, "password" : password}, function (err, user) {

        if(err) return err;

        if(user && bcrypt.compareSync(password, user.password)){

        }
        else{

            return "Invalid credential."
        }
    });
}

function update (){

}

function destroy() {

}

function edit() {
    
}
// var insertTestDoc = function (db, callback) {
//     //console.log("one"); return ;
//     var collection = db.collection('demotest');

//     collection.insertOne({"title" : "demotest", "description" : "Lorem Ipsum Sit Emet.", "password" : hash}, function ( err, db ){
//         assert.equal(err, null);
//         callback();
//     });

// }
// var login = function (db, callback) {

//     var collection = db.collection('demotest')

//     var cursor = collection.findOne({"title" : "demotest"});
//     console.log(cursor);
// //     cursor.each(function(err, doc) {
// //       assert.equal(err, null);
// //       if (doc != null) {
// //          console.log(doc);
// //       } else {
// //          callback();
// //       }
// //    });
// }
// MongoClient.connect('mongodb://localhost/angulardemo', function ( err, db ){

//     assert.equal( null, err );
//     console.log("Connected to the server correctly");
//     login(db, function () {
//         db.close();
//     });
//     // insertTestDoc(db, function () {
//     //     db.close();
//     // });

// });

