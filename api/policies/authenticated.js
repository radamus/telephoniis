/**
 * Allow any authenticated user.
 */
module.exports = function (req, res, ok) {

  // User is allowed, proceed to controller
  if (req.session.authenticated) {
    return ok();
  }

  else {
  	var requireLoginError = [{name: 'Wymagana autoryzacja', message: 'Musisz być zalogowany'}]
		req.session.flash = {
			err: requireLoginError
		}
		//console.log(req);
		req.session.redirect_to = req.path;
		res.redirect('/session/new');
    return;
  }
};