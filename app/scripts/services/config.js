'use strict';

angular.module('floussApp')
	.factory('config', ['environment' function config(environment) {
		
		var _defaultEnvironment = 'development'

		var _config = {
			development: {
				// Stripe API Public Key
				'stripe_public_key': 'sk_test_ipa4kMC448IGKGzaypeScbUg'
			}
		};

		// Public API here
		return {
			get: function get(index) {
				return _config[environment][index] || null;
			}
		};
	}]);
