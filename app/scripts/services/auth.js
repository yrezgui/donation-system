'use strict';

angular.module('floussApp')
	.factory('auth', ['$cookieStore', function auth($cookieStore) {
		var user = null;
		// It sets the current logged user with the info
		user = $cookieStore.get('user');

		// Public API here
		return {
			// Called when the user log in
			login: function login(user) {
				user = user;
				$cookieStore.put('user', user);
			},
			// Return the current logged user
			getUser: function getUser() {
				return user;
			},
			// Return the current token of the user
			getToken: function getToken() {
				return user ? user.token : null;
			},
			// Remove the user cookie and set to null the current user object
			logout: function logout() {
				$cookieStore.remove('user');
				user = null;
			}
		};
	}]);
