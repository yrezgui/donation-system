'use strict';

angular.module('floussApp')
	.factory('flash', ['$scope', function ($scope) {
		// Storage of the messages
		var currentFlashMessages	= [];
		var nextFlashMessages		= [];

		// Public API here
		var instance = {
			// Add a flash message for the next page
			add: function (index, msg) {
				nextFlashMessages[index] = msg;
			},
			// Remove a flash message for the next page
			remove: function(index) {
				delete nextFlashMessages[index];
			},
			// Get a flash message for the current page
			get: function(index) {
				return currentFlashMessages[index];
			},
			// Get all flash messages for the current page
			getAll: function() {
				return currentFlashMessages;
			},
			// Remove all flash messages for the next page
			flush: function(index, msg) {
				nextFlashMessages = [];
			},
			// Add one more page lifetime for a flash message
			renew: function(index) {
				nextFlashMessages[index] = currentFlashMessages[index];
			},
			// Update the current flash messages for the new page, just loaded
			changePage: function() {
				currentFlashMessages = nextFlashMessages;
				nextFlashMessages = [];
			}
		};

		// Update the current flash messages with the old "next flash messages"
		$scope.$on('$routeChangeSuccess', function (scope, next, current) {
			instance.changePage();
		});

		return instance;
	}]);
