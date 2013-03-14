var sut = require('../basicModule.js'),
	sut1 = require('./singletonTestModule1'),
	sut2 = require('./singletonTestModule2'),
	should = require('should');

describe('when loading a module', function () {
	it ('should expose functionality', function () {
		var ret = sut.basicFunction();
		ret.should.equal('hello basic Function');
	});
});

describe('when loading a module', function () {
  it('should be a singleton', function () {
  	var firstVal = sut1.incrementValue();
  	firstVal.should.equal(1);
  	var secondVal = sut2.incrementValue();
  	secondVal.should.equal(2);    
  });
});
