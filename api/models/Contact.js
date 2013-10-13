/**
 * Contact
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {


  attributes: {
  	
  	title: {
      type: 'string',       
    },
    fname : {
  		type: 'string',	
  	},
  	lname : {
  		type: 'string',  		
  	},
  	
  	institution : {
  		type: 'string',  		
  	},
  	phone : {
  		type: 'string',  			
  	},

  	email : {
  		type: 'string',
      email : true
  		 	  		
  	},
     address : {
      type: 'string',
              
    },
  	
  	notes: {
  		type: 'string'
  	},
    
  },

}; 