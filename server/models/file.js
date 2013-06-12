// MongoDB ORM package
var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

var fileSchema = Schema({
	fileId: {
		type: String,
		required: true
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
	},
	tags: [{
		type: String
	}]
});

// Remove confidential informations
fileSchema.methods.getPublic = function getPublic() {
	obj = this.toObject();
	delete obj.bucket;

	return obj;
};

// export the file model
module.exports = db.model('File', fileSchema);