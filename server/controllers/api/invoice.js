var config		= require('../../config.js');
var Invoice		= require('../../models/invoice.js');
var stripe		= require('stripe')(config.param('stripe_privateKey'));
var sig			= require('amazon-s3-url-signer');
var mongoose	= require('mongoose');
var Pusher		= require('pusher');

var urlSigner	= sig.urlSigner(config.param('aws_accessKeyId'), config.param('aws_secretAccessKey'), {});
var pusher		= new Pusher({
	appId: config.param('pusher_appId'),
	key: config.param('pusher_key'),
	secret: config.param('pusher_secret')
});

exports.query = function query(req, res, next) {
	console.log('Query Invoices');

	Invoice
		.find()
		.populate('ebook')
		.where('client').equals(req.loggedClient._id)
		.exec(function (err, invoices) {
			
			if(err) {
				res.send({err: 'server error'}, 500);
				return;
			}
		
			res.send(invoices);
		});
};

exports.create = function create(req, res, next) {
	console.log('Create Invoice');

	var newCharge = {
		amount: req.body.amount,
		currency: config.param('stripe_currency'),
		card: req.body.stripe_token
	}

	stripe.charges.create(newCharge, function capture(err, response) {

		if(err || !response) {
			res.send({err: 'invoice not created'}, 409);
			return;
		}

		var newInvoice = {
			client: req.body.client,
			ebook: req.body.ebook,
			date: new Date()
		};

		Invoice.create(newInvoice, function (err, invoice) {

			if(err || !invoice) {
				res.send({err: 'invoice not created'}, 409);
				return;
			}

			
			res.send(invoice);
		});
	});
};

exports.get = function get(req, res, next) {
	console.log('Get Invoice ' + req.params.id);

	Invoice
		.findOne({
			_id: req.params.id,
			client: req.loggedClient._id
		})
		.populate('ebook')
		.exec(function (err, invoice) {

			if(req.loggedClient._id.toString() != invoice.client.toString()) {
				res.send({err: 'not authorized'}, 403)
			}

			res.send(invoice);
		});
};

exports.download = function download(req, res, next) {
	console.log('Download Ebook from Invoice ' + req.params.id);

	Invoice
		.findOne({
			_id: req.params.id,
			client: req.loggedClient._id
		})
		.populate('ebook')
		.exec(function (err, invoice) {

			if(req.loggedClient._id.toString() != invoice.client.toString()) {
				res.send({err: 'not authorized'}, 403)
			}

			var signedUrl = urlSigner.getUrl('GET', invoice.ebook.filename, invoice.ebook.bucket, 5);

			res.redirect(signedUrl);
		});
};