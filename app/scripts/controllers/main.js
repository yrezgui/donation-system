'use strict';

angular.module('floussApp')
	.controller('MainCtrl', ['$scope', 'flash', function MainCtrl($scope, flash) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		
		$scope.$on('$routeChangeSuccess', function () {
			$scope.alerts = flash.getAll();
		});

	}]);
