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







  $.__views.surveyWin = Ti.UI.createWindow(
  { backgroundColor: "#f8f8ff", exitOnClose: true, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, id: "surveyWin", title: "Survey" });

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
  { backgroundColor: "#f8f8f8", width: "60%", height: "100%", right: 0, id: "body" });

  $.__views.surveyWin.add($.__views.body);
  $.__views.up = Ti.UI.createView(
  { backgroundColor: "#f8f8f8", width: "100", height: "33.33%", top: 0, left: 0, id: "up" });

  $.__views.body.add($.__views.up);
  $.__views.mid = Ti.UI.createView(
  { backgroundColor: "#f8f8f8", width: "100%", height: "33.33%", top: "33%", left: 0, id: "mid" });

  $.__views.body.add($.__views.mid);
  $.__views.label1 = Ti.UI.createLabel(
  { color: "#8a9093", shadowColor: "#aaa", text: "Please, insert the following information about your dive:", textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER", top: "0%", font: { fontFamily: "Raleway-Bold", fontSize: 16 }, id: "label1" });

  $.__views.mid.add($.__views.label1);
  $.__views.label2 = Ti.UI.createLabel(
  { color: "#8a9093", shadowColor: "#aaa", text: "Diving Spot", textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER", top: "33%", left: "9%", font: { fontFamily: "Raleway-Bold", fontSize: 16 }, id: "label2" });

  $.__views.mid.add($.__views.label2);
  $.__views.label3 = Ti.UI.createLabel(
  { color: "#8a9093", shadowColor: "#aaa", text: "Duration", textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER", top: "33%", left: "42%", font: { fontFamily: "Raleway-Bold", fontSize: 16 }, id: "label3" });

  $.__views.mid.add($.__views.label3);
  $.__views.label4 = Ti.UI.createLabel(
  { color: "#8a9093", shadowColor: "#aaa", text: "Number of Divers", textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER", top: "33%", left: "66%", font: { fontFamily: "Raleway-Bold", fontSize: 16 }, id: "label4" });

  $.__views.mid.add($.__views.label4);
  $.__views.picker = Ti.UI.createPicker(
  { left: "9%", width: 204, font: { fontFamily: "Raleway-Bold", fontSize: 16 }, selectionIndicator: true, borderColor: "black", id: "picker", useSpinner: false });

  $.__views.mid.add($.__views.picker);
  var __alloyId0 = [];$.__views.column1 = Ti.UI.createPickerColumn(
  { font: { fontFamily: "Raleway-Regular", fontSize: 28 }, color: "#000080", id: "column1", width: "30%" });

  __alloyId0.push($.__views.column1);
  $.__views.picker.add(__alloyId0);
  $.__views.picker2 = Ti.UI.createPicker(
  { left: "42%", width: 150, font: { fontFamily: "Raleway-Bold", fontSize: 16 }, selectionIndicator: true, borderColor: "black", id: "picker2", useSpinner: false });

  $.__views.mid.add($.__views.picker2);
  var __alloyId1 = [];$.__views.column2 = Ti.UI.createPickerColumn(
  { font: { fontFamily: "Raleway-Bold", fontSize: 28 }, color: "#000080", id: "column2", width: "30%" });

  __alloyId1.push($.__views.column2);
  $.__views.__alloyId2 = Ti.UI.createPickerRow(
  { title: "10 minutes", id: "__alloyId2" });

  $.__views.column2.addRow($.__views.__alloyId2);
  $.__views.__alloyId3 = Ti.UI.createPickerRow(
  { title: "20 minutes", id: "__alloyId3" });

  $.__views.column2.addRow($.__views.__alloyId3);
  $.__views.__alloyId4 = Ti.UI.createPickerRow(
  { title: "30 minutes", id: "__alloyId4" });

  $.__views.column2.addRow($.__views.__alloyId4);
  $.__views.__alloyId5 = Ti.UI.createPickerRow(
  { title: "40 minutes", id: "__alloyId5" });

  $.__views.column2.addRow($.__views.__alloyId5);
  $.__views.__alloyId6 = Ti.UI.createPickerRow(
  { title: "50 minutes", id: "__alloyId6" });

  $.__views.column2.addRow($.__views.__alloyId6);
  $.__views.__alloyId7 = Ti.UI.createPickerRow(
  { title: "60 minutes", id: "__alloyId7" });

  $.__views.column2.addRow($.__views.__alloyId7);
  $.__views.__alloyId8 = Ti.UI.createPickerRow(
  { title: "70 minutes", id: "__alloyId8" });

  $.__views.column2.addRow($.__views.__alloyId8);
  $.__views.__alloyId9 = Ti.UI.createPickerRow(
  { title: "80 minutes", id: "__alloyId9" });

  $.__views.column2.addRow($.__views.__alloyId9);
  $.__views.__alloyId10 = Ti.UI.createPickerRow(
  { title: "90 minutes", id: "__alloyId10" });

  $.__views.column2.addRow($.__views.__alloyId10);
  $.__views.__alloyId11 = Ti.UI.createPickerRow(
  { title: "100 minutes", id: "__alloyId11" });

  $.__views.column2.addRow($.__views.__alloyId11);
  $.__views.__alloyId12 = Ti.UI.createPickerRow(
  { title: "110 minutes", id: "__alloyId12" });

  $.__views.column2.addRow($.__views.__alloyId12);
  $.__views.__alloyId13 = Ti.UI.createPickerRow(
  { title: "120 minutes", id: "__alloyId13" });

  $.__views.column2.addRow($.__views.__alloyId13);
  $.__views.picker2.add(__alloyId1);
  $.__views.picker3 = Ti.UI.createPicker(
  { left: "66.2%", width: "auto", font: { fontFamily: "Raleway-Bold", fontSize: 16 }, color: "#000080", selectionIndicator: true, borderColor: "black", id: "picker3", useSpinner: false });

  $.__views.mid.add($.__views.picker3);
  var __alloyId14 = [];$.__views.column3 = Ti.UI.createPickerColumn(
  { font: { fontFamily: "Raleway-Light", fontSize: 28 }, color: "#000080", id: "column3", width: "30%" });

  __alloyId14.push($.__views.column3);
  $.__views.__alloyId15 = Ti.UI.createPickerRow(
  { title: "2 divers", id: "__alloyId15" });

  $.__views.column3.addRow($.__views.__alloyId15);
  $.__views.__alloyId16 = Ti.UI.createPickerRow(
  { title: "3 divers", id: "__alloyId16" });

  $.__views.column3.addRow($.__views.__alloyId16);
  $.__views.__alloyId17 = Ti.UI.createPickerRow(
  { title: "4 divers", id: "__alloyId17" });

  $.__views.column3.addRow($.__views.__alloyId17);
  $.__views.__alloyId18 = Ti.UI.createPickerRow(
  { title: "5 divers", id: "__alloyId18" });

  $.__views.column3.addRow($.__views.__alloyId18);
  $.__views.__alloyId19 = Ti.UI.createPickerRow(
  { title: "6 divers", id: "__alloyId19" });

  $.__views.column3.addRow($.__views.__alloyId19);
  $.__views.__alloyId20 = Ti.UI.createPickerRow(
  { title: "7 divers", id: "__alloyId20" });

  $.__views.column3.addRow($.__views.__alloyId20);
  $.__views.__alloyId21 = Ti.UI.createPickerRow(
  { title: "8 divers", id: "__alloyId21" });

  $.__views.column3.addRow($.__views.__alloyId21);
  $.__views.__alloyId22 = Ti.UI.createPickerRow(
  { title: "9 divers", id: "__alloyId22" });

  $.__views.column3.addRow($.__views.__alloyId22);
  $.__views.__alloyId23 = Ti.UI.createPickerRow(
  { title: "10 divers", id: "__alloyId23" });

  $.__views.column3.addRow($.__views.__alloyId23);
  $.__views.__alloyId24 = Ti.UI.createPickerRow(
  { title: "11 divers", id: "__alloyId24" });

  $.__views.column3.addRow($.__views.__alloyId24);
  $.__views.__alloyId25 = Ti.UI.createPickerRow(
  { title: "12 divers", id: "__alloyId25" });

  $.__views.column3.addRow($.__views.__alloyId25);
  $.__views.__alloyId26 = Ti.UI.createPickerRow(
  { title: "13 divers", id: "__alloyId26" });

  $.__views.column3.addRow($.__views.__alloyId26);
  $.__views.__alloyId27 = Ti.UI.createPickerRow(
  { title: "14 divers", id: "__alloyId27" });

  $.__views.column3.addRow($.__views.__alloyId27);
  $.__views.__alloyId28 = Ti.UI.createPickerRow(
  { title: "15 divers", id: "__alloyId28" });

  $.__views.column3.addRow($.__views.__alloyId28);
  $.__views.__alloyId29 = Ti.UI.createPickerRow(
  { title: "16 divers", id: "__alloyId29" });

  $.__views.column3.addRow($.__views.__alloyId29);
  $.__views.__alloyId30 = Ti.UI.createPickerRow(
  { title: "17 divers", id: "__alloyId30" });

  $.__views.column3.addRow($.__views.__alloyId30);
  $.__views.__alloyId31 = Ti.UI.createPickerRow(
  { title: "18 divers", id: "__alloyId31" });

  $.__views.column3.addRow($.__views.__alloyId31);
  $.__views.__alloyId32 = Ti.UI.createPickerRow(
  { title: "19 divers", id: "__alloyId32" });

  $.__views.column3.addRow($.__views.__alloyId32);
  $.__views.__alloyId33 = Ti.UI.createPickerRow(
  { title: "20 divers", id: "__alloyId33" });

  $.__views.column3.addRow($.__views.__alloyId33);
  $.__views.picker3.add(__alloyId14);
  $.__views.down = Ti.UI.createView(
  { backgroundColor: "#f8f8f8", width: "100%", height: "33.33%", bottom: 0, left: 0, id: "down" });

  $.__views.body.add($.__views.down);
  $.__views.speciesBtn = Ti.UI.createButton(
  { top: 0, width: "55%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 24 }, color: "white", title: "START SURVEY", backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, height: 50, id: "speciesBtn" });

  $.__views.down.add($.__views.speciesBtn);
  openSpecies ? $.addListener($.__views.speciesBtn, 'click', openSpecies) : __defers['$.__views.speciesBtn!click!openSpecies'] = true;$.__views.surveyTab = Ti.UI.createTab(
  { font: { fontFamily: "Raleway-Light", fontSize: 28 }, color: "#000080", titleColor: "white", window: $.__views.surveyWin, id: "surveyTab", title: "Survey", activeIcon: "/dive/app/assets/android/118761.png" });

  $.__views.surveyTab && $.addTopLevelView($.__views.surveyTab);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = $.args;





  getTodoList();
  getTodoList2();


  function getTodoList() {

    var sendit = Ti.Network.createHTTPClient({
      onerror: function (e) {



      },
      timeout: 10000 });


    sendit.open("GET", "http://backend.tigerwhale.com/api/diving-spot");
    sendit.send();



    sendit.onload = function () {


      var json = JSON.parse(this.responseText);
      if (!json) {
        Titanium.API.info('Error - Null return!');
        return;
      }

      var jsonsites = json.data;
      var pos;

      for (pos = 0; pos < jsonsites.length; pos++) {

        Alloy.Globals.Sites.push(jsonsites[pos].name);
      }

      for (var i = 0; i < Alloy.Globals.Sites.length; i++) {

        var spot = JSON.stringify(Alloy.Globals.Sites[i]);

        var spotter = spot.slice(1, -1);
        var row = Ti.UI.createPickerRow({
          title: spotter,
          myId: i });


        $.column1.addRow(row);
      }
    };
  };

  function getTodoList2() {

    var sendit = Ti.Network.createHTTPClient({
      onerror: function (e) {
        Ti.API.debug(e.error);
        alert('There was an error during the connection');
      },
      timeout: 10000 });


    sendit.open("GET", "http://backend.tigerwhale.com/api/creature");
    sendit.send();



    sendit.onload = function () {


      var json = JSON.parse(this.responseText);
      if (!json) {
        Titanium.API.info('Error - Null return!');
        return;
      }

      var jsonname = json.data;

      var pos;

      for (pos = 0; pos < jsonname.length; pos++) {

        Alloy.Globals.Names.push(jsonname[pos].name);
      }

      for (pos = 0; pos < jsonname.length; pos++) {

        Alloy.Globals.Scientific.push(jsonname[pos].name_scientific);
      }
      for (pos = 0; pos < jsonname.length; pos++) {

        Alloy.Globals.Description.push(jsonname[pos].description);
      }

      for (var i = 0; i < Alloy.Globals.Names.length; i++) {

        var name = JSON.stringify(Alloy.Globals.Names[i]);

        var namer = name.slice(1, -1);
      };
    };
  }






  function openSpecies() {
    Alloy.Globals.Sites.length = 0;
    var selectedRow = $.picker.getSelectedRow(0).myId;
    var selectedRow1 = $.picker2.getSelectedRow(0).title;
    var selectedRow2 = $.picker3.getSelectedRow(0).title;

    var species = Alloy.createController('species').getView();
    species.open();
    species = null;

    Alloy.Globals.Species = [selectedRow, selectedRow1, selectedRow2];
  }





  __defers['$.__views.speciesBtn!click!openSpecies'] && $.addListener($.__views.speciesBtn, 'click', openSpecies);



  _.extend($, exports);
}

module.exports = Controller;