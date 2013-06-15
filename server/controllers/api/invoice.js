var Invoice = require('../../models/invoice.js');

exports.query = function query(req, res, next) {
	console.log('Query Invoices');

	Invoice.find(function (err, invoices) {
		
		if(err) {
			res.send({err: 'server error'}, 500);
			return;
		}
	
		res.send(invoices);
	});
};

exports.create = function create(req, res, next) {
	console.log('Create Invoice');

	var newInvoice = {
		client: req.body.client,
		file: req.body.file,
		date: new Date()
	};

	Invoice.create(newInvoice, function (err, invoice) {

		if(err || !invoice) {
			res.send({err: 'invoice not created'}, 409);
			return;
		}
	
		res.send(invoice);
	});
};

exports.get = function get(req, res, next) {
	console.log('Get Invoice ' + req.params.id);

	Invoice.findOne({_id: req.params.id}, function (err, invoice) {
		
		res.send({
			error: err,
			invoice: invoice || null
		});
	});
};

exports.save = function save(req, res, next) {
	console.log('Update Invoice ' + req.params.id);

	Invoice.findByIdAndUpdate(req.params.id, req.body, function (err, invoice) {
		
		res.send({
			error: err,
			invoice: invoice || null
		});
	});
};

exports.remove = function remove(req, res, next) {
	console.log('Remove Invoice ' + req.params.id);

	Invoice.findByIdAndRemove(req.params.id, function (err, invoice) {
		
		res.send({
			error: err,
			invoice: invoice || null
		});
	});
};
