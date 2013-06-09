'use strict';

angular.module('floussApp')
	.controller('MainCtrl', function ($scope, flash) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.alerts = flash.getAll();
		
		$scope.$on('$routeChangeSuccess', function () {
			$scope.alerts = flash.getAll();
		});
	});
