'use strict';

angular.module('floussApp')
	.controller('InvoiceDetailCtrl', ['$scope', 'Restangular', '$routeParams', 'auth', function InvoiceDetailCtrl($scope, Restangular, $routeParams, auth) {
		
		$scope.auth = auth;

		Restangular.one('invoice', $routeParams.id).get().then(
			function success(resource) {
				$scope.invoice = resource;
			},

			function error() {
				$scope.$emit('page:notFound');
			}
		);
	}]);
