/**
 * SessionController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */
var bcrypt = require('bcrypt'); 
module.exports = {
	'new': function(req, res) {
		console.log(req.session);
		res.view();
	},
  create: function(req, res, next) {

		// Check for email and password in params sent via the form, if none
		// redirect the browser back to the sign-in form.
		if (!req.param('email') || !req.param('password')) {
			 // return next({err: ["Password doesn't match password confirmation."]});

			var usernamePasswordRequiredError = [{name: 'usernamePasswordRequired', message: 'You must enter both a username and password.'}]

				// Remember that err is the object being passed down (a.k.a. flash.err), whose value is another object with
				// the key of usernamePasswordRequiredError
				req.session.flash = {
					err: usernamePasswordRequiredError
			}

			res.redirect('/session/new');
			return;
		}

		// Try to find the user by there email address. 
		// findOneByEmail() is a dynamic finder in that it searches the model by a particular attribute.
		// User.findOneByEmail(req.param('email')).done(function(err, user) {
		User.findOneByEmail(req.param('email'), function foundUser (err, user) {
			if (err) return next(err);

			// If no user is found...
			if (!user) {
				var noAccountError = [{name: 'noAccount', message: 'The email address ' + req.param('email') + ' not found.'}]
				req.session.flash = {
					err: noAccountError	
				}
				res.redirect('/session/new');
				return;
			}
			console.log(user);
			// Compare password from the form params to the encrypted password of the user found.
			bcrypt.compare(req.param('password'), user.encryptedPassword, function(err, valid) {
				if (err) return next(err);

				// If the password from the form doesn't match the password from the database...
				if (!valid) {
					var usernamePasswordMismatchError = [{name: 'usernamePasswordMismatch', message: 'Invalid username and password combination.'}]
					req.session.flash = {
						err: usernamePasswordMismatchError
					}
					res.redirect('/session/new');
					return;
				}

				// Log user in				
				req.session.authenticated = true;
				req.session.User = user;

				//set session timeout
				var currTime = new Date();
				var expTime = new Date(currTime.getTime() + 6000000);
				req.session.cookie.expires = expTime;
				//redirect to orginally requested page
				 var redirect_to = req.session.redirect_to ? req.session.redirect_to : ('/user/show/' + user.id);
        		delete req.session.redirect_to;
        		res.redirect(303, redirect_to);
			});
		});
	},
	destroy: function(req, res, next) {
	
				// Wipe out the session (log out)
				req.session.destroy();
				
				res.redirect('/');
	
	}
};
