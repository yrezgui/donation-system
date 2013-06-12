'use strict';

angular.module('floussApp')
	.controller('AccountCtrl', ['$scope', 'auth', 'Restangular', function AccountCtrl($scope, auth, Restangular) {
		
		$scope.client = Restangular.one('client', auth.getId()).get();
	}]);
