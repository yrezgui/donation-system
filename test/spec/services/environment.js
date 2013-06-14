'use strict';

describe('Service: environment', function () {

  // load the service's module
  beforeEach(module('floussApp'));

  // instantiate service
  var environment;
  beforeEach(inject(function (_environment_) {
    environment = _environment_;
  }));

  it('should do something', function () {
    expect(!!environment).toBe(true);
  });

});
