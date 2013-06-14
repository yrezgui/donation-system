'use strict';

describe('Directive: spritePurchase', function () {
  beforeEach(module('floussApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<sprite-purchase></sprite-purchase>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the spritePurchase directive');
  }));
});
