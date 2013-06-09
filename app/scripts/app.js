'use strict';

angular.module('floussApp', ['ngCookies', 'ngResource'])
	.config(['$routeProvider', '$httpProvider', function floussApp($routeProvider, $httpProvider) {
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
 
		$httpProvider.responseInterceptors.push(function authHttpMiddleware($q, $rootScope){

			var success = function success(response) {
				return response;
			};
		
			var error = function error(response) {
				switch(response.status) {
					case 401:
						$rootScope.$broadcast('auth:loginRequired');
						break;

					case 403:
						$rootScope.$broadcast('auth:forbidden');
						break;

					case 404:
						$rootScope.$broadcast('page:notFound');
						break;

					case 500:
						$rootScope.$broadcast('server:error');
						break;
				}

				return $q.reject(response);
			};
		
			return function(promise) {
				return promise.then(success, error)
			};
		
		});
	}]);
