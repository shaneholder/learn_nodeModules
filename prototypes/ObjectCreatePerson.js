// http://howtonode.org/prototypical-inheritance

var Person = {
	myNameIs: "",
	greet: function () {
    return "Hello world, my name is " + this.myNameIs;
	}
}

exports = module.exports = Person;



