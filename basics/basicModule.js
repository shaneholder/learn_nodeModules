// The simplest module in Node JS
// Each module which imports this module will get the same
// instance of the module as NodeJs modules are by default
// singletons.

exports.basicFunction = function () {
	return 'hello basic Function';
}

var val = 0;

exports.incrementValue = function () {
	val = val + 1;
	return val;
}
