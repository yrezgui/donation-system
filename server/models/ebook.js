// MongoDB ORM package
var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

var ebookSchema = Schema({
	title: {
		type: String,
		required: true
	},
	filename: {
		type: String,
		required: true
	},
	bucket: {
		type: String,
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
	},
	tags: [{
		type: String
	}]
});

// Remove confidential informations
ebookSchema.methods.getPublic = function getPublic() {
	obj = this.toObject();
	delete obj.bucket;
	delete obj.filename;

	return obj;
};

// export the ebook model
module.exports = db.model('Ebook', ebookSchema);