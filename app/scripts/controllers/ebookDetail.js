'use strict';

angular.module('floussApp')
	.controller('EbookDetailCtrl', ['$scope', 'Restangular', '$routeParams', function EbookDetailCtrl($scope, Restangular, $routeParams) {
		$scope.ebook = Restangular.one('ebook', $routeParams.id).get();

		$scope.isQuantityValid = function isQuantityValid() {
			return parseInt($scope.quantity) > 0;
		};
	}]);
