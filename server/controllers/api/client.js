var Client = require('../../models/client.js');

exports.query = function(req, res, next){
	console.log('Query Clients');

	Client.find(function(err, clients) {
		if(err)
			return next(err);
		
		res.send(clients);
	});
};

exports.create = function(req, res, next){
	console.log('Create Client');

	Client.create(req.body, function (err, client) {
		if (err)
			return next(err);
		
		res.send(client);
	});
};

exports.get = function(req, res, next){
	console.log('Get Client ' + req.params.id);

	Client.findOne({_id: req.params.id}, function(err, client) {
		if(err)
			return next(err);

		res.send(client);
	});
};

exports.save = function(req, res, next){
	console.log('Update Client ' + req.params.id);

	Client.findByIdAndUpdate(req.params.id, req.body, function(err, client) {
		if (err)
			return next(err);

		res.send(client);
	});
};

exports.remove = function(req, res, next){
	console.log('Remove Client ' + req.params.id);

	Client.findByIdAndRemove(req.params.id, function(err, client) {
		if (err)
			return next(err);

		res.send(client);
	});
};
