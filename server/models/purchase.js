// MongoDB ORM package
var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

// Database client
var db = require('../db.js');

var purchaseSchema = Schema({
	client: {
		type: Schema.Types.ObjectId,
		ref: 'Client',
		required: true
	},
	fileId: {
		type: Schema.Types.ObjectId,
		ref: 'Client'
	},
	bucket: {
		type: String,
		required: true
	},
	size: {
		type: Number,
		required: true
	},
	icon: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

// export the purchase model
module.exports = db.model('Purchase', purchaseSchema);