'use strict';

angular.module('floussApp')
	.controller('SignupCtrl', ['$scope', function SignupCtrl($scope) {

		$scope.processSignup = function processSignup() {
			console.log($scope.form);
		};
	}]);
