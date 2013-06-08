// MongoDB ORM package
var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

var purchaseSchema = Schema({
	client: {
		type: Schema.Types.ObjectId,
		ref: 'Client',
		required: true
	},
	fileId: {
		type: Schema.Types.ObjectId,
		ref: 'File'
	},
	date: {
		type: Date,
		required: true
	}
});

// export the purchase model
module.exports = mongoose.model('Purchase', purchaseSchema);