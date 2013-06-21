'use strict';

angular.module('floussApp')
	.controller('SignupCtrl', ['$scope', 'Client', 'flash', '$location', '$route', function SignupCtrl($scope, Client, flash, $location, $route) {

		$scope.processSignup = function processSignup() {
			Client.save({}, $scope.form,
				function success(client) {

					console.log('success', client);

					flash.add('signup-success', {
						type: 'info',
						title: 'success !',
						content: 'We\'re happy to welcome you.'
					});

					$location.url('/login');
				},

				function error(response) {
					console.log('error', response);

					flash.add('signup-error', {
						type: 'error',
						title: 'Error !',
						content: 'The email is already used.'
					});

					$route.reload();
				}
			);
		};
	}]);
