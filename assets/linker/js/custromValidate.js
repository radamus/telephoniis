$(document).ready(function(){
	$('.form-horizontal').validate({
		rules :{
			phone: {
				required:true,
				digits:true
			},
			email : {			
				email : true
			}
		},		
	});
	
})

