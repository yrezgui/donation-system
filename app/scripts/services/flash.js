'use strict';

angular.module('floussApp')
	.factory('flash', ['$scope', function ($scope) {
		// Storage of the messages
		var actualFlashMessages	= [];
		var nextFlashMessages	= [];

		// Public API here
		return {
			// Add a flash message for the next page
			add: function (index, msg) {
				nextFlashMessages[index] = msg;
			},
			// Remove a flash message for the next page
			remove: function(index) {
				delete nextFlashMessages[index];
			},
			// Get a flash message for the actual page
			get: function(index) {
				return actualFlashMessages[index];
			},
			// Get all flash messages for the actual page
			getAll: function() {
				return actualFlashMessages;
			},
			// Remove all flash messages for the next page
			flush: function(index, msg) {
				nextFlashMessages = [];
			},
			// Add one more page lifetime for a flash message
			renew: function(index) {
				nextFlashMessages[index] = actualFlashMessages[index];
			},
			// Update the actual flash messages for the new page, just loaded
			changePage: function() {
				actualFlashMessages = nextFlashMessages;
				nextFlashMessages = [];
			}
		};
	}]);
