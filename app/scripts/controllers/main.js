'use strict';

angular.module('floussApp')
	.controller('MainCtrl', ['$scope', 'flash', 'auth', '$location', function MainCtrl($scope, flash, auth, $location) {

		$scope.connected = auth.isConnected();

		$scope.$on('$routeChangeSuccess', function () {
			// Flush the current flash messages list and replace it with the new one
			$scope.messages = flash.getAll();
		});

		// Receive this event when a 401 HTTP error code is catched from the API
		$scope.$on('auth:loginRequired', function() {
			// Remove current session
			auth.logout();
			// Redirect the user to login page
			$scope.$apply(function() {
				$location.url('/login');
			});
		});
	}]);
