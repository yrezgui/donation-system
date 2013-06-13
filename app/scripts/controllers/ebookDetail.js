'use strict';

angular.module('floussApp')
	.controller('EbookDetailCtrl', ['$scope', 'Restangular', '$routeParams', function EbookDetailCtrl($scope, Restangular, $routeParams) {
		$scope.ebook = Restangular.one('ebook', $routeParams.id);
	}]);
