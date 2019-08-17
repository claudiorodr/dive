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
	this.__controllerPath = 'profile';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.register = Ti.UI.createWindow(
	{ backgroundColor: "white", navBarHidden: true, tabBarHidden: true, fullscreen: true, orientationModes: [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT], id: "register" });

	$.__views.indexContainer = Ti.UI.createView(
	{ id: "indexContainer" });

	$.__views.register.add($.__views.indexContainer);
	$.__views.header = Ti.UI.createView(
	{ backgroundColor: "#f8f8f8", width: "50%", height: "100%", left: 0, id: "header" });

	$.__views.indexContainer.add($.__views.header);
	$.__views.logo = Ti.UI.createButton(
	{ height: 300, width: 300, backgroundImage: "/img/logo.png", id: "logo" });

	$.__views.header.add($.__views.logo);
	$.__views.create = Ti.UI.createLabel(
	{ top: "62%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 34 }, color: "#8a9093", text: L('create_account', "Wave"), id: "create" });

	$.__views.header.add($.__views.create);
	$.__views.body = Ti.UI.createView(
	{ layout: "vertical", width: "50%", right: 0, height: "100%", top: 20, id: "body" });

	$.__views.indexContainer.add($.__views.body);
	$.__views.body = Ti.UI.createView(
	{ layout: "vertical", width: "50%", right: 0, height: "100%", top: 20, id: "body" });

	$.__views.body.add($.__views.body);
	$.__views.scrollView = Ti.UI.createScrollView(
	{ id: "scrollView", showVerticalScrollIndicator: true, showHorizontalScrollIndicator: true, layout: "vertical" });

	$.__views.body.add($.__views.scrollView);
	$.__views.common = Ti.UI.createView(
	{ layout: "vertical", top: "5%", height: Titanium.UI.SIZE, id: "common" });

	$.__views.scrollView.add($.__views.common);
	$.__views.science = Ti.UI.createView(
	{ layout: "vertical", height: Titanium.UI.SIZE, top: "1%", id: "science" });

	$.__views.scrollView.add($.__views.science);
	$.__views.conserv = Ti.UI.createView(
	{ layout: "vertical", height: Titanium.UI.SIZE, top: "1%", id: "conserv" });

	$.__views.scrollView.add($.__views.conserv);
	$.__views.size = Ti.UI.createView(
	{ layout: "vertical", height: Titanium.UI.SIZE, top: "1%", id: "size" });

	$.__views.scrollView.add($.__views.size);
	$.__views.description = Ti.UI.createView(
	{ layout: "vertical", height: Titanium.UI.SIZE, top: "1%", id: "description" });

	$.__views.scrollView.add($.__views.description);
	$.__views.curiosity = Ti.UI.createView(
	{ layout: "vertical", height: Titanium.UI.SIZE, top: "1%", id: "curiosity" });

	$.__views.scrollView.add($.__views.curiosity);
	$.__views.label = Ti.UI.createLabel(
	{ id: "label" });

	$.__views.scrollView.add($.__views.label);
	$.__views.picker = Ti.UI.createPicker(
	{ id: "picker", selectionIndicator: true, useSpinner: false });

	$.__views.scrollView.add($.__views.picker);
	var __alloyId4 = [];$.__views.abundance = Ti.UI.createPickerColumn(
	{ id: "abundance" });

	__alloyId4.push($.__views.abundance);
	$.__views.picker.add(__alloyId4);
	$.__views.button = Ti.UI.createView(
	{ id: "button" });

	$.__views.scrollView.add($.__views.button);
	$.__views.moreBtn = Ti.UI.createButton(
	{ id: "moreBtn" });

	$.__views.button.add($.__views.moreBtn);
	openMore ? $.addListener($.__views.moreBtn, 'click', openMore) : __defers['$.__views.moreBtn!click!openMore'] = true;$.__views.endBtn = Ti.UI.createButton(
	{ id: "endBtn" });

	$.__views.button.add($.__views.endBtn);
	openMain ? $.addListener($.__views.endBtn, 'click', openMain) : __defers['$.__views.endBtn!click!openMain'] = true;$.__views.surveyTab = Ti.UI.createTab(
	{ window: $.__views.register, id: "surveyTab", title: "Profile", titleColor: "white" });

	$.__views.surveyTab && $.addTopLevelView($.__views.surveyTab);
	exports.destroy = function () {};




	_.extend($, $.__views);



	var args = $.args;

	var ta1 = Titanium.UI.createTextField({
		left: "9%",
		width: "70%",
		textAlign: "center",
		font: {
			fontFamily: 'Raleway-Light',
			fontSize: 14 },

		color: "#0099ff",
		hintTextColor: "gray",
		backgroundColor: "#EEEEEE",
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderColor: "#0099ff",
		borderRadius: 6,
		height: 'auto',
		hintText: Ti.App.Properties.getObject('id'),
		editable: false });



	$.common.add(ta1);





	__defers['$.__views.moreBtn!click!openMore'] && $.addListener($.__views.moreBtn, 'click', openMore);__defers['$.__views.endBtn!click!openMain'] && $.addListener($.__views.endBtn, 'click', openMain);



	_.extend($, exports);
}

module.exports = Controller;