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
  this.__controllerPath = 'register';
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
  { backgroundColor: "white", id: "register" });

  $.__views.register && $.addTopLevelView($.__views.register);
  $.__views.indexContainer = Ti.UI.createView(
  { layout: "vertical", id: "indexContainer" });

  $.__views.register.add($.__views.indexContainer);
  $.__views.header = Ti.UI.createView(
  { layout: "vertical", height: "33.33%", top: 0, id: "header" });

  $.__views.indexContainer.add($.__views.header);
  $.__views.logo = Ti.UI.createButton(
  { top: "10%", height: 100, width: 100, backgroundImage: "/img/logo.png", id: "logo" });

  $.__views.header.add($.__views.logo);
  $.__views.create = Ti.UI.createLabel(
  { top: "5%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 18 }, color: "#000080", text: L('create_account', "Wave Dive"), id: "create" });

  $.__views.header.add($.__views.create);
  $.__views.reg_btn = Ti.UI.createLabel(
  { top: "5%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 24 }, color: "#000080", text: L('signup_text', "REGISTER"), id: "reg_btn" });

  $.__views.header.add($.__views.reg_btn);
  $.__views.body = Ti.UI.createView(
  { layout: "vertical", height: "66.66%", top: "0", id: "body" });

  $.__views.indexContainer.add($.__views.body);
  $.__views.scrollView = Ti.UI.createScrollView(
  { id: "scrollView", showVerticalScrollIndicator: true, showHorizontalScrollIndicator: true, layout: "vertical" });

  $.__views.body.add($.__views.scrollView);
  $.__views.email = Ti.UI.createTextField(
  { top: 0, width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#000080", borderRadius: 0, height: 50, keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, hintText: L('email_hintText', "EMAIL"), id: "email" });

  $.__views.scrollView.add($.__views.email);
  $.__views.password = Ti.UI.createTextField(
  { top: 0, width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#000080", borderRadius: 0, height: 50, keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, passwordMask: true, hintText: L('pass_hintText', "PASSWORD"), id: "password" });

  $.__views.scrollView.add($.__views.password);
  $.__views.pass_confirm = Ti.UI.createTextField(
  { top: 0, width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#000080", borderRadius: 0, height: 50, keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, passwordMask: true, hintText: L('pass_hintText', "CONFIRM PASSWORD"), id: "pass_confirm" });

  $.__views.scrollView.add($.__views.pass_confirm);
  $.__views.first_name = Ti.UI.createTextField(
  { top: 0, width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#000080", borderRadius: 0, height: 50, keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, hintText: L('email_hintText', "FIRST NAME"), id: "first_name" });

  $.__views.scrollView.add($.__views.first_name);
  $.__views.last_name = Ti.UI.createTextField(
  { top: 0, width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#000080", borderRadius: 0, height: 50, keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, hintText: L('email_hintText', "LAST NAME"), id: "last_name" });

  $.__views.scrollView.add($.__views.last_name);
  $.__views.phone = Ti.UI.createTextField(
  { top: 0, width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#000080", borderRadius: 0, height: 50, keyboardType: Titanium.UI.KEYBOARD_NUMBER_PAD, returnKeyType: Titanium.UI.RETURNKEY_NEXT, hintText: L('email_hintText', "PHONE"), id: "phone" });

  $.__views.scrollView.add($.__views.phone);
  $.__views.gender = Ti.UI.createTextField(
  { top: 0, width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#000080", borderRadius: 0, height: 50, keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, hintText: L('email_hintText', "GENDER"), id: "gender" });

  $.__views.scrollView.add($.__views.gender);
  $.__views.country = Ti.UI.createPicker(
  { top: 0, width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#000080", borderRadius: 0, height: 50, keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, id: "country", selectionIndicator: true, useSpinner: false });

  $.__views.scrollView.add($.__views.country);
  var __alloyId6 = [];$.__views.column1 = Ti.UI.createPickerColumn(
  { top: 0, width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#000080", borderRadius: 0, height: 50, keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, hintText: L('email_hintText', "COUNTRY"), id: "column1" });

  __alloyId6.push($.__views.column1);
  $.__views.country.add(__alloyId6);
  $.__views.note = Ti.UI.createTextField(
  { top: 0, width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#000080", borderRadius: 0, height: 50, keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, hintText: L('email_hintText', "NOTE"), id: "note" });

  $.__views.scrollView.add($.__views.note);
  $.__views.sign_up = Ti.UI.createButton(
  { top: "8%", width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "white", title: "SIGN UP!", backgroundColor: "#000080", borderColor: "#EEEEEE", borderRadius: 0, height: 50, id: "sign_up" });

  $.__views.scrollView.add($.__views.sign_up);
  register_user ? $.addListener($.__views.sign_up, 'click', register_user) : __defers['$.__views.sign_up!click!register_user'] = true;exports.destroy = function () {};




  _.extend($, $.__views);



  var args = $.args;

  var sendit = Ti.Network.createHTTPClient({
    onerror: function (e) {
      Ti.API.debug(e.error);
      alert('There was an error during the connection');
    },
    timeout: 1000 });


  sendit.open("GET", "http://backend.tigerwhale.com/api/diving-spot");
  sendit.send();



  sendit.onload = function () {


    var json = JSON.parse(this.responseText);
    if (!json) {
      Titanium.API.info('Error - Null return!');
      return;
    }

    var i;

    var jsoncountries = json.countries;

    for (i = 0; i < jsoncountries.length; i++) {
      var row = Ti.UI.createPickerRow({
        title: Alloy.Globals.Countries[i],
        myId: i,
        textAlign: "center",
        font: {
          fontFamily: 'Smoolthan-Bold',
          fontSize: 16 },

        color: "#000080",
        hintText: L('email_hintText', "COUNTRY"),
        hintTextColor: "gray",
        backgroundColor: "#EEEEEE",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderRadius: 0,
        borderColor: "#000080",
        borderWidth: 1,
        height: 50,
        returnKeyType: Titanium.UI.RETURNKEY_DONE });

      $.column1.addRow(row);
    }
  };


  Ti.App.Properties.setObject('user', {
    "email": "",
    "password": "",
    "first_name": "",
    "last_name": "",
    "phone": "",
    "gender": "",
    "country": "",
    "b_day": "",
    "note": "" });


  function register_user() {


    Ti.App.Properties.setObject('user', {
      "user_type": "user_person",

      "email": "claudio.duarte.98@live.coms.pt",
      "password": "blablabla",
      "first_name": "claudio",
      "last_name": "rodrigues",
      "phone": "964039199",
      "gender": "F",
      "country": "Portugal",
      "b_day": "1998-08-08",
      "note": "blablabla" });





    var url = "api/register";
    var data = Ti.App.Properties.getObject('user');

    var postFunction = function postFunction(e) {
      alert("registered");

      alert("registered");



      if (e.success) {


        Ti.App.Properties.setObject('user', e);
        console.log("-- POST - " + url + " - user REGISTERED");
        console.log("-- POST - " + url + " - user.id: " + Ti.App.Properties.getObject('user').id);


        var db = require('db');
        db.create();
        db = null;


        alert("registered");

      }




      url = null;
      data = null;
      postFunction = null;
    };

    var posts = require('posts');
    posts.post(url, data, postFunction);
    posts = null;
  }








  __defers['$.__views.sign_up!click!register_user'] && $.addListener($.__views.sign_up, 'click', register_user);



  _.extend($, exports);
}

module.exports = Controller;