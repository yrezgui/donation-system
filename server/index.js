// Define a default environment
process.env['NODE_ENV'] = process.env['NODE_ENV'] || 'development';

// Web server packages
var express = require('express');

// Application settings
var config = require('./config.js');

// New instance express
var app = module.exports = express();

// MongoDB ORM package
var mongoose = require('mongoose');

// MongoDB DB instance
global.db = mongoose.createConnection(config.param('mongo_uri'));

/**
 * Connect middlewares configuration
 */

// map .renderFile to ".html" files
app.engine('html', require('ejs').renderFile);

// make ".html" the default
app.set('view engine', 'html');

// set views for error and 404 pages
app.set('views', __dirname + '/views');

// log
if (!module.parent) {
	app.use(express.logger('dev'));
}
	
// serve static files
app.use(express.static('../app'));

// session support
app.use(express.cookieParser());

// Parsing the session which is stored in the cookie
app.use(express.cookieSession({
	secret: config.param('cookie_secret'),
	cookie: {
		maxAge: config.param('cookie_maxage')
	}
}));

// parse request bodies (req.body)
app.use(express.bodyParser());

// support _method (PUT and DELETE in forms)
app.use(express.methodOverride());

// Activate Express router
app.use(app.router);

// load controllers
require('./routes')(app);

// assume "not found" in the error msgs
// is a 404. this is somewhat silly, but
// valid, you can do whatever you like, set
// properties, use instanceof etc.
app.use(function(err, req, res, next) {
	// treat as 404
	if (~err.message.indexOf('not found')) {
		return next();
	}

	// log it
	console.error(err.stack);

	// error page
	res.status(500).render('5xx');
});

// assume 404 since no middleware responded
app.use(function(req, res, next) {
	res.status(404).render('404', {
		url: req.originalUrl
	});
});

if (!module.parent) {
	var port = config.param('express_port');
	app.listen(port);
	console.log('\n  listening on port ' + port + '\n');
}

module.exports = app;