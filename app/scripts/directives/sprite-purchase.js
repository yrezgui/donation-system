'use strict';

angular.module('floussApp')
	.directive('spritePurchase', ['config', 'auth', function spritePurchase(config, auth) {
		return {
			restrict: 'EAC',
			scope: {
				settings: '=spritePurchase',
				token: '=',
				callback: '&'
			},
			link: function ($scope, element, attrs) {
				element.on('click', function click() {

					if(!auth.isConnected()) {
						$scope.$emit('auth:loginRequired');
						return;
					}

					StripeCheckout.open({
						key: config.get('stripe_public_key'),
						address: false,
						amount: $scope.settings.price.toString().replace('.', ''),
						currency: config.get('stripe_currency'),
						name: $scope.settings.name,
						description: $scope.settings.description,
						panelLabel: config.get('stripe_button_label'),
						token: function token(res) {
							$scope.callback({token: res});
						}
					});

					return false;
				});
			}
		};
	}]);