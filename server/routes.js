var clientModel	= require('./models/client.js');

var client	= require('./controllers/api/client.js');
var ebook	= require('./controllers/api/ebook.js');
var invoice	= require('./controllers/api/invoice.js');

// Application back end routing
module.exports = function(parent){

	// Middleware of authentification. Get automatically the logged client
	parent.all('/api/*', function(req, res, next){
		clientModel.findOne({token: req.query.token}, function(err, loggedClient){

			req.loggedClient = {};

			if(!err && loggedClient) {
				req.loggedClient = loggedClient;
			}

			next();
		});
	});

	// Client entity API
	parent.post('/api/client', client.create);
	parent.get('/api/client/:id', client.get);
	parent.put('/api/client/:id', client.save);

	parent.post('/api/client/login', client.login);

	// Ebook entity API
	parent.get('/api/ebook', ebook.query);
	parent.get('/api/ebook/:id', ebook.get);

	// Invoice entity API
	parent.get('/api/invoice', invoice.query);
	parent.post('/api/invoice', invoice.create);
	parent.get('/api/invoice/:id', invoice.get);
	parent.get('/api/invoice/:id/download', invoice.download);
};