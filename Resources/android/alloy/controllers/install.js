var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'install';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.install = Ti.UI.createView(
	{ id: "install" });

	$.__views.install && $.addTopLevelView($.__views.install);
	exports.destroy = function () {};




	_.extend($, $.__views);



	var args = $.args;
	function downloadImages(data) {
		console.log("DOWNLOAD IMAGES");
		console.log("STATUS " + data.status);
		console.log("METADATA " + data["metadata"]);

		var file = Ti.Filesystem.getFile(
		Ti.Filesystem.applicationDataDirectory,
		"imagenum.txt");

		if (!file.exists()) {
			file.write(" " + data["metadata"] + " ");
			var contents = file.read();
			console.log("- created file: " + file.getName() + " image number: " + contents.text);
			download.downloadMultiFile(data, 0, change);
		} else {
			var contents = file.read();
			console.log("CONTEUDO DO FICHEIRO DE IMAGENS " + contents.text);
			var parse = parseInt(contents.text);

			if (parse == data["metadata"]) {
				var data = { status: "NOT NEED FOR DOWNLOAD" };
				change(data);
			} else {
				file.write(" " + data["metadata"] + " ");
				var contents = file.read();
				console.log(
				"- created file: " + file.getName() + " image number: " + contents.text);

				download.downloadMultiFile(data, parse, change);
			}
		}
	}









	_.extend($, exports);
}

module.exports = Controller;