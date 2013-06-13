'use strict';

describe('Controller: EbooksCtrl', function () {

  // load the controller's module
  beforeEach(module('floussApp'));

  var EbooksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EbooksCtrl = $controller('EbooksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
