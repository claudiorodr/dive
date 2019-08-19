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
  { backgroundColor: "white", navBarHidden: true, tabBarHidden: true, fullscreen: true, orientationModes: [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT], id: "login" });

  $.__views.login && $.addTopLevelView($.__views.login);
  $.__views.indexContainer = Ti.UI.createView(
  { id: "indexContainer" });

  $.__views.login.add($.__views.indexContainer);
  $.__views.header = Ti.UI.createView(
  { backgroundColor: "#f8f8f8", width: "50%", height: "100%", left: 0, id: "header" });

  $.__views.indexContainer.add($.__views.header);
  $.__views.logo = Ti.UI.createButton(
  { height: 300, width: 300, backgroundImage: "/img/logo.png", id: "logo" });

  $.__views.header.add($.__views.logo);
  loginRegister ? $.addListener($.__views.logo, 'click', loginRegister) : __defers['$.__views.logo!click!loginRegister'] = true;$.__views.create = Ti.UI.createLabel(
  { top: "62%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 32 }, color: "#8a9093", text: L('create_account', "Wave"), id: "create" });

  $.__views.header.add($.__views.create);
  $.__views.body = Ti.UI.createView(
  { layout: "vertical", width: "50%", right: 0, height: "100%", id: "body" });

  $.__views.indexContainer.add($.__views.body);
  $.__views.email = Ti.UI.createTextField(
  { top: "40%", left: "9%", width: "75%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#000080", hintText: L('email_hintText', "EMAIL"), hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderColor: "#0099ff", borderRadius: 6, height: 50, keyboardType: Titanium.UI.KEYBOARD_TYPE_EMAIL, returnKeyType: Titanium.UI.RETURNKEY_NEXT, id: "email" });

  $.__views.body.add($.__views.email);
  $.__views.pass = Ti.UI.createTextField(
  { top: 5, left: "9%", width: "75%", textAlign: "center", passwordMask: true, font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#000080", hintText: L('pass_hintText', "PASSWORD"), hintTextColor: "gray", backgroundColor: "#EEEEEE", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, borderRadius: 6, borderColor: "#0099ff", borderWidth: 1, height: 50, returnKeyType: Titanium.UI.RETURNKEY_DONE, id: "pass" });

  $.__views.body.add($.__views.pass);
  $.__views.linkContainer = Ti.UI.createView(
  { left: "9%", width: "75%", height: 50, id: "linkContainer" });

  $.__views.body.add($.__views.linkContainer);
  $.__views.forgotPass = Ti.UI.createLabel(
  { top: "25%", left: 0, width: "40%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 12 }, text: L("pass_forgot", "FORGOT PASSWORD?"), color: "#0099ff", id: "forgotPass" });

  $.__views.linkContainer.add($.__views.forgotPass);
  $.__views.register = Ti.UI.createLabel(
  { top: "25%", right: 0, width: "40%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 12 }, text: L("pass_forgot", "DON'T HAVE AN ACCOUNT? SIGN UP!"), color: "#0099ff", id: "register" });

  $.__views.linkContainer.add($.__views.register);
  register ? $.addListener($.__views.register, 'click', register) : __defers['$.__views.register!click!register'] = true;$.__views.log_in = Ti.UI.createButton(
  { left: "9%", top: 0, width: "75%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 24 }, color: "white", title: "SIGN IN", backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, height: 50, id: "log_in" });

  $.__views.body.add($.__views.log_in);
  loginRegister ? $.addListener($.__views.log_in, 'click', loginRegister) : __defers['$.__views.log_in!click!loginRegister'] = true;exports.destroy = function () {};




  _.extend($, $.__views);


  Ti.App.Properties.setString("serverUrl", "http://backend.tigerwhale.com/");


  $.login.open();


  console.log('starting');

  if (Ti.App.Properties.hasProperty("user")) {

    var inst = require('install');
    inst.getToDo();
    inst = null;


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


        if (e.register == true) {


          Ti.App.Properties.setObject('user', e);
          console.log("-- POST - " + url + " - user REGISTERED");
          console.log("-- POST - " + url + " - user.id: " + Ti.App.Properties.getObject('user').id);


          var db = require('database');

          db.create();
          db = null;


          alert("registered");
        }


        if (e.success == true) {


          Ti.App.Properties.setObject('id', e.user.id);
          Ti.App.Properties.setObject('email', e.user.email);
          Ti.App.Properties.setObject('points', e.user.points);
          Ti.App.Properties.setObject('phone', e.user.phone);
          Ti.App.Properties.setObject('note', e.user.note);
          Ti.App.Properties.setObject('level', e.user.level);
          Ti.App.Properties.setObject('name', e.user.userable.user.name);
          Ti.App.Properties.setObject('gender', e.user.userable.user.gender);
          Ti.App.Properties.setObject('country', e.user.userable.user.country);
          Ti.App.Properties.setObject('b_day', e.user.userable.user.b_day);

          console.log("-- POST - " + url + " - user LOGGED IN");
          console.log("-- POST - " + url + " - user.id: " + Ti.App.Properties.getObject('user'));

          var inst = require('install');
          inst.getToDo();
          inst = null;


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

    }
  }





  __defers['$.__views.logo!click!loginRegister'] && $.addListener($.__views.logo, 'click', loginRegister);__defers['$.__views.register!click!register'] && $.addListener($.__views.register, 'click', register);__defers['$.__views.log_in!click!loginRegister'] && $.addListener($.__views.log_in, 'click', loginRegister);



  _.extend($, exports);
}

module.exports = Controller;