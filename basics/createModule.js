// If multiple instances of a module are called for
// there are two patterns to use
// directly use the javascript new
// or a factory.


var Class = function () {
	var self = this;
	// Expect that this variable is per instance of a class.
	var val = 0;

	function incrementValue() {
		val = val + 1;
		return val;
	}

	self.incrementValue = incrementValue;
}

exports = module.exports = Class;
