// MongoDB ORM package
var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

var clientSchema = Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	photo: {
		type: String
	},
	token: {
		type: String,
		required: true,
		default: '-1'
	}
});

clientSchema.methods.getLogin = function getLogin() {
	obj = this.toObject();
	delete obj.password;

	return obj;
}

// export the client model
module.exports = db.model('Client', clientSchema);