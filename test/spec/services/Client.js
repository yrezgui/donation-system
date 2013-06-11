'use strict';

describe('Service: Client', function () {

  // load the service's module
  beforeEach(module('floussApp'));

  // instantiate service
  var Client;
  beforeEach(inject(function (_Client_) {
    Client = _Client_;
  }));

  it('should do something', function () {
    expect(!!Client).toBe(true);
  });

});
