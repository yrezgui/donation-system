'use strict';

angular.module('floussApp', ['ngCookies', 'ngResource'])
	.config(function floussApp($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			})
			.when('/signup', {
				templateUrl: 'views/signup.html',
				controller: 'SignupCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
