/**
 * ContactController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {
 
  'new': function (req, res) {
    res.view();
  },
  
  index : function (req, res, next) {
  	Contact.find(function(err, contacts){
  		if(err) return next(err);
  		res.view({contacts:contacts});
  	})
    
  },
  find : function(req, res, next) {  	
  	Contact.findByLnameLike(req.param('query'), function(err, contacts){
  		if(err) return next(err);
  		var html = [];
  		var td = '</td><td>';
  		_.each(contacts, function(elem) {
  			html.push("<tr>");
  			html.push("<td>");
//  			for(attr in Object.keys(elem))
  			html.push(elem.title);
  			html.push(td);  			
  			html.push(elem.lname);
  			html.push(td);
  			html.push(elem.institution);
  			html.push(td);
  			html.push(elem.phone);
  			html.push(td);
  			html.push("<a href='/contact/show/" + elem.id + "' class='btn btn-primary details'>Szczegóły</a>");
  			html.push("</td>");  			
  			html.push("</tr>");
  		});

  		res.json({html:html.join(' ')});
  	})
  },

  show  : function(req, res, next) {
  		Contact.findOne(req.param('id'), function(err, found) {
  			if(err) return next(err);

  			if(!found) return next();
  			res.view({contact : found})
  		})
  },

  edit  : function(req, res, next) {
  		Contact.findOne(req.param('id'), function(err, found) {
  			if(err) return next(err);

  			if(!found) return next('Kontakt nie istnieje');
  			res.view({contact : found})
  		})
  },

  update  : function(req, res, next) {
  		Contact.update(req.param('id'), req.params.all(), function(err) {
  			if(err) return next(err);

  			res.redirect(303, "/contact/show/" + req.param('id'));
  		})
  },

  create : function(req, res, next){
  	Contact.create(req.params.all(), function(err, contact){
  		if(err) {
        console.log(err);
        req.session.flash = {err:err};
        return res.redirect('contact/new');      
      }

  		res.redirect("/contact/show/" + contact.id);
  	})
  },

  destroy : function(req, res, next) {
  		Contact.findOne(req.param('id'), function(err, found) {
  			if(err) return next(err);

  			if(!found) return next('Kontakt nie istnieje');
  			Contact.destroy(req.param('id'), function(err){
  				if(err) return next(err);  				
  			})
  			res.redirect('/');
  		})
  	},

}
