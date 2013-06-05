// MongoDB ORM package
var mongoose = require('mongoose');

// Application settings
var config = require('./config.js');

// database object
var db = null;

module.exports = function db() {
	if(!db) {
		db = mongoose.createConnection(config.param('mongo_uri'));
	}

	return db;
};