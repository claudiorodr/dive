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

  // Generated code that must be executed before all UI and/or
  // controller code. One example is all model and collection
  // declarations from markup.


  // Generated UI code
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
  $.__views.sign_out = Ti.UI.createButton(
  { left: "9%", top: "5%", width: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 24 }, color: "white", title: "SIGN OUT", backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, height: 50, id: "sign_out" });

  $.__views.scrollView.add($.__views.sign_out);
  sign_out ? $.addListener($.__views.sign_out, 'click', sign_out) : __defers['$.__views.sign_out!click!sign_out'] = true;$.__views.surveyTab = Ti.UI.createTab(
  { window: $.__views.register, id: "surveyTab", title: "Profile", titleColor: "white" });

  $.__views.surveyTab && $.addTopLevelView($.__views.surveyTab);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  // Arguments passed into this controller can be accessed via the `$.args` object directly or:
  var args = $.args;

  function sign_out() {
    Ti.App.Properties.removeProperty("user");
    var login = Alloy.createController('index').getView();
    login.open();
    login = null;
  }

  var l = Titanium.UI.createLabel({
    text: 'Email:',
    font: {
      fontFamily: 'Raleway-Bold',
      fontSize: 14 },

    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.common.add(l);

  var ll = Titanium.UI.createLabel({
    text: 'Name:',
    font: {
      fontFamily: 'Raleway-Bold',
      fontSize: 14 },

    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.science.add(ll);

  var lll = Titanium.UI.createLabel({
    text: 'Country:',
    font: {
      fontFamily: 'Raleway-Bold',
      fontSize: 14 },

    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.description.add(lll);

  var a = Titanium.UI.createLabel({
    text: 'Gender:',
    font: {
      fontFamily: 'Raleway-Bold',
      fontSize: 14 },

    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.conserv.add(a);

  var aa = Titanium.UI.createLabel({
    text: 'Birthday:',
    font: {
      fontFamily: 'Raleway-Bold',
      fontSize: 14 },

    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.size.add(aa);

  var aaa = Titanium.UI.createLabel({
    text: 'Points:',
    font: {
      fontFamily: 'Raleway-Bold',
      fontSize: 14 },

    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.curiosity.add(aaa);
  /*   
                                                              Ti.App.Properties.setObject('points', e.user.points);
                                                              Ti.App.Properties.setObject('phone', e.user.phone);
                                                              Ti.App.Properties.setObject('note', e.user.note);
                                                              Ti.App.Properties.setObject('level', e.user.level);
                                                              Ti.App.Properties.setObject('name', e.user.userable.user.name);
                                                              Ti.App.Properties.setObject('gender', e.user.userable.user.gender);
                                                              Ti.App.Properties.setObject('country', e.user.userable.user.country);
                                                              Ti.App.Properties.setObject('b_day', e.user.userable.user.b_day);
                                                              
                                                              */

  var ta1 = Titanium.UI.createTextField({
    left: "9%",
    width: "70%",
    textAlign: "center",
    font: {
      fontFamily: 'Raleway-Light',
      fontSize: '16' },

    color: "#0099ff",
    hintTextColor: "gray",
    backgroundColor: "#EEEEEE",
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    borderColor: "#0099ff",
    borderRadius: 6,
    height: 50,
    hintText: Ti.App.Properties.getObject('email'),
    editable: false });


  $.common.add(ta1);

  var ta2 = Titanium.UI.createTextField({
    left: "9%",
    width: "70%",
    textAlign: "center",
    font: {
      fontFamily: 'Raleway-Light',
      fontSize: '16' },

    color: "#0099ff",
    hintTextColor: "gray",
    backgroundColor: "#EEEEEE",
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    borderColor: "#0099ff",
    borderRadius: 6,
    height: 50,
    hintText: Ti.App.Properties.getObject('name'),
    editable: false });


  $.science.add(ta2);

  var country = Ti.App.Properties.getObject('country').charAt(0).toUpperCase() + Ti.App.Properties.getObject('country').slice(1);

  var ta3 = Titanium.UI.createTextField({
    left: "9%",
    width: "70%",
    textAlign: "center",
    font: {
      fontFamily: 'Raleway-Light',
      fontSize: '16' },

    color: "#0099ff",
    hintTextColor: "gray",
    backgroundColor: "#EEEEEE",
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    borderColor: "#0099ff",
    borderRadius: 6,
    height: 50,
    hintText: country,
    editable: false });


  $.description.add(ta3);

  var gender;

  if (Ti.App.Properties.getObject('gender') == 'm') {
    gender = "Masculine";
  } else {
    gender = "Feminine";
  }

  var ta4 = Titanium.UI.createTextField({
    left: "9%",
    width: "70%",
    textAlign: "center",
    font: {
      fontFamily: 'Raleway-Light',
      fontSize: '16' },

    color: "#0099ff",
    hintTextColor: "gray",
    backgroundColor: "#EEEEEE",
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    borderColor: "#0099ff",
    borderRadius: 6,
    height: 50,
    hintText: gender,
    editable: false });


  $.conserv.add(ta4);

  var ta5 = Titanium.UI.createTextField({
    left: "9%",
    width: "70%",
    textAlign: "center",
    font: {
      fontFamily: 'Raleway-Light',
      fontSize: '16' },

    color: "#0099ff",
    hintTextColor: "gray",
    backgroundColor: "#EEEEEE",
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    borderColor: "#0099ff",
    borderRadius: 6,
    height: 50,
    hintText: Ti.App.Properties.getObject('b_day'),
    editable: false });


  $.size.add(ta5);

  var ta6 = Titanium.UI.createTextField({
    left: "9%",
    width: "70%",
    textAlign: "center",
    font: {
      fontFamily: 'Raleway-Light',
      fontSize: '16' },

    color: "#0099ff",
    hintTextColor: "gray",
    backgroundColor: "#EEEEEE",
    borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    borderColor: "#0099ff",
    borderRadius: 6,
    height: 50,
    hintText: Ti.App.Properties.getObject('points'),
    editable: false });


  $.curiosity.add(ta6);

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views.sign_out!click!sign_out'] && $.addListener($.__views.sign_out, 'click', sign_out);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file://C:\Users\claud\Documents\dive/build/map/Resources\android\alloy\controllers\profile.js.map