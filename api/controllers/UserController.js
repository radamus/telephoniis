/**
 * UserController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */
  'new' : function(req, res) {
  	
  	res.view();
  	
  },

  create: function(req, res, next) {

    var userObj = {
      name: req.param('name'),
      title: req.param('title'),
      email: req.param('email'),
      password: req.param('password'),
      confirmation: req.param('confirmation')
    }

    // Create a User with the params sent from 
    // the sign-up form --> new.ejs
    User.create(userObj, function userCreated(err, user) {

      // // If there's an error
      // if (err) return next(err);

      if (err) {
        console.log(err);
        req.session.flash = {
          err: err
        }

        // If error redirect back to sign-up page
        return res.redirect('/user/new');
      }

      // Log user in
      req.session.authenticated = true;
      req.session.User = user;

      res.redirect('/user/show/' + user.id);
      
    });
  },

  // render the profile view (e.g. /views/show.ejs)
  show: function(req, res, next) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },
};
