'use strict';

angular.module('floussApp')
	.controller('AccountCtrl', ['$scope', 'auth', 'Restangular', function AccountCtrl($scope, auth, Restangular) {
		
		var original = null;

		Restangular.one('client', auth.getId()).get().then(function(resource) {
			original = resource;
			$scope.client = Restangular.copy(original);
		});

		$scope.isClean = function isClean() {
			return angular.equals(original, $scope.client);
		};

		$scope.processEdit = function processEdit() {
			$scope.client.put();
		};
	}]);
