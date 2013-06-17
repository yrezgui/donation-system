var Client	= require('../../models/client.js');
var crypto	= require('crypto');

exports.create = function create(req, res, next) {
	console.log('Create Client');

	Client.create(req.body, function (err, client) {

		if(err || !client) {
			res.send({err: 'client not created'}, 409);
			return;
		}
	
		res.send(client.getPublic());
	});
};

exports.get = function get(req, res, next) {
	console.log('Get Client ' + req.params.id);

	
	Client.findOne({_id: req.params.id}, function (err, client) {

		if(err || !client) {
			res.send({err: 'client not exist'}, 404);
			return;
		}

		if(req.loggedClient._id != req.params.id)
		{
			res.send(client.getPublic());
		}
		else
		{
			res.send(client.getLogin());
		}
	});
};

exports.save = function save(req, res, next) {
	console.log('Update Client ' + req.params.id);

	if(!req.body.password) {
		delete req.body.password;
	}

	if(req.loggedClient._id != req.params.id)
	{
		res.send({err: 'not authorized'}, 403);
		return;
	}

	Client.findByIdAndUpdate(req.params.id, req.body, function (err, client) {

		if(err || !client) {
			res.send({err: 'client not exist'}, 404);
			return;
		}
	
		res.send(client.getPublic());
	});
};

exports.login = function login(req, res, next) {
	console.log('Login Client ' + req.body.email);

	var newToken = crypto.createHash('sha256').update(crypto.randomBytes(24).toString('hex') + req.body.email + new Date()).digest('hex');

	Client.findOneAndUpdate(
		{
			email: req.body.email,
			password: req.body.password,
		},
		{
			token: newToken
		},
		function (err, client) {
	
			if(err || !client) {
				res.send({err: 'wrong email/password'}, 401);
				return;
			}
	
			res.send(client.getLogin());
		}
	);
};