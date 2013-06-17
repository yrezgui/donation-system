'use strict';

angular.module('floussApp')
	.directive('notification', function () {
		return {
			scope: {
				title: '@',
				message: '@'
			},
			template:
				'<div class="tooltip-inner notification">' +
					'<b>{{title}}</b>' +
					'<br>' +
					'<small>{{message}}</small>' +
				'</div>'
			,
			restrict: 'A',
			link: function postLink(scope, element, attrs) {

				setTimeout(function () {

					element.transition(
						{
							opacity: 0
						},
						1000,
						function () {
							$(this).remove();
						}
					);
				}, 5000);
			}
		};
	});
