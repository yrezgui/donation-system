'use strict';

describe('Controller: EbookDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('floussApp'));

  var EbookDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EbookDetailCtrl = $controller('EbookDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
