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
	this.__controllerPath = 'loading';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.loading = Ti.UI.createWindow(
	{ backgroundColor: "white", id: "loading" });

	$.__views.loading && $.addTopLevelView($.__views.loading);
	$.__views.clicks = Ti.UI.createView(
	{ width: "40%", height: "40%", id: "clicks" });

	$.__views.loading.add($.__views.clicks);
	$.__views.clicksMoans = Ti.UI.createView(
	{ width: "40%", height: "40%", id: "clicksMoans" });

	$.__views.loading.add($.__views.clicksMoans);
	$.__views.moans = Ti.UI.createView(
	{ width: "40%", height: "40%", id: "moans" });

	$.__views.loading.add($.__views.moans);
	$.__views.moansWhistles = Ti.UI.createView(
	{ width: "40%", height: "40%", id: "moansWhistles" });

	$.__views.loading.add($.__views.moansWhistles);
	$.__views.whistles = Ti.UI.createView(
	{ width: "40%", height: "40%", id: "whistles" });

	$.__views.loading.add($.__views.whistles);
	exports.destroy = function () {};




	_.extend($, $.__views);


	var args = $.args;
	var animation = require('animation');

	function animate() {
		animation.make($.clicks, $.clicksMoans, $.moans, $.moansWhistles, $.whistles);

		setTimeout(function () {
			animation.remove();
			animation = null;
			closeLoading();
		}, 3000);
	}

	function closeLoading() {
		$.loading.close();
	}

	setTimeout(function () {
		animate();
	}, 3000);









	_.extend($, exports);
}

module.exports = Controller;