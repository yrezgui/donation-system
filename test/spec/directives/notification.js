'use strict';

describe('Directive: notification', function () {
  beforeEach(module('floussApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<notification></notification>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the notification directive');
  }));
});
