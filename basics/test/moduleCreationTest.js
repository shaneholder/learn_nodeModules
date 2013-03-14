var should = require('should'),
	Sut = require('../createModule');

describe('given that we need multiple instances of a module', function () {
  it('should be able to provide them using new', function () {
    var mod1 = new Sut(),
    	mod2 = new Sut();

    	var ret1 = mod1.incrementValue();
    	ret1.should.equal(1);

    	var ret2 = mod2.incrementValue();
    	ret2.should.equal(1);
  });


  it('should be able to provide them using factory', function () {
    
  });

});

describe('given that we pluck a function from a module', function () {
  it('should retain scoping', function () {
  	var mod1 = new Sut(),
  		anObj = {};

  		anObj.incVal = mod1.incrementValue;

  		var ret1 = mod1.incrementValue();
  		var ret2 = anObj.incVal();

  		ret1.should.equal(1);
  		ret2.should.equal(2);
  });
});
