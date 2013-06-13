var client	= require('./controllers/api/client.js');
var ebook	= require('./controllers/api/ebook.js');
var invoice	= require('./controllers/api/invoice.js');

// Application back end routing
module.exports = function(parent){

	// Client entity API
	parent.get('/api/client', client.query);
	parent.post('/api/client', client.create);
	parent.get('/api/client/:id', client.get);
	parent.put('/api/client/:id', client.save);
	parent.delete('/api/client/:id', client.remove);

	parent.post('/api/client/login', client.login);

	// Ebook entity API
	parent.get('/api/ebook', ebook.query);
	parent.post('/api/ebook', ebook.create);
	parent.get('/api/ebook/:id', ebook.get);
	parent.put('/api/ebook/:id', ebook.save);
	parent.delete('/api/ebook/:id', ebook.remove);

	// Invoice entity API
	parent.get('/api/invoice', invoice.query);
	parent.post('/api/invoice', invoice.create);
	parent.get('/api/invoice/:id', invoice.get);
	parent.put('/api/invoice/:id', invoice.save);
	parent.delete('/api/invoice/:id', invoice.remove);
};