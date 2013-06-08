var client = require('./controllers/api/client.js');

// Application back end routing
module.exports = function(parent){

	// Client entity API
	parent.get('/api/client/', client.query);
	parent.get('/api/client/:id', client.get);
	parent.post('/api/client/', client.create);
	parent.put('/api/client/:id', client.save);
	parent.delete('/api/client/:id', client.remove);
};