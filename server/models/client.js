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
		required: true,
		unique: true
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

// Remove confidential informations
clientSchema.methods.getPublic = function getPublic() {
	obj = this.toObject();
	delete obj.password;
	delete obj.token;

	return obj;
};

// Remove confidential informations
clientSchema.methods.getLogin = function getLogin() {
	obj = this.toObject();
	delete obj.password;

	return obj;
};

// export the client model
module.exports = db.model('Client', clientSchema);