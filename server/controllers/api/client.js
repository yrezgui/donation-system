
var mongoose	= require('mongoose');
mongoose.connect('mongodb://localhost/flouss');

var Client = require('../../models/client.js');

exports.query = function(req, res, next){
	console.log('query');

	Client.find(function(err, clients) {
		if(err)
			return next(err);
		
		res.send(clients);
	});
};

exports.create = function(req, res, next){
	Client.create(req.body, function (err, client) {
		if (err)
			return next(err);
		
		res.send(client);
	});
};

exports.get = function(req, res, next){
	Client.findOne({_id: req.params.id}, function(err, client) {
		if(err)
			return next(err);

		res.send(client);
	});
};

exports.save = function(req, res, next){
	Client.findByIdAndUpdate(req.params.id, req.body, function(err, client) {
		if (err)
			return next(err);

		res.send(client);
	});
};

exports.remove = function(req, res, next){
	Client.findByIdAndRemove(req.params.id, function(err, client) {
		if (err)
			return next(err);

		res.send(client);
	});
};
