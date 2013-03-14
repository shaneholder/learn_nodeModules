
var ProtoInitializer = function (options) {
	var iAmPrivate = 0,
		defaulter = options.defaulter || 1;


	return {
		incPrivate: function () {
			iAmPrivate = iAmPrivate + 1;
			return iAmPrivate;
		},

		incDefaulter: function () {
			defaulter = defaulter + 1;
			return defaulter;
		}
	}
}

exports = module.exports = ProtoInitializer;