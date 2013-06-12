'use strict';

angular.module('floussApp')
	.controller('AccountCtrl', ['$scope', 'Client', 'auth', function AccountCtrl($scope, Client, auth) {
		console.log(auth.getUser());
		
		Client.get({id: auth.getId()},
			function success(client) {

				$scope.client = client;
			},

			function error(response) {
				console.log('error', response);

				//$scope.$emit('auth:loginRequired');
			}
		);
	}]);
