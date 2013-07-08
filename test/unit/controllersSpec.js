'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function(){

  var ctrl, scope;

  beforeEach(module('myApp.controllers'));

  describe('ShowreelCtrl', function(){

	  beforeEach(inject(function ($rootScope, $controller) {
	    scope = $rootScope.$new();
	    ctrl = $controller('ShowreelCtrl', {$scope: scope});
	  }));

	  it("should create showreels model with 3 showreels", function () {
	    expect(scope.showreels.length).toBe(3);
	  });

	  it('should set the default value of orderProp model', function() {
        expect(scope.orderProp).toBe('date');
      });

  });

});