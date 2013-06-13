'use strict';

describe('Controller: InvoiceDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('floussApp'));

  var InvoiceDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvoiceDetailCtrl = $controller('InvoiceDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
