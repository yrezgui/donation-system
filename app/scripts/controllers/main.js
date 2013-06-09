'use strict';

angular.module('floussApp')
	.controller('MainCtrl', function MainCtrl($scope, flash) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
		
		$scope.$on('$routeChangeSuccess', function () {
			$scope.alerts = flash.getAll();
		});
	});
