'use strict';

angular.module('floussApp')
	.controller('InvoicesCtrl', ['$scope', 'auth', 'Restangular', function InvoicesCtrl($scope, auth, Restangular) {
		
		$scope.ebooks = Restangular.all('invoices').getList();
	}]);
