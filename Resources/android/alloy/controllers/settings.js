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
	this.__controllerPath = 'settings';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.settingsWin = Ti.UI.createWindow(
	{ backgroundImage: "/img/images/mainback.jpg", exitOnClose: true, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, orientationModes: [], id: "settingsWin", title: "Settings" });

	$.__views.__alloyId10 = Ti.UI.createLabel(
	{ text: 'Settings', id: "__alloyId10" });

	$.__views.settingsWin.add($.__views.__alloyId10);
	$.__views.settingsTab = Ti.UI.createTab(
	{ window: $.__views.settingsWin, id: "settingsTab", title: "Settings" });

	$.__views.settingsTab && $.addTopLevelView($.__views.settingsTab);
	exports.destroy = function () {};




	_.extend($, $.__views);













	_.extend($, exports);
}

module.exports = Controller;