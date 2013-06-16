// MongoDB ORM package
var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

var invoiceSchema = Schema({
	client: {
		type: Schema.Types.ObjectId,
		ref: 'Client',
		required: true
	},
	ebook: {
		type: Schema.Types.ObjectId,
		ref: 'Ebook',
		required: true
	},
	date: {
		type: Date,
		required: true
	}
});

// export the invoice model
module.exports = db.model('Invoice', invoiceSchema);