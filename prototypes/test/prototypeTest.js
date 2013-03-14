var should = require('should'),
	Sut = require('../Person'),
	Sut2 = require('../ObjectCreatePerson'),
	util = require('util');


describe('given that we want to control memory usage', function () {
  it('we should use prototypes', function () {
  	// Note, new is not recommended as per: http://javascript.crockford.com/prototypal.html
  	// but is included here for completeness, use the 
    var personA = new Sut("Shane"),
    	personB = new Sut("Holder");

    personA.greet().should.equal("Hello world, my name is Shane");
    personB.greet().should.equal("Hello world, my name is Holder");
  });
});

describe('given we have an object to inherit from', function () {
  it('we inherit its methods', function () {
    var personA = Object.create(Sut2, {myNameIs: {value: "Shane"}}),
    	personB = Object.create(Sut2, {myNameIs: {value: "Holder"}});

    personA.greet().should.equal("Hello world, my name is Shane");
    personB.greet().should.equal("Hello world, my name is Holder");
  });
});

describe('given we have an object to inherit from', function () {
  it('all objects created inherit from same object', function () {
    var personA = Object.create(Sut2, {myNameIs: {value: "Shane", enumerable: true}}),
    	personB = Object.create(Sut2, {myNameIs: {value: "Holder"}});

    	Sut2.newMethod = function () {
    		return 'xyzzy';
    	};

    personA.newMethod().should.equal("xyzzy");
    personB.newMethod().should.equal("xyzzy");

//    console.log(personA.myNameIs);

    // console.log(util.inspect(personA, true, 3, true));
    // console.log(util.inspect(personB, true, 3, true));
    // console.log(util.inspect(Sut2, true, 3, true));
  });
});