'use strict';

angular.module('floussApp')
	.controller('EbookDetailCtrl', ['$scope', 'Restangular', '$routeParams', 'auth', 'flash', '$route', function EbookDetailCtrl($scope, Restangular, $routeParams, auth, flash, $route) {

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

		$scope.makePayment = function makePayment(token) {
			$scope.wait = true;
			$scope.$digest();

			console.log(token);

			var newInvoice = {
				stripe_token: token.id,
				client: auth.getId(),
				file: $routeParams.id
			};

			Restangular.all('invoice').post(newInvoice).then(
				function success(resource) {
					console.log("Object saved OK", resource);
				},

				function error() {
					console.log("There was an error saving");

					flash.add('payment-error', {
						type: 'error',
						title: 'Error !',
						content: 'The payment failed. Please enter correct information and retry.'
					});

					$route.reload();
				}
			);


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
		};

		$scope.wait = false;
	}]);
