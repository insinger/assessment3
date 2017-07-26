// define API route handlers
// Load controller(s) and wire up API endpoints to functions defined in the controller(s)

module.exports = function (app, dbmodels, auth, passport) {
  var WelcomeController = require('./api/welcome.controller')(dbmodels);
  var UsersController = require('./api/users.controller')(dbmodels);


  // Authorization
  app.post('/login', passport.authenticate('local'), function (req, res) {
    res.status(200).json({ user: req.user });
  });

  app.get('/user/auth', function (req, res) {
    if (req.user) {
      res.status(200).json({ user: req.user });
    }
    else {
      res.sendStatus(401);
    }
  });

  app.get('/logout', function (req, res) {
    // req.logout();
    req.session.destroy(function (err) {
      res.redirect('/');
      });
  });



  //------------------------------------------------------------
  //
  // Check if logged in
  app.get("/api/isloggedin", WelcomeController.isloggedin);

  //------------------------------------------------------------

  // USERS
  //
  // Create new user
  app.post("/api/users", UsersController.create);

  // Retrieve user 
  app.get("/api/users/:id", UsersController.retrieve);

  // Update user 
  app.put("/api/users/:id", UsersController.update);

  // Delete user 
  app.delete("/api/users/:id", UsersController.destroy);

  // Search users 
  app.get("/api/users", UsersController.search);

  //------------------------------------------------------------

};
