'use strict';

describe('Service: awsService', function () {

  // load the service's module
  beforeEach(module('hcmBetaGruntApp'));

  // instantiate service
  var awsService;
  beforeEach(inject(function (_awsService_) {
    awsService = _awsService_;
  }));

  it('should do something', function () {
    expect(!!awsService).toBe(true);
  });

});
