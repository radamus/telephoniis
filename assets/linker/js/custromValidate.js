$(document).ready(function(){

	$('#form-contact').validate({		
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
	
	$('#form-signin').validate({		
		rules :{			
			email : {		
				required:true,	
				email : true
			},
			password : {
				required:true,
			}						
		},		
		messages: {
			email: {
				required: "Wprowadź adres email",
				email: "Wprowadź poprawny adres email"
			},    		
     		password: {       			
     			required: "Wprowadź haslo",       			
     		}
   		}
	});

	$('#sign-up-form').validate({		
		rules :{			
			email : {		
				required:true,	
				email : true
			},
			password: {
	      	minlength: 6,
	        required: true
	      },
	      confirmation: {
	      	minlength: 6,
	      	equalTo: "#password"
	      }
					
		},		
		messages: {
			email: {
				required: "Wprowadź adres email",
				email: "Wprowadź poprawny adres email"
			},    		
     		password: {   
     			minlength: 'Wprowadź co najmniej 6 znaków',    			
     			required: "Wprowadź haslo",       			
     		},     		    		
     		password: {   
     			minlength: 'Wprowadź co najmniej 6 znaków',    			
     			equalTo: "Wprowadzone hasła są różne",       			
     		}
   		}
	});
})

