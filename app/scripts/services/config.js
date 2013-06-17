'use strict';

angular.module('floussApp')
	.factory('config', ['environment', function config(environment) {
		
		var _defaultEnvironment = 'development'

		var _config = {
			development: {
				// Stripe API public key
				'stripe_public_key': 'STRIPE PUBLIC KEY',
				// Stripe default currency
				'stripe_currency': 'usd',
				// Stripe purchase button label
				'stripe_button_label': 'Checkout',
				// Pusher public key
				'pusher_key': 'PUSHER PUBLIC KEY',
				// Pusher purchases channel
				'pusher_channel': 'purchases'
			}
		};

		// Public API here
		return {
			get: function get(index) {
				return _config[environment][index] || null;
			}
		};
	}]);
