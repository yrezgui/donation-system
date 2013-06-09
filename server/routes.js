var client	= require('./controllers/api/client.js');
var file	= require('./controllers/api/file.js');
var invoice	= require('./controllers/api/invoice.js');

// Application back end routing
module.exports = function(parent){

	// Client entity API
	parent.get('/api/client/', client.query);
	parent.get('/api/client/:id', client.get);
	parent.post('/api/client/', client.create);
	parent.put('/api/client/:id', client.save);
	parent.delete('/api/client/:id', client.remove);

	// File entity API
	parent.get('/api/file/', file.query);
	parent.get('/api/file/:id', file.get);
	parent.post('/api/file/', file.create);
	parent.put('/api/file/:id', file.save);
	parent.delete('/api/file/:id', file.remove);

	// Invoice entity API
	parent.get('/api/invoice/', invoice.query);
	parent.get('/api/invoice/:id', invoice.get);
	parent.post('/api/invoice/', invoice.create);
	parent.put('/api/invoice/:id', invoice.save);
	parent.delete('/api/invoice/:id', invoice.remove);
};