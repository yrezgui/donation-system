'use strict';

angular.module('floussApp')
	.controller('MainCtrl', ['$scope', 'flash', 'auth', '$location', '$route', 'config', function MainCtrl($scope, flash, auth, $location, $route, config) {

		var safeApply = function safeApply(fn) {
			($scope.$$phase || $scope.$root.$$phase) ? fn() : $scope.$apply(fn);
		};

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
			safeApply(function() {
				$location.url('/login');
			});
		});

		Pusher.log = function(message) {
	    	if (window.console && window.console.log)
	    		window.console.log(message);
	    };

	    $scope.notifications = [];

	    var pusher = new Pusher(config.get('pusher_key'));
	    var channel = pusher.subscribe(config.get('pusher_channel'));

	    channel.bind('purchase', function(data) {
	    	console.log(data);
	    	$scope.notifications.push(data);
	    });
	}]);
