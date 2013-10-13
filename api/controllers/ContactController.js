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
  		_.each(contacts, function(elem) {
  			html.push("<tr>");
  			html.push("<td>");
  			html.push(elem.title);
  			html.push("</td>");
  			html.push("<td>");
  			html.push(elem.lname);
  			html.push("</td>");
  			html.push("<td>");
  			html.push(elem.institution);
  			html.push("</td>");
  			html.push("<td>");
  			html.push(elem.phone);
  			html.push("</td>");
  			html.push("<td>");
  			html.push("<a href='/contact/show/" + elem.id + "' class='btn btn-primary'>Szczegóły</a>");
  			html.push("</td>");
  			html.push("<td>");
  			html.push("<a href='/contact/edit/" + elem.id + "' class='btn btn-warning'>Edytuj</a>");
  			html.push("</td>");
  			html.push("</tr>");
  		});

  		res.json({html:html.join(' ')});
  	})
  }
}
