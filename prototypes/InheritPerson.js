var Person = require('./Person');

function Me () {
	var me = Object.create(Person);

	return me;
}