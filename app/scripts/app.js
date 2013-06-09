'use strict';

angular.module('floussApp', ['ngCookies', 'ngResource'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl'
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
