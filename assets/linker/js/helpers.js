$(document).ready(function(){

	$("#search").on("keyup", function(e) {
    // Set Search String
    	var search_string = $(this).val();
		

    // Do Search
    	if(search_string !== ''){
	        $.ajax({
            	type: "POST",
            	url: "/contact/find",
            	data: { query: search_string },
            	cache: false,
            	success: function(html){            	
	            	$("#contacts").empty();
                	$("#contacts").append(html.html);
            	}	
        	});
    	} return false; 
	});

	$("#searchform").on( "submit", function(e) {
		e.preventDefault();
	} );
})


