// http://howtonode.org/prototypical-inheritance

function Person(name) {
  this.myNameIs = name
}
Person.prototype = {
  greet: function () {
    return "Hello world, my name is " + this.myNameIs;
  }
};

exports = module.exports = Person;
