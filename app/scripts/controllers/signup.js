'use strict';

angular.module('floussApp')
	.controller('SignupCtrl', function SignupCtrl($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.processSignup = function processSignup() {
			alert('valid');
			console.log($scope.form);
		};
	});
