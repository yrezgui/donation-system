var Invoice = require('../../models/invoice.js');

exports.query = function query(req, res, next) {
	console.log('Query Invoices');

	Invoice.find(function (err, invoices) {
		if(err)
			return next(err);
		
		res.send(invoices);
	});
};

exports.create = function create(req, res, next) {
	console.log('Create Invoice');

	Invoice.create(req.body, function (err, invoice) {
		if (err)
			return next(err);
		
		res.send(invoice);
	});
};

exports.get = function get(req, res, next) {
	console.log('Get Invoice ' + req.params.id);

	Invoice.findOne({_id: req.params.id}, function (err, invoice) {
		if(err)
			return next(err);

		res.send(invoice);
	});
};

exports.save = function save(req, res, next) {
	console.log('Update Invoice ' + req.params.id);

	Invoice.findByIdAndUpdate(req.params.id, req.body, function (err, invoice) {
		if (err)
			return next(err);

		res.send(invoice);
	});
};

exports.remove = function remove(req, res, next) {
	console.log('Remove Invoice ' + req.params.id);

	Invoice.findByIdAndRemove(req.params.id, function (err, invoice) {
		if (err)
			return next(err);

		res.send(invoice);
	});
};
