var Ebook = require('../../models/ebook.js');

exports.query = function query(req, res, next) {
	console.log('Query Ebooks');

	Ebook.find().select('-bucket').exec(function (err, ebooks) {
		
		if(err) {
			res.send({err: 'server error'}, 500);
			return;
		}
	
		res.send(ebooks);
	});
};

exports.get = function get(req, res, next) {
	console.log('Get Ebook ' + req.params.id);

	Ebook.findOne({_id: req.params.id}, function (err, ebook) {

		if(err || !ebook) {
			res.send({err: 'ebook not exist'}, 404);
			return;
		}
	
		res.send(ebook.getPublic());
	});
};
