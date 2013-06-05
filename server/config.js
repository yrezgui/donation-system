var config = require('config-env').define('NODE_ENV', function (config) {
	config.common({
		name: 'flouss'
	});

	config.config('development', {
		mongo_uri : 'mongodb://localhost/flouss'
	});

	config.config('production', {
		mongo_uri : process.env.MONGOLAB_URI || process.env.MONGOHQ_URL
	});
});