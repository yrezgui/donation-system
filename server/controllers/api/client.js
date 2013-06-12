var Client	= require('../../models/client.js');
var crypto	= require('crypto');

exports.query = function query(req, res, next) {
	console.log('Query Clients');

	Client.find().select('-token -password').exec(function(err, clients) {
		
		if(err) {
			res.send({err: 'server error'}, 500);
			return;
		}
	
		res.send(clients);
	});
};

exports.create = function create(req, res, next) {
	console.log('Create Client');

	Client.create(req.body, function (err, client) {

		if(err || !client) {
			res.send({err: 'client not created'}, 409);
			return;
		}
	
		res.send(client.getProfile());
	});
};

exports.get = function get(req, res, next) {
	console.log('Get Client ' + req.params.id);

	Client.findOne({_id: req.params.id}, function(err, client) {

		if(err || !client) {
			res.send({err: 'client not exist'}, 404);
			return;
		}
	
		res.send(client.getProfile());
	});
};

exports.save = function save(req, res, next) {
	console.log('Update Client ' + req.params.id);

	Client.findByIdAndUpdate(req.params.id, req.body, function(err, client) {

		if(err || !client) {
			res.send({err: 'client not exist'}, 404);
			return;
		}
	
		res.send(client.getProfile());
	});
};

exports.remove = function remove(req, res, next) {
	console.log('Remove Client ' + req.params.id);

	Client.findByIdAndRemove(req.params.id, function(err, client) {
		
		if(err || !client) {
			res.send({err: 'client not exist'}, 404);
			return;
		}
	
		res.send(client.getProfile());
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
		function(err, client) {
	
			if(err || !client) {
				res.send({err: 'wrong email/password'}, 401);
				return;
			}
	
			res.send(client.getProfile());
		}
	);
};