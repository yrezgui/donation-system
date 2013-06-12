'use strict';

angular.module('floussApp')
	.controller('LoginCtrl', ['$scope', 'auth', 'flash', 'Client', '$location', '$route', function LoginCtrl($scope, auth, flash, Client, $location, $route) {

		$scope.processLogin = function processLogin() {
			
			Client.login({}, $scope.form,
				function success(client) {

					console.log('success', client);

					auth.setUser(client);

					flash.add('login-success', {
						type: 'info',
						title: 'Hello back !',
						content: 'We\'re happy to see you again.'
					});

					$location.url('/account');
				},

				function error(response) {
					console.log('error', response);

					flash.add('login-error', {
						type: 'error',
						title: 'Error !',
						content: 'The email and/or password are incorrect.'
					});

					$route.reload();
				}
			);
		};
	}]);
