'use strict';

angular.module('floussApp')
	.controller('EbookDetailCtrl', ['$scope', 'Restangular', '$routeParams', 'auth', 'flash', '$route', '$location', function EbookDetailCtrl($scope, Restangular, $routeParams, auth, flash, $route, $location) {

		var safeApply = function safeApply(fn) {
			($scope.$$phase || $scope.$root.$$phase) ? fn() : $scope.$apply(fn);
		};

		Restangular.one('ebook', $routeParams.id).get().then(
			function success(resource) {

				$scope.ebook = resource;

				$scope.spriteSettings = {
					price: $scope.ebook.price,
					name: $scope.ebook.title,
					description: $scope.ebook.description
				};
			},

			function error() {
				$scope.$emit('page:notFound');
			}
		);

		Restangular.one('ebook', $routeParams.id).get().then(
			function success(resource) {
				$scope.ebook = resource;
			},

			function error() {
				$scope.$emit('page:notFound');
			}
		);

		$scope.makePayment = function makePayment(token) {
			safeApply(function() {
				$scope.wait = true;
			});

			console.log(token);

			var newInvoice = {
				stripe_token: token.id,
				client: auth.getId(),
				ebook: $routeParams.id,
				amount: $scope.ebook.price.toString().replace('.', ''),
				ebookTitle: $scope.ebook.title
			};

			Restangular.all('invoice').post(newInvoice).then(
				function success(resource) {
					console.log('Object saved OK', resource);

					flash.add('payment-success', {
						type: 'success',
						title: 'Success !',
						content: 'The payment success. You can now download the ebook by clicking the button in the bottom right.'
					});

					safeApply(function() {
						$scope.wait = false;
						$location.url('/invoice/' + resource._id);
					});
				},

				function error() {
					console.log('There was an error saving');

					flash.add('payment-error', {
						type: 'error',
						title: 'Error !',
						content: 'The payment failed. Please enter correct information and retry.'
					});

					safeApply(function() {
						$scope.wait = true;
						$route.reload();
					});
				}
			);
		};
	}]);
