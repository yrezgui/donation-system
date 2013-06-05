// MongoDB ORM package
var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

// Database client
var db = require('../db.js');

var clientSchema = Schema({
	googleId: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	}
	photo: {
		type: String,
		required: true
	}
});

// export the client model
module.exports = db.model('Client', clientSchema);