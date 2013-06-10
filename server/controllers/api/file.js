var File = require('../../models/file.js');

exports.query = function query(req, res, next) {
	console.log('Query Files');

	File.find(function (err, files) {

		res.send({
			error: err,
			files: files || null
		});
	});
};

exports.create = function create(req, res, next) {
	console.log('Create File');

	File.create(req.body, function (err, file) {
		
		res.send({
			error: err,
			file: file || null
		});
	});
};

exports.get = function get(req, res, next) {
	console.log('Get File ' + req.params.id);

	File.findOne({_id: req.params.id}, function (err, file) {
		
		res.send({
			error: err,
			file: file || null
		});
	});
};

exports.save = function save(req, res, next) {
	console.log('Update File ' + req.params.id);

	File.findByIdAndUpdate(req.params.id, req.body, function (err, file) {
		
		res.send({
			error: err,
			file: file || null
		});
	});
};

exports.remove = function remove(req, res, next) {
	console.log('Remove File ' + req.params.id);

	File.findByIdAndRemove(req.params.id, function (err, file) {
		
		res.send({
			error: err,
			file: file || null
		});
	});
};
