var _titleOptions = function(selected, disabled){
    var titles = ['prof.', 'dr hab.', 'dr', 'mgr'];
    var select = [];
    console.log("selected: " + selected)
    select.push('<select class="form-control"  name="title" '+  (disabled?'disabled': ' ') +'>');
    select.push('<option></option>');
    titles.forEach(function(elem){
        var isSelected = (selected === elem);
        select.push('<option'+ (isSelected ? ' selected' : '' )+'>'+ elem +'</option>');    
    })
    select.push('</select>');
    return select.join(' ');
}


var _label = function(forattr, value){
	return '<label for="' + forattr + '" class="col-lg-2 control-label">' + value + '</label>';
}

var _textinput = function(placeholder, name, value, disabled){
	return '<input type="text" class = "form-control" value = "'+ value +'" placeholder="' + placeholder + '" name="' + name + '" '+  (disabled?'disabled': ' ') +'></input>';
}

var _textarea = function(placeholder, name, value, disabled){
	var placeOrValue = value? ' value = "' + value : ' placeholder = "' + placeholder;
	placeOrValue += '" ';
	return '<textarea class="form-control" value = "'+ value +'" placeholder="' + placeholder + '" name="' + name + '" rows="5" '+  (disabled?'disabled': ' ') +'>'+value+'</textarea>';
	
}
exports.contactForm = function(title, submitText, submitAction, cancelText,  cancelAction, csrf, contact, disabled) {
	var formgroup = '<div class="form-group">';
	var elemdiv = '<div class="col-lg-10 controls">';
	var closediv = '</div>';
	var attributes = Object.keys(Contact.attributes);
	if(!disabled) {disabled = false;}
	if(!contact){
		contact = {};
		for(var i = 0; i < attributes.length; i++){
			contact[attributes[i]] = "";
		}
	}
	var form = [];
	form.push('<form action="');
	form.push(submitAction);
	form.push('" method="post" class="form-horizontal">');
	form.push('<h2 class="form-edit-heading">'+title+' </h2>');
	for(var i = 0; i < attributes.length; i++){
		form.push(formgroup);
		form.push(_label(attributes[i], Contact.labels[attributes[i]]));
		form.push(elemdiv);
		if(attributes[i] === 'title'){
			form.push(_titleOptions(contact[attributes[i]], disabled));
		}else if(attributes[i] === 'notes'){
			form.push(_textarea(Contact.labels[attributes[i]], attributes[i], contact[attributes[i]], disabled));
		}else {
			form.push(_textinput(Contact.labels[attributes[i]], attributes[i], contact[attributes[i]], disabled));
		}
		form.push(closediv);
		form.push(closediv);
	}
	form.push(formgroup);

	form.push('<div class="col-lg-6 controls">');
	form.push('<input type="submit" class = "btn btn-lg btn-primary btn-block" value="'+submitText +'"> <input type="hidden"   name="_csrf" value="' + csrf+'">');
	form.push(closediv);
	

	form.push('<div class="col-lg-6 controls">');
	
	form.push('<a href="' +cancelAction + '" class="btn btn-lg btn-primary btn-block">' +cancelText+'</a>');
	form.push(closediv);
	form.push('</div></form>');
	form.push("<script></script>");
	return form.join("\n");
	
}

exports.showContact = function(contact) {
	var contactInfo = [];
	var attributes = Object.keys(Contact.attributes);
}