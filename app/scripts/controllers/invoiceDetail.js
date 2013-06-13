'use strict';

angular.module('floussApp')
	.controller('InvoiceDetailCtrl', ['$scope', 'Restangular', '$routeParams', function InvoiceDetailCtrl($scope) {
		$scope.invoice = Restangular.one('invoice', $routeParams.id);
	}]);
