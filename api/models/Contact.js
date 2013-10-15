/**
 * Contact
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

module.exports = {
  schema:true,

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
  	phone : {
      type: 'string',       
    },
  	institution : {
  		type: 'string',  		
  	},
  	

  	email : {
  		type: 'string',
      email : true
  		 	  		
  	},
      	
  	notes: {
  		type: 'string'
  	},
    
  },

  labels: {
    title:'Tytuł',
    fname : 'Imię',
    lname : 'Nazwisko',
    
    institution : 'Instytucja',
    phone : 'Telefon',

    email : 'email',
        
    notes: 'Uwagi',
  }
}; 