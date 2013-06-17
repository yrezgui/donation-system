'use strict';

angular.module('floussApp')
	.controller('InvoicesCtrl', ['$scope', 'auth', 'Restangular', function InvoicesCtrl($scope, auth, Restangular) {
		$scope.client = auth.getUser();
		$scope.invoices = Restangular.all('invoice').getList();
	}]);
