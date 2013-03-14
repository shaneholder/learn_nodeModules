var should = require('should'),
	sut = require('../ProtoInitializer')({defaulter: 3});

describe('given I need a module initialized', function () {
  it('it should accept an initializer', function () {
  	console.dir(sut);
  	var myObj = Object.create(sut);
  	myObj.incPrivate().should.equal(1);
  	myObj.incDefaulter().should.equal(4);  
  });
});
