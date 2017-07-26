var LocalStrategy = require('passport-local').Strategy;

var config = require('./config');
var User = require('./api/users.controller')(dbmodels);
var dbmodels = require('./db');


module.exports = function (app, passport, dbmodels) {

  var localAuthenticate = function (username, password, done) {
    console.log("In authenticateUser function(): username=%s, password=%s", username, password);

    // search for email (username here), if passwordhash field matches entered
    // value then return true (OK)
    var where = {};
    where.email = username;

    dbmodels.Users.findOne({
      where: where
    })
      .then(function (found_user) {
        if (found_user && found_user.dataValues.passwordHash == password) {
          done(null, username);
        } else {
          done(null, false);
        }
      })
      .catch(function (err) {
        console.log("error finding user", err);
        return done(null, false);
      });
  }


  // var localAuthenticate = function (username, password, done) {
  //   var valid = authenticateUser(username, password);
  //   console.log("localAuthenticate() valid=", valid);
  //   if (valid) return done(null, username);
  //   return done(null, false);
  // };

  passport.use(new LocalStrategy(
    { // redefine the field names the stratgey (passport-local) expects
      usernameField: 'email',
      passwordField: 'password',
    },

    localAuthenticate // the strategy's "verify" callback
  ));

  passport.serializeUser(function (username, done) {
    //console.log('passport.serializeUser: ' + username);
    done(null, username);
  });

  passport.deserializeUser(function (id, done) {
    //console.log('passport.deserializeUser: ' + id);
    var user = id;
    done(null, user);
  });

  var isAuthenticated = function (req, res, next) {
    //console.log("isAuthenticated(): ", req.user);
    if (req.isAuthenticated()) {
      next();
    }
    else {
      res.sendStatus(401);
    }
  }

  return {
    isAuthenticated: isAuthenticated,
  }
};
