'use strict';

angular.module('floussApp')
	.controller('LoginCtrl', function LoginCtrl($scope, flash) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.processLogin = function processLogin() {
			console.log($scope.form);
		};
	});
