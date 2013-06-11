'use strict';

angular.module('floussApp')
	.factory('Client', ['$resource', 'auth', function ($resource, auth) {

		// Public API here
		return $resource('/api/client/:collectionAction:id/:instanceAction',
			{
				id: '@id',
				collectionAction: '@collectionAction',
				instanceAction: '@instanceAction'
			},
			{
				login: {
					method: 'POST',
					params: {
						collectionAction: 'login'
					}
				}
			}
		);
	}]);