'use strict';

angular.module('floussApp')
  .directive('spritePurchase', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the spritePurchase directive');
      }
    };
  });
