'use strict';

describe('Controller: CiberaryCtrl', function () {

  // load the controller's module
  beforeEach(module('cdu2015App'));

  var CiberaryCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CiberaryCtrl = $controller('CiberaryCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
