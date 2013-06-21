'use strict';

angular.module('floussApp', ['ngCookies', 'ngResource', 'restangular', 'floussServices'])
	.config(['$routeProvider', '$httpProvider', 'RestangularProvider', function floussApp($routeProvider, $httpProvider, RestangularProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/index.html',
				controller: 'PageCtrl'
			})
			.when('/login', {
				templateUrl: 'views/login.html',
				controller: 'LoginCtrl'
			})
			.when('/signup', {
				templateUrl: 'views/signup.html',
				controller: 'SignupCtrl'
			})
			.when('/account', {
				templateUrl: 'views/account.html',
				controller: 'AccountCtrl'
			})
			.when('/invoices', {
				templateUrl: 'views/invoices.html',
				controller: 'InvoicesCtrl'
			})
			.when('/invoice/:id', {
				templateUrl: 'views/invoiceDetail.html',
				controller: 'InvoiceDetailCtrl'
			})
			.when('/ebooks', {
				templateUrl: 'views/ebooks.html',
				controller: 'EbooksCtrl'
			})
			.when('/ebook/:id', {
				templateUrl: 'views/ebookDetail.html',
				controller: 'EbookDetailCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});

		var auth = angular.injector(['floussServices']).get('auth');
		console.log('app', auth, auth.getToken());

		RestangularProvider.setBaseUrl('/api');
		
		RestangularProvider.setRestangularFields({
			id: '_id'
		});

		RestangularProvider.setDefaultRequestParams({
			token: auth.getToken()
		});

		$httpProvider.responseInterceptors.push(function authHttpMiddleware($q, $rootScope){

			var success = function success(response) {
				if(response.config.url == '/api/client/login') {
					RestangularProvider.setDefaultRequestParams({
						token: response.data.token
					});	
				}

				return response;
			};
		
			var error = function error(response) {
				
				switch(response.status) {
					case 401:

						if(response.config.url !== '/api/client/login') {
							$rootScope.$broadcast('auth:loginRequired');
						}

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
      
		RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
			
			console.log(elem, operation, what);

			if (operation === 'put' || operation === 'post') {
				delete elem._id;
				return elem;
			}

			return elem;
		});
	}]);
