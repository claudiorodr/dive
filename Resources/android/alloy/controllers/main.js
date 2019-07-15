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
	this.__controllerPath = 'main';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	var __alloyId0 = [];$.__views.__alloyId1 = Alloy.createController('survey', { id: "__alloyId1", __parentSymbol: __parentSymbol });
	__alloyId0.push($.__views.__alloyId1.getViewEx({ recurse: true }));$.__views.__alloyId2 = Alloy.createController('sites', { id: "__alloyId2", __parentSymbol: __parentSymbol });
	__alloyId0.push($.__views.__alloyId2.getViewEx({ recurse: true }));$.__views.__alloyId3 = Alloy.createController('gallery', { id: "__alloyId3", __parentSymbol: __parentSymbol });
	__alloyId0.push($.__views.__alloyId3.getViewEx({ recurse: true }));$.__views.speciesWin = Ti.UI.createTabGroup(
	{ color: "#FF0000", backgroundColor: "#D50000", tabs: __alloyId0, id: "speciesWin" });

	function __alloyId4() {
		$.__views.speciesWin.removeEventListener('open', __alloyId4);
		if ($.__views.speciesWin.activity) {

		} else {
			Ti.API.warn('You attempted to access an Activity on a lightweight Window or other');
			Ti.API.warn('UI component which does not have an Android activity. Android Activities');
			Ti.API.warn('are valid with only windows in TabGroups or heavyweight Windows.');
		}
	}
	$.__views.speciesWin.addEventListener('open', __alloyId4);
	$.__views.speciesWin && $.addTopLevelView($.__views.speciesWin);
	exports.destroy = function () {};




	_.extend($, $.__views);






	var args = $.args;









	_.extend($, exports);
}

module.exports = Controller;