'use strict';

describe('Service: dynDbFact', function () {

  // load the service's module
  beforeEach(module('hcmBetaGruntApp'));

  // instantiate service
  var dynDbFact;
  beforeEach(inject(function (_dynDbFact_) {
    dynDbFact = _dynDbFact_;
  }));

  it('should do something', function () {
    expect(!!dynDbFact).toBe(true);
  });

});
