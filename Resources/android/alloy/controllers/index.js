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
  this.__controllerPath = 'index';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.login = Ti.UI.createWindow(
  { backgroundColor: "white", navBarHidden: true, tabBarHidden: true, fullscreen: true, id: "login" });

  $.__views.login && $.addTopLevelView($.__views.login);
  $.__views.indexContainer = Ti.UI.createView(
  { layout: "vertical", id: "indexContainer" });

  $.__views.login.add($.__views.indexContainer);
  $.__views.header = Ti.UI.createView(
  { layout: "vertical", height: "33.33%", top: 0, id: "header" });

  $.__views.indexContainer.add($.__views.header);
  $.__views.logo = Ti.UI.createButton(
  { top: "10%", height: 100, width: 100, backgroundImage: "/img/logo.png", id: "logo" });

  $.__views.header.add($.__views.logo);
  loginRegister ? $.addListener($.__views.logo, 'click', loginRegister) : __defers['$.__views.logo!click!loginRegister'] = true;$.__views.create = Ti.UI.createLabel(
  { top: "5%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 18 }, color: "#000080", text: L('create_account', "Wave Dive"), id: "create" });

  $.__views.header.add($.__views.create);
  $.__views.body = Ti.UI.createView(
  { layout: "vertical", height: "33.33%", top: "0", id: "body" });

  $.__views.indexContainer.add($.__views.body);
  $.__views.email = Ti.UI.createTextField(
  { top: 0, width: "60%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintText: L('email_hintText', "EMAIL"), hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#000080", borderRadius: 0, height: 50, keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, id: "email" });

  $.__views.body.add($.__views.email);
  $.__views.pass = Ti.UI.createTextField(
  { top: "5%", width: "60%", textAlign: "center", passwordMask: true, font: { fontFamily: "Smoolthan-Bold", fontSize: 16 }, color: "#000080", hintText: L('pass_hintText', "PASSWORD"), hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderRadius: 0, borderColor: "#000080", borderWidth: 1, height: 50, returnKeyType: Titanium.UI.RETURNKEY_DONE, id: "pass" });

  $.__views.body.add($.__views.pass);
  $.__views.linkContainer = Ti.UI.createView(
  { top: "10%", width: "60%", id: "linkContainer" });

  $.__views.body.add($.__views.linkContainer);
  $.__views.forgotPass = Ti.UI.createLabel(
  { top: 0, left: 0, width: "40%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 12 }, text: L("pass_forgot", "FORGOT PASSWORD?"), color: "#000080", id: "forgotPass" });

  $.__views.linkContainer.add($.__views.forgotPass);
  $.__views.register = Ti.UI.createLabel(
  { top: 0, left: "70%", width: "20%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 12 }, text: L("pass_forgot", "DON'T HAVE AN ACCOUNT? SIGN UP!"), color: "#000080", id: "register" });

  $.__views.linkContainer.add($.__views.register);
  register ? $.addListener($.__views.register, 'click', register) : __defers['$.__views.register!click!register'] = true;$.__views.log_in = Ti.UI.createButton(
  { top: "45%", width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 24 }, color: "white", title: "LOG IN", backgroundColor: "#000080", borderColor: "#EEEEEE", borderRadius: 0, height: 50, id: "log_in" });

  $.__views.linkContainer.add($.__views.log_in);
  loginRegister ? $.addListener($.__views.log_in, 'click', loginRegister) : __defers['$.__views.log_in!click!loginRegister'] = true;$.__views.footer = Ti.UI.createView(
  { height: "33.33%", top: 0, id: "footer" });

  $.__views.indexContainer.add($.__views.footer);
  $.__views.loginSwitch = Ti.UI.createSwitch(
  { top: "5%", onTintColor: "#000080", tintColor: "#FFFFFF", thumbTintColor: "#FFFFFF", value: false, id: "loginSwitch" });

  $.__views.footer.add($.__views.loginSwitch);
  $.__views.agree = Ti.UI.createLabel(
  { top: "30%", width: "60%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 14 }, color: "#000080", text: L('privacy_text', "I agree with terms and conditions:"), id: "agree" });

  $.__views.footer.add($.__views.agree);
  $.__views.terms = Ti.UI.createLabel(
  { top: "45%", left: "20%", width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 12 }, color: "#000080", text: L('privacy_terms', "TERMS OF USE"), id: "terms" });

  $.__views.footer.add($.__views.terms);
  $.__views.privacy = Ti.UI.createLabel(
  { top: "45%", right: "20%", width: "30%", textAlign: "center", font: { fontFamily: "Smoolthan-Bold", fontSize: 12 }, color: "#000080", text: L('privacy_privacy', "PRIVACY POLICY"), id: "privacy" });

  $.__views.footer.add($.__views.privacy);
  exports.destroy = function () {};




  _.extend($, $.__views);




  Ti.App.Properties.setString("serverUrl", "http://backend.tigerwhale.com/");


  $.login.open();







  console.log('starting');

  if (Ti.App.Properties.hasProperty("user")) {


    console.log('has user');
    var main = Alloy.createController("main").getView();
    main.open();


  } else {
    console.log('creating user');
    console.log("-- index() - creating folders");

    var specieFolder = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'species');
    if (!specieFolder.exists()) {
      specieFolder.createDirectory();
      console.log("-- index() - created folders: " + specieFolder.getName());
    } else {
      console.log("-- index() - CUSTOM folder already exist");
    }


    var profileFolder = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'profile');
    if (!profileFolder.exists()) {
      profileFolder.createDirectory();
      console.log("-- index() - created folders: " + profileFolder.getName());
    } else {
      console.log("-- index() - PROFILE folder already exist");
    }
    specieFolder = null;
    profileFolder = null;
  }

  function register() {
    var register = Alloy.createController("register").getView();
    register.open();
  }

  function loginRegister() {
    $.email.blur();
    $.pass.blur();




    if (!$.loginSwitch.value) {
      var alerts = require('alerts');
      alerts.show(L('privacy_alert', "Please agree to the Weesh\nTearms of Use and Privacy Policy"));
      alerts = null;


    } else {


      if (!Ti.Network.online) {
        var alerts = require('alerts');
        alerts.show(L('alert_internet', "Please check your internet connection"));
        alerts = null;


      } else {


        var url = "api/login";
        var url2 = "http://seasurface.tigerwhale.com/db.sqlite";
        var data = {
          email: "admin@admin.wave",
          password: "admin" };



        var localFilepath = Ti.Filesystem.applicationDataDirectory + "bd.sqlite";
        var postFunction = function postFunction(e) {


          if (e.register == "OK") {


            Ti.App.Properties.setObject('user', e);
            console.log("-- POST - " + url + " - user REGISTERED");
            console.log("-- POST - " + url + " - user.id: " + Ti.App.Properties.getObject('user').id);


            var db = require('database');
            db.create();
            db = null;


            alert("registered");
          }


          if (e.success == true) {


            Ti.App.Properties.setObject('user', e);
            console.log("-- POST - " + url + " - user LOGGED IN");
            console.log("-- POST - " + url + " - user.id: " + Ti.App.Properties.getObject('user').id);






            var main = Alloy.createController("main").getView();
            main.open();
          }



          url = null;
          data = null;
          postFunction = null;
        };
        var posts = require('posts');
        posts.post(url, data, postFunction);
        posts = null;

        var down = require('download');
        down.downloadOneFile(url2, localFilepath);
        down = null;
      }
    }
  }





  __defers['$.__views.logo!click!loginRegister'] && $.addListener($.__views.logo, 'click', loginRegister);__defers['$.__views.register!click!register'] && $.addListener($.__views.register, 'click', register);__defers['$.__views.log_in!click!loginRegister'] && $.addListener($.__views.log_in, 'click', loginRegister);



  _.extend($, exports);
}

module.exports = Controller;