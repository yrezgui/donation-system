'use strict';

angular.module('floussApp')
	.controller('EbooksCtrl', ['$scope', 'Restangular', function EbooksCtrl($scope, Restangular) {
		$scope.ebooks = Restangular.all('ebook').getList();
	}]);
