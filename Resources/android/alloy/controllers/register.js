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

  // Generated code that must be executed before all UI and/or
  // controller code. One example is all model and collection
  // declarations from markup.


  // Generated UI code
  $.__views.register = Ti.UI.createWindow(
  { backgroundColor: "white", navBarHidden: true, tabBarHidden: true, fullscreen: true, orientationModes: [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT], id: "register" });

  $.__views.register && $.addTopLevelView($.__views.register);
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
  $.__views.email = Ti.UI.createTextField(
  { bottom: 10, left: "9%", width: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#0099ff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#0099ff", borderRadius: 6, height: 50, hintText: L('email_hintText', "EMAIL"), id: "email" });

  $.__views.scrollView.add($.__views.email);
  $.__views.password = Ti.UI.createTextField(
  { bottom: 10, left: "9%", width: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#0099ff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#0099ff", borderRadius: 6, height: 50, passwordMask: true, hintText: L('pass_hintText', "PASSWORD"), id: "password" });

  $.__views.scrollView.add($.__views.password);
  $.__views.first_name = Ti.UI.createTextField(
  { bottom: 10, left: "9%", width: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#0099ff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#0099ff", borderRadius: 6, height: 50, hintText: L('email_hintText', "FIRST NAME"), id: "first_name" });

  $.__views.scrollView.add($.__views.first_name);
  $.__views.last_name = Ti.UI.createTextField(
  { bottom: 10, left: "9%", width: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#0099ff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#0099ff", borderRadius: 6, height: 50, hintText: L('email_hintText', "LAST NAME"), id: "last_name" });

  $.__views.scrollView.add($.__views.last_name);
  $.__views.phone = Ti.UI.createTextField(
  { bottom: 10, left: "9%", width: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#0099ff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#0099ff", borderRadius: 6, height: 50, hintText: L('email_hintText', "PHONE"), id: "phone" });

  $.__views.scrollView.add($.__views.phone);
  $.__views.genderl = Ti.UI.createLabel(
  { left: "9%", font: { fontFamily: "Raleway-Light", fontSize: 18 }, color: "#0099ff", text: L('privacy_text', "Gender:"), id: "genderl" });

  $.__views.scrollView.add($.__views.genderl);
  $.__views.gender = Ti.UI.createPicker(
  { bottom: 10, left: "9%", width: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#0099ff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#0099ff", borderRadius: 6, height: 50, hintText: L('email_hintText', "GENDER"), id: "gender", selectionIndicator: true, useSpinner: false });

  $.__views.scrollView.add($.__views.gender);
  var __alloyId0 = [];$.__views.column1 = Ti.UI.createPickerColumn(
  { color: "#ffffff", pullBackgroundColor: "#ffffff", id: "column1", width: "30%" });

  __alloyId0.push($.__views.column1);
  $.__views.__alloyId1 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "", id: "__alloyId1" });

  $.__views.column1.addRow($.__views.__alloyId1);
  $.__views.__alloyId2 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "Masculine", id: "__alloyId2" });

  $.__views.column1.addRow($.__views.__alloyId2);
  $.__views.__alloyId3 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "Feminine", id: "__alloyId3" });

  $.__views.column1.addRow($.__views.__alloyId3);
  $.__views.gender.add(__alloyId0);
  $.__views.countryl = Ti.UI.createLabel(
  { left: "9%", font: { fontFamily: "Raleway-Light", fontSize: 18 }, color: "#0099ff", text: L('privacy_text', "Country:"), id: "countryl" });

  $.__views.scrollView.add($.__views.countryl);
  $.__views.country = Ti.UI.createPicker(
  { bottom: 10, left: "9%", width: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#ffffff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#0099ff", borderRadius: 6, height: 50, accessibilityValue: "Country", pullBackgroundColor: "#ffffff", id: "country", selectionIndicator: true, useSpinner: false });

  $.__views.scrollView.add($.__views.country);
  var __alloyId4 = [];$.__views.column1 = Ti.UI.createPickerColumn(
  { color: "#ffffff", pullBackgroundColor: "#ffffff", id: "column1", width: "30%" });

  __alloyId4.push($.__views.column1);
  $.__views.country.add(__alloyId4);
  $.__views.birthl = Ti.UI.createLabel(
  { left: "9%", font: { fontFamily: "Raleway-Light", fontSize: 18 }, color: "#0099ff", text: L('privacy_text', "Birthdate:"), id: "birthl" });

  $.__views.scrollView.add($.__views.birthl);
  $.__views.birthday = Ti.UI.createPicker(
  { bottom: 10, left: "9%", width: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 20 }, color: "#0099ff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#0099ff", borderRadius: 6, height: 90, dateTimeColor: "#0099ff", format24: false, calendarViewShown: false, id: "birthday", type: Ti.UI.PICKER_TYPE_DATE });

  $.__views.scrollView.add($.__views.birthday);
  $.__views.agreeContainer = Ti.UI.createView(
  { left: "9%", width: "75%", height: 50, id: "agreeContainer" });

  $.__views.scrollView.add($.__views.agreeContainer);
  $.__views.agree = Ti.UI.createLabel(
  { top: "25%", width: "40%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 14 }, color: "#0099ff", text: L('privacy_text', "I agree with terms and conditions:"), id: "agree" });

  $.__views.agreeContainer.add($.__views.agree);
  $.__views.linkContainer = Ti.UI.createView(
  { left: "9%", width: "75%", height: 50, id: "linkContainer" });

  $.__views.scrollView.add($.__views.linkContainer);
  $.__views.terms = Ti.UI.createLabel(
  { top: "0%", right: 0, width: "40%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 12 }, color: "#0099ff", text: L('privacy_terms', "TERMS OF USE"), id: "terms" });

  $.__views.linkContainer.add($.__views.terms);
  $.__views.privacy = Ti.UI.createLabel(
  { top: "0%", left: 0, width: "40%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 12 }, color: "#0099ff", text: L('privacy_privacy', "PRIVACY POLICY"), id: "privacy" });

  $.__views.linkContainer.add($.__views.privacy);
  $.__views.loginSwitch = Ti.UI.createSwitch(
  { id: "loginSwitch" });

  $.__views.linkContainer.add($.__views.loginSwitch);
  $.__views.sign_up = Ti.UI.createButton(
  { left: "9%", bottom: 0, width: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 24 }, color: "white", title: "SIGN UP", backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, height: 50, id: "sign_up" });

  $.__views.scrollView.add($.__views.sign_up);
  register_user ? $.addListener($.__views.sign_up, 'click', register_user) : __defers['$.__views.sign_up!click!register_user'] = true;$.__views.linkContainer = Ti.UI.createView(
  { left: "9%", width: "75%", height: 50, id: "linkContainer" });

  $.__views.scrollView.add($.__views.linkContainer);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  // Arguments passed into this controller can be accessed via the `$.args` object directly or:
  var args = $.args;

  $.birthday.value = new Date();
  $.birthday.maxDate = new Date();

  var sendit = Ti.Network.createHTTPClient({
    onerror: function (e) {
      Ti.API.debug(e.error);
      alert('There was an error during the connection');
    },
    timeout: 1000 });

  //Here you have to change it for your local ip  	
  sendit.open("GET", "http://backend.tigerwhale.com/api/country");
  sendit.send();


  //Function to be called upon a successful response 
  sendit.onload = function () {
    //Emptying the data to refresh the view 
    //Parsing into JSON format
    var json = JSON.parse(this.responseText);
    if (!json) {
      Titanium.API.info('Error - Null return!');
      return;
    }
    //Saving into var values from php page
    var i;
    //Saving into var values from php page
    var jsoncountries = json.countries;

    for (i = 0; i < jsoncountries.length; i++) {
      var row = Ti.UI.createPickerRow({
        title: Alloy.Globals.Countries[i],
        myId: i,
        textAlign: "center",
        font: {
          fontFamily: 'Smoolthan-Bold',
          fontSize: 16 },

        color: "#0099ff",
        hintText: L('email_hintText', "COUNTRY"),
        hintTextColor: "gray",
        backgroundColor: "#EEEEEE",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, //iOS only
        borderRadius: 0,
        borderColor: "#000080",
        borderWidth: 1,
        height: 50
        //returnKeyType: Titanium.UI.RETURNKEY_NEXT
      });
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

    // store to user object
    Ti.App.Properties.setObject('user', {
      "userable_type": "UserPerson",
      "email": $.email.value,
      "password": $.password.value,
      "first_name": $.first_name.value,
      "last_name": $.last_name.value,
      "phone": $.phone.value,
      "gender": "F",
      "country": $.country.getSelectedRow(0).title,
      "b_day": "1998-08-08",
      "note": " None " });




    // make a HTTP request

    var url = "api/register";
    var data = Ti.App.Properties.getObject('user');
    console.log(data);

    var postFunction = function postFunction(e) {
      alert("registered");
      //if (!Alloy.Globals.checkErrors(e)) {
      //alert("registered");


      // REGISTER
      if (e.success == true) {

        // set user 
        Ti.App.Properties.setObject('user', e);
        console.log("-- POST - " + url + " - user REGISTERED");
        console.log("-- POST - " + url + " - user.id: " + Ti.App.Properties.getObject('user').id);

        // create db
        //var db = require('db'); //Creating the local database
        //db.create();
        //db = null;

        // open info
        alert("registered");

        function openIndex() {
          var main = Alloy.createController('survey').getView();
          main.open();
          main = null;
        }

        openIndex();
        //Rederecting the vieew to the main view, from the indez file


      }

      //}

      // CLEAR
      url = null;
      data = null;
      postFunction = null;
    };

    var posts = require('posts');
    posts.post(url, data, postFunction);
    posts = null;
  }


  //$.email.value = $.first_name.value = $.last_name.value = $.password.value = $.pass_confirm.value = $.phone.value = $.gender.value= $.country.value= $.b_day.value= $.note.value = "claudio.rodrigues98@mail.com.pt";

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views.sign_up!click!register_user'] && $.addListener($.__views.sign_up, 'click', register_user);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file://C:\Users\claud\Documents\dive/build/map/Resources\android\alloy\controllers\register.js.map