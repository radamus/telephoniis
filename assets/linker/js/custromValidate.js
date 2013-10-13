$(document).ready(function(){

	$('.form-horizontal').validate({		
		rules :{
			lname: {
				required:true,
			},
			phone: {
				required:true,
				digits:true
			},
			email : {			
				email : true
			}
		},		
		messages: {
			lname: {
				required: "Wprowadź nazwisko",
			},
    		phone: {
       			required: "Książka telefoniczna bez numeru telefonu?",
       			digits: "Wprowadź cyfry"
     		},
     		email: {       			
       			email: "Wprowadź poprawny adres email"
     		}
   		}
	});
	
})

