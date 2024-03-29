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
  this.__controllerPath = 'survey';
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
  $.__views.surveyWin = Ti.UI.createWindow(
  { backgroundColor: "#f8f8ff", exitOnClose: true, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, id: "surveyWin", title: "Survey" });

  $.__views.surveyWin && $.addTopLevelView($.__views.surveyWin);
  $.__views.header = Ti.UI.createView(
  { backgroundColor: "#f8f8f8", width: "50%", height: "100%", left: 0, id: "header" });

  $.__views.surveyWin.add($.__views.header);
  $.__views.logo = Ti.UI.createButton(
  { height: 300, width: 300, backgroundImage: "/img/logo.png", id: "logo" });

  $.__views.header.add($.__views.logo);
  $.__views.create = Ti.UI.createLabel(
  { top: "62%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 32 }, color: "#8a9093", text: L('create_account', "Wave"), id: "create" });

  $.__views.header.add($.__views.create);
  $.__views.body = Ti.UI.createView(
  { backgroundColor: "#f8f8f8", width: "50%", height: "100%", right: 0, id: "body" });

  $.__views.surveyWin.add($.__views.body);
  $.__views.up = Ti.UI.createView(
  { backgroundColor: "#ffffff", layout: "vertical", width: "100%", height: "100%", top: 0, left: 0, id: "up" });

  $.__views.body.add($.__views.up);
  $.__views.label1 = Ti.UI.createLabel(
  { color: "#8a9093", shadowColor: "#aaa", text: "Please, insert the following information about your dive:", textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER", top: "15%", font: { fontFamily: "Raleway-Bold", fontSize: 16 }, id: "label1" });

  $.__views.up.add($.__views.label1);
  $.__views.label2 = Ti.UI.createLabel(
  { color: "#8a9093", shadowColor: "#aaa", text: "Diving Spot", textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER", top: "5%", left: "22%", font: { fontFamily: "Raleway-Bold", fontSize: 16 }, id: "label2" });

  $.__views.up.add($.__views.label2);
  $.__views.picker = Ti.UI.createPicker(
  { left: "22%", width: "55%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#0099ff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderColor: "#0099ff", borderRadius: 6, height: 50, id: "picker", selectionIndicator: true, useSpinner: false });

  $.__views.up.add($.__views.picker);
  var __alloyId10 = [];$.__views.column1 = Ti.UI.createPickerColumn(
  { font: { fontFamily: "Raleway-Regular", fontSize: 28 }, color: "#000080", id: "column1", width: "30%" });

  __alloyId10.push($.__views.column1);
  $.__views.picker.add(__alloyId10);
  $.__views.label3 = Ti.UI.createLabel(
  { color: "#8a9093", shadowColor: "#aaa", text: "Duration", textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER", top: "2%", left: "22%", font: { fontFamily: "Raleway-Bold", fontSize: 16 }, id: "label3" });

  $.__views.up.add($.__views.label3);
  $.__views.picker2 = Ti.UI.createPicker(
  { left: "22%", width: "55%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#0099ff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderColor: "#0099ff", borderRadius: 6, height: 50, id: "picker2", selectionIndicator: true, useSpinner: false });

  $.__views.up.add($.__views.picker2);
  var __alloyId11 = [];$.__views.column2 = Ti.UI.createPickerColumn(
  { font: { fontFamily: "Raleway-Bold", fontSize: 28 }, color: "#000080", id: "column2", width: "30%" });

  __alloyId11.push($.__views.column2);
  $.__views.__alloyId12 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "10 minutes", id: "__alloyId12" });

  $.__views.column2.addRow($.__views.__alloyId12);
  $.__views.__alloyId13 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "20 minutes", id: "__alloyId13" });

  $.__views.column2.addRow($.__views.__alloyId13);
  $.__views.__alloyId14 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "30 minutes", id: "__alloyId14" });

  $.__views.column2.addRow($.__views.__alloyId14);
  $.__views.__alloyId15 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "40 minutes", id: "__alloyId15" });

  $.__views.column2.addRow($.__views.__alloyId15);
  $.__views.__alloyId16 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "50 minutes", id: "__alloyId16" });

  $.__views.column2.addRow($.__views.__alloyId16);
  $.__views.__alloyId17 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "60 minutes", id: "__alloyId17" });

  $.__views.column2.addRow($.__views.__alloyId17);
  $.__views.__alloyId18 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "70 minutes", id: "__alloyId18" });

  $.__views.column2.addRow($.__views.__alloyId18);
  $.__views.__alloyId19 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "80 minutes", id: "__alloyId19" });

  $.__views.column2.addRow($.__views.__alloyId19);
  $.__views.__alloyId20 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "90 minutes", id: "__alloyId20" });

  $.__views.column2.addRow($.__views.__alloyId20);
  $.__views.__alloyId21 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "100 minutes", id: "__alloyId21" });

  $.__views.column2.addRow($.__views.__alloyId21);
  $.__views.__alloyId22 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "110 minutes", id: "__alloyId22" });

  $.__views.column2.addRow($.__views.__alloyId22);
  $.__views.__alloyId23 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "120 minutes", id: "__alloyId23" });

  $.__views.column2.addRow($.__views.__alloyId23);
  $.__views.picker2.add(__alloyId11);
  $.__views.label4 = Ti.UI.createLabel(
  { color: "#8a9093", shadowColor: "#aaa", text: "Number of Divers", textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER", top: "2%", left: "22%", font: { fontFamily: "Raleway-Bold", fontSize: 16 }, id: "label4" });

  $.__views.up.add($.__views.label4);
  $.__views.picker3 = Ti.UI.createPicker(
  { left: "22%", width: "55%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#0099ff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderColor: "#0099ff", borderRadius: 6, height: 50, id: "picker3", selectionIndicator: true, useSpinner: false });

  $.__views.up.add($.__views.picker3);
  var __alloyId24 = [];$.__views.column3 = Ti.UI.createPickerColumn(
  { font: { fontFamily: "Raleway-Light", fontSize: 28 }, color: "#000080", id: "column3", width: "30%" });

  __alloyId24.push($.__views.column3);
  $.__views.__alloyId25 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "2 divers", id: "__alloyId25" });

  $.__views.column3.addRow($.__views.__alloyId25);
  $.__views.__alloyId26 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "3 divers", id: "__alloyId26" });

  $.__views.column3.addRow($.__views.__alloyId26);
  $.__views.__alloyId27 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "4 divers", id: "__alloyId27" });

  $.__views.column3.addRow($.__views.__alloyId27);
  $.__views.__alloyId28 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "5 divers", id: "__alloyId28" });

  $.__views.column3.addRow($.__views.__alloyId28);
  $.__views.__alloyId29 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "6 divers", id: "__alloyId29" });

  $.__views.column3.addRow($.__views.__alloyId29);
  $.__views.__alloyId30 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "7 divers", id: "__alloyId30" });

  $.__views.column3.addRow($.__views.__alloyId30);
  $.__views.__alloyId31 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "8 divers", id: "__alloyId31" });

  $.__views.column3.addRow($.__views.__alloyId31);
  $.__views.__alloyId32 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "9 divers", id: "__alloyId32" });

  $.__views.column3.addRow($.__views.__alloyId32);
  $.__views.__alloyId33 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "10 divers", id: "__alloyId33" });

  $.__views.column3.addRow($.__views.__alloyId33);
  $.__views.__alloyId34 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "11 divers", id: "__alloyId34" });

  $.__views.column3.addRow($.__views.__alloyId34);
  $.__views.__alloyId35 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "12 divers", id: "__alloyId35" });

  $.__views.column3.addRow($.__views.__alloyId35);
  $.__views.__alloyId36 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "13 divers", id: "__alloyId36" });

  $.__views.column3.addRow($.__views.__alloyId36);
  $.__views.__alloyId37 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "14 divers", id: "__alloyId37" });

  $.__views.column3.addRow($.__views.__alloyId37);
  $.__views.__alloyId38 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "15 divers", id: "__alloyId38" });

  $.__views.column3.addRow($.__views.__alloyId38);
  $.__views.__alloyId39 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "16 divers", id: "__alloyId39" });

  $.__views.column3.addRow($.__views.__alloyId39);
  $.__views.__alloyId40 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "17 divers", id: "__alloyId40" });

  $.__views.column3.addRow($.__views.__alloyId40);
  $.__views.__alloyId41 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "18 divers", id: "__alloyId41" });

  $.__views.column3.addRow($.__views.__alloyId41);
  $.__views.__alloyId42 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "19 divers", id: "__alloyId42" });

  $.__views.column3.addRow($.__views.__alloyId42);
  $.__views.__alloyId43 = Ti.UI.createPickerRow(
  { color: "#0099ff", title: "20 divers", id: "__alloyId43" });

  $.__views.column3.addRow($.__views.__alloyId43);
  $.__views.picker3.add(__alloyId24);
  $.__views.speciesBtn = Ti.UI.createButton(
  { top: "10%", width: "55%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 24 }, color: "white", title: "START SURVEY", backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, height: 50, id: "speciesBtn" });

  $.__views.up.add($.__views.speciesBtn);
  openSpecies ? $.addListener($.__views.speciesBtn, 'click', openSpecies) : __defers['$.__views.speciesBtn!click!openSpecies'] = true;$.__views.sign_out = Ti.UI.createButton(
  { top: "5%", bottom: "5%", width: "55%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 24 }, color: "white", title: "LOG OUT", backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, height: 50, id: "sign_out" });

  $.__views.up.add($.__views.sign_out);
  sign_out ? $.addListener($.__views.sign_out, 'click', sign_out) : __defers['$.__views.sign_out!click!sign_out'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var args = $.args;

  //Array to store the data from the todo list


  //We execute the function to show the data for the first view 
  getTodoList();
  getTodoList2();
  getTodoList3();

  function getTodoList() {
    //function to use HTTP to connect to a web server and transfer the data. 

    var sendit = Ti.Network.createHTTPClient({
      onerror: function (e) {
        for (var i = 0; i < Ti.App.Properties.getList('mySites').length; i++) {
          //Putting into string format the JSON values
          var spot = JSON.stringify(Ti.App.Properties.getList('mySites')[i]);
          //Slicing the values for cleaner look
          var spotter = spot.slice(1, -1);
          var row = Ti.UI.createPickerRow({
            title: spotter,
            myId: i });


          $.column1.addRow(row);
        }

      },
      timeout: 10000 });

    //Here you have to change it for your local ip  	

    sendit.open("GET", "http://backend.tigerwhale.com/api/diving-spot");
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

      var jsonsites = json.data;
      var pos;

      for (pos = 0; pos < jsonsites.length; pos++) {
        //Pushing into array every value			
        Alloy.Globals.Sites.push(jsonsites[pos].name);

      }
      Ti.App.Properties.setList('mySites', Alloy.Globals.Sites);

      for (var i = 0; i < Ti.App.Properties.getList('mySites').length; i++) {
        //Putting into string format the JSON values
        var spot = JSON.stringify(Ti.App.Properties.getList('mySites')[i]);
        //Slicing the values for cleaner look
        var spotter = spot.slice(1, -1);
        var row = Ti.UI.createPickerRow({
          title: spotter,
          myId: i,
          color: "#0099ff" });


        $.column1.addRow(row);
      }
    };
  };

  function getTodoList2() {
    //function to use HTTP to connect to a web server and transfer the data. 
    var sendit = Ti.Network.createHTTPClient({
      onerror: function (e) {
        for (var i = 0; i < Ti.App.Properties.getList('myNmaes').length; i++) {
          //Putting into string format the JSON values
          var name = JSON.stringify(Ti.App.Properties.getList('myNmaes')[i]);
          //Slicing the values for cleaner look 
          var namer = name.slice(1, -1);
        };
      },
      timeout: 10000 });

    //Here you have to change it for your local ip  
    sendit.open("GET", "http://backend.tigerwhale.com/api/creature");
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
      var jsonname = json.data;

      var pos;

      for (pos = 0; pos < jsonname.length; pos++) {
        if (jsonname[pos].dive_center_app == 1) {
          //Pushing into array evry value			
          Alloy.Globals.Names.push(jsonname[pos].name);
          Alloy.Globals.Scientific.push(jsonname[pos].name_scientific);
          Alloy.Globals.Description.push(jsonname[pos].description);
          Alloy.Globals.Conservation.push(jsonname[pos].conserv);
          Alloy.Globals.Curiosity.push(jsonname[pos].curiosity);
          Alloy.Globals.Size.push(jsonname[pos].size);
        }

      }
      Ti.App.Properties.setList('myNmaes', Alloy.Globals.Names);
      Ti.App.Properties.setList('myScientific', Alloy.Globals.Scientific);
      Ti.App.Properties.setList('myDescription', Alloy.Globals.Description);
      Ti.App.Properties.setList('myConservation', Alloy.Globals.Conservation);
      Ti.App.Properties.setList('myCuriosity', Alloy.Globals.Curiosity);
      Ti.App.Properties.setList('mySize', Alloy.Globals.Size);


      for (var i = 0; i < Ti.App.Properties.getList('myNmaes').length; i++) {
        //Putting into string format the JSON values
        var name = JSON.stringify(Ti.App.Properties.getList('myNmaes')[i]);
        //Slicing the values for cleaner look 
        var namer = name.slice(1, -1);
      };
    };
  }

  function getTodoList3() {
    //function to use HTTP to connect to a web server and transfer the data. 
    var sendit = Ti.Network.createHTTPClient({
      onerror: function (e) {

      },
      timeout: 10000 });

    //Here you have to change it for your local ip  
    sendit.open("GET", "http://backend.tigerwhale.com/api/abundance");
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
      var jsonname = json.data;

      var pos;

      for (pos = 0; pos < jsonname.length; pos++) {
        //Pushing into array every value			
        Alloy.Globals.Level.push(jsonname[pos].level_1);
        Alloy.Globals.Level2.push(jsonname[pos].level_2);
        Alloy.Globals.Level3.push(jsonname[pos].level_3);
        Alloy.Globals.Level4.push(jsonname[pos].level_4);
      }
      Ti.App.Properties.setList('myLevel', Alloy.Globals.Level);
      Ti.App.Properties.setList('myLevel2', Alloy.Globals.Level2);
      Ti.App.Properties.setList('myLevel3', Alloy.Globals.Level3);
      Ti.App.Properties.setList('myLevel4', Alloy.Globals.Level4);
    };
  }

  // 1. prepare data from db
  // 2. create rows from db values
  // 3. incrementing each row with the db values
  //4. showing data in picker row

  function openSpecies() {
    Alloy.Globals.Sites.length = 0;
    var selectedRow = $.picker.getSelectedRow(0).myId; //Value from picker 1
    var selectedRow1 = $.picker2.getSelectedRow(0).title; //Value from picker 2
    var selectedRow2 = $.picker3.getSelectedRow(0).title; //Value from picker 3
    var species = Alloy.createController('species').getView();
    species.open();
    species = null;

    Alloy.Globals.Species = [selectedRow, selectedRow1, selectedRow2];
    Ti.App.Properties.setList('mySpecies', Alloy.Globals.Species);
  }

  function openMain() {
    var main = Alloy.createController('survey').getView();
    main.open();
    main = null;

  }

  function sign_out() {
    Ti.App.Properties.removeProperty("user");
    var login = Alloy.createController('index').getView();
    login.open();
    login = null;
  }

  $.surveyWin.addEventListener('androidback', function (e) {
    openMain();
  });

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views.speciesBtn!click!openSpecies'] && $.addListener($.__views.speciesBtn, 'click', openSpecies);__defers['$.__views.sign_out!click!sign_out'] && $.addListener($.__views.sign_out, 'click', sign_out);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file://C:\Users\claud\Documents\dive/build/map/Resources\android\alloy\controllers\survey.js.map