var _titleOptions = function(selected, disabled){
    var titles = ['prof.', 'dr hab.', 'dr', 'mgr'];
    var select = [];
    select.push('<select class="form-control"  id="title" '+  (disabled?'disabled': ' ') +'>');
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
	return '<input type="text" class = "form-control" value = "'+ value +'"placeholder="' + placeholder + '" name="' + name + '" '+  (disabled?'disabled': ' ') +'></input>';
}

var _textarea = function(placeholder, name, value, disabled){
	return '<textarea class="form-control" value = "'+ value +'" placeholder="' + placeholder + '" name="' + name + '" rows="5" '+  (disabled?'disabled': ' ') +'></textarea>';
	
}
exports.editForm = function(submit, action, csrf, contact, disabled) {
	var formgroup = '<div class="form-group">';
	var elemdiv = '<div class="col-lg-10">';
	var closediv = '</div>';
	var attributes = Object.keys(Contact.attributes);
	if(!disabled) {disabled = false;}
	if(!contact){
		contact = {};
		for(var i = 0; i < attributes.length; i++){
			contact[attributes[i]] = " ";
		}
	}
	var form = [];
	form.push('<form action="');
	form.push(action);
	form.push('" method="post" class="form-horizontal">');
	form.push('<h2 class="form-edit-heading">Edytuj kontakt</h2>');
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
	
	form.push('<input type="submit" class = "btn btn-lg btn-primary btn-block" value="'+submit +'"> <input type="hidden"   name="_csrf" value="' + csrf+'">');
	form.push('</form>');
	return form.join("\n");
	
}

exports.showContact = function(contact) {
	var contactInfo = [];
	var attributes = Object.keys(Contact.attributes);
}