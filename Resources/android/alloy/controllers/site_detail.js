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
  this.__controllerPath = 'site_detail';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.site_detail = Ti.UI.createView(
  { id: "site_detail" });

  $.__views.site_detail && $.addTopLevelView($.__views.site_detail);
  exports.destroy = function () {};




  _.extend($, $.__views);



  var args = $.args;

  var l = Titanium.UI.createLabel({
    text: 'Dive spot name:',
    font: { fontSize: 14 },
    left: 10,
    top: 10,
    width: 'auto',
    height: 'auto' });


  $.image.add(l);

  var ll = Titanium.UI.createLabel({
    text: 'Maximum depth:',
    font: { fontSize: 14 },
    left: 10,
    top: 85,
    width: 'auto',
    height: 'auto' });


  $.image.add(ll);

  var lll = Titanium.UI.createLabel({
    text: 'Description:',
    font: { fontSize: 14 },
    left: 10,
    top: 160,
    width: 'auto',
    height: 'auto' });


  $.image.add(lll);

  var ta1 = Titanium.UI.createTextArea({
    value: 'bla bla',
    height: 35,
    width: 150,
    left: 10,
    top: 40,
    font: { fontSize: 14, fontFamily: 'Marker Felt', fontWeight: 'bold' },
    color: '#888',
    textAlign: 'left',
    borderWidth: 2,
    borderColor: '#bbb',
    borderRadius: 5,
    suppressReturn: false,
    editable: false });


  $.image.add(ta1);

  var ta2 = Titanium.UI.createTextArea({
    value: 'bla bla',
    height: 35,
    width: 150,
    left: 10,
    top: 115,
    font: { fontSize: 14, fontFamily: 'Marker Felt', fontWeight: 'bold' },
    color: '#888',
    textAlign: 'left',
    borderWidth: 2,
    borderColor: '#bbb',
    borderRadius: 5,
    suppressReturn: false,
    editable: false });


  $.image.add(ta2);

  var ta3 = Titanium.UI.createTextArea({
    value: 'bla bla',
    height: 35,
    width: 150,
    left: 10,
    top: 190,
    font: { fontSize: 14, fontFamily: 'Marker Felt', fontWeight: 'bold' },
    color: '#888',
    textAlign: 'left',
    borderWidth: 2,
    borderColor: '#bbb',
    borderRadius: 5,
    suppressReturn: false,
    editable: false });


  $.image.add(ta3);









  _.extend($, exports);
}

module.exports = Controller;