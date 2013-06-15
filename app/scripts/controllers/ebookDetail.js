'use strict';

angular.module('floussApp')
	.controller('EbookDetailCtrl', ['$scope', 'Restangular', '$routeParams', function EbookDetailCtrl($scope, Restangular, $routeParams) {

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
			console.log(token);
			$scope.$digest();
			$scope.wait = true;
		};

		$scope.wait = false;
	}]);
