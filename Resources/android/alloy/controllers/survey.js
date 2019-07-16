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
  { backgroundColor: "white", exitOnClose: true, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, id: "surveyWin", title: "Survey" });

  $.__views.header = Ti.UI.createView(
  { backgroundColor: "#f8f8f8", width: "100%", height: "50%", top: 0, id: "header" });

  $.__views.surveyWin.add($.__views.header);
  $.__views.logo = Ti.UI.createButton(
  { top: 0, height: 300, width: 300, backgroundImage: "/img/logo.png", id: "logo" });

  $.__views.header.add($.__views.logo);
  $.__views.create = Ti.UI.createLabel(
  { top: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 34 }, color: "#8a9093", text: L('create_account', "Wave"), id: "create" });

  $.__views.header.add($.__views.create);
  $.__views.body = Ti.UI.createView(
  { backgroundColor: "#f8f8f8", width: "100%", height: "60%", bottom: 0, id: "body" });

  $.__views.surveyWin.add($.__views.body);
  $.__views.label1 = Ti.UI.createLabel(
  { color: "#8a9093", shadowColor: "#aaa", text: "Please, insert the following information about your dive:", textAlign: "Ti.UI.TEXT_ALIGNMENT_CENTER", top: "20%", font: { fontFamily: "Raleway-Bold", fontSize: 16 }, id: "label1" });

  $.__views.body.add($.__views.label1);
  $.__views.picker = Ti.UI.createPicker(
  { top: "30%", font: { fontFamily: "Raleway-Bold", fontSize: 16 }, color: "#000080", backgroundColor: "#AAAAAA", id: "picker", selectionIndicator: true, useSpinner: true });

  $.__views.body.add($.__views.picker);
  var __alloyId0 = [];$.__views.column1 = Ti.UI.createPickerColumn(
  { font: { fontFamily: "Raleway-Regular", fontSize: 28 }, color: "#000080", id: "column1", width: "30%" });

  __alloyId0.push($.__views.column1);
  $.__views.column2 = Ti.UI.createPickerColumn(
  { font: { fontFamily: "Raleway-Bold", fontSize: 28 }, color: "#000080", id: "column2" });

  __alloyId0.push($.__views.column2);
  $.__views.__alloyId1 = Ti.UI.createPickerRow(
  { title: "10 minutes", id: "__alloyId1" });

  $.__views.column2.addRow($.__views.__alloyId1);
  $.__views.__alloyId2 = Ti.UI.createPickerRow(
  { title: "20 minutes", id: "__alloyId2" });

  $.__views.column2.addRow($.__views.__alloyId2);
  $.__views.__alloyId3 = Ti.UI.createPickerRow(
  { title: "30 minutes", id: "__alloyId3" });

  $.__views.column2.addRow($.__views.__alloyId3);
  $.__views.__alloyId4 = Ti.UI.createPickerRow(
  { title: "40 minutes", id: "__alloyId4" });

  $.__views.column2.addRow($.__views.__alloyId4);
  $.__views.__alloyId5 = Ti.UI.createPickerRow(
  { title: "50 minutes", id: "__alloyId5" });

  $.__views.column2.addRow($.__views.__alloyId5);
  $.__views.__alloyId6 = Ti.UI.createPickerRow(
  { title: "60 minutes", id: "__alloyId6" });

  $.__views.column2.addRow($.__views.__alloyId6);
  $.__views.__alloyId7 = Ti.UI.createPickerRow(
  { title: "70 minutes", id: "__alloyId7" });

  $.__views.column2.addRow($.__views.__alloyId7);
  $.__views.__alloyId8 = Ti.UI.createPickerRow(
  { title: "80 minutes", id: "__alloyId8" });

  $.__views.column2.addRow($.__views.__alloyId8);
  $.__views.__alloyId9 = Ti.UI.createPickerRow(
  { title: "90 minutes", id: "__alloyId9" });

  $.__views.column2.addRow($.__views.__alloyId9);
  $.__views.__alloyId10 = Ti.UI.createPickerRow(
  { title: "100 minutes", id: "__alloyId10" });

  $.__views.column2.addRow($.__views.__alloyId10);
  $.__views.__alloyId11 = Ti.UI.createPickerRow(
  { title: "110 minutes", id: "__alloyId11" });

  $.__views.column2.addRow($.__views.__alloyId11);
  $.__views.__alloyId12 = Ti.UI.createPickerRow(
  { title: "120 minutes", id: "__alloyId12" });

  $.__views.column2.addRow($.__views.__alloyId12);
  $.__views.column3 = Ti.UI.createPickerColumn(
  { font: { fontFamily: "Raleway-Light", fontSize: 28 }, color: "#000080", id: "column3" });

  __alloyId0.push($.__views.column3);
  $.__views.__alloyId13 = Ti.UI.createPickerRow(
  { title: "2 divers", id: "__alloyId13" });

  $.__views.column3.addRow($.__views.__alloyId13);
  $.__views.__alloyId14 = Ti.UI.createPickerRow(
  { title: "3 divers", id: "__alloyId14" });

  $.__views.column3.addRow($.__views.__alloyId14);
  $.__views.__alloyId15 = Ti.UI.createPickerRow(
  { title: "4 divers", id: "__alloyId15" });

  $.__views.column3.addRow($.__views.__alloyId15);
  $.__views.__alloyId16 = Ti.UI.createPickerRow(
  { title: "5 divers", id: "__alloyId16" });

  $.__views.column3.addRow($.__views.__alloyId16);
  $.__views.__alloyId17 = Ti.UI.createPickerRow(
  { title: "6 divers", id: "__alloyId17" });

  $.__views.column3.addRow($.__views.__alloyId17);
  $.__views.__alloyId18 = Ti.UI.createPickerRow(
  { title: "7 divers", id: "__alloyId18" });

  $.__views.column3.addRow($.__views.__alloyId18);
  $.__views.__alloyId19 = Ti.UI.createPickerRow(
  { title: "8 divers", id: "__alloyId19" });

  $.__views.column3.addRow($.__views.__alloyId19);
  $.__views.__alloyId20 = Ti.UI.createPickerRow(
  { title: "9 divers", id: "__alloyId20" });

  $.__views.column3.addRow($.__views.__alloyId20);
  $.__views.__alloyId21 = Ti.UI.createPickerRow(
  { title: "10 divers", id: "__alloyId21" });

  $.__views.column3.addRow($.__views.__alloyId21);
  $.__views.__alloyId22 = Ti.UI.createPickerRow(
  { title: "11 divers", id: "__alloyId22" });

  $.__views.column3.addRow($.__views.__alloyId22);
  $.__views.__alloyId23 = Ti.UI.createPickerRow(
  { title: "12 divers", id: "__alloyId23" });

  $.__views.column3.addRow($.__views.__alloyId23);
  $.__views.__alloyId24 = Ti.UI.createPickerRow(
  { title: "13 divers", id: "__alloyId24" });

  $.__views.column3.addRow($.__views.__alloyId24);
  $.__views.__alloyId25 = Ti.UI.createPickerRow(
  { title: "14 divers", id: "__alloyId25" });

  $.__views.column3.addRow($.__views.__alloyId25);
  $.__views.__alloyId26 = Ti.UI.createPickerRow(
  { title: "15 divers", id: "__alloyId26" });

  $.__views.column3.addRow($.__views.__alloyId26);
  $.__views.__alloyId27 = Ti.UI.createPickerRow(
  { title: "16 divers", id: "__alloyId27" });

  $.__views.column3.addRow($.__views.__alloyId27);
  $.__views.__alloyId28 = Ti.UI.createPickerRow(
  { title: "17 divers", id: "__alloyId28" });

  $.__views.column3.addRow($.__views.__alloyId28);
  $.__views.__alloyId29 = Ti.UI.createPickerRow(
  { title: "18 divers", id: "__alloyId29" });

  $.__views.column3.addRow($.__views.__alloyId29);
  $.__views.__alloyId30 = Ti.UI.createPickerRow(
  { title: "19 divers", id: "__alloyId30" });

  $.__views.column3.addRow($.__views.__alloyId30);
  $.__views.__alloyId31 = Ti.UI.createPickerRow(
  { title: "20 divers", id: "__alloyId31" });

  $.__views.column3.addRow($.__views.__alloyId31);
  $.__views.picker.add(__alloyId0);
  $.__views.speciesBtn = Ti.UI.createButton(
  { font: { fontFamily: "Raleway-SemiBold", fontSize: 20 }, title: "Start survey", bottom: "15%", width: "25%", color: "white", height: 40, backgroundColor: "#000080", borderColor: "#EEEEEE", borderRadius: 6, id: "speciesBtn" });

  $.__views.body.add($.__views.speciesBtn);
  openSpecies ? $.addListener($.__views.speciesBtn, 'click', openSpecies) : __defers['$.__views.speciesBtn!click!openSpecies'] = true;$.__views.surveyTab = Ti.UI.createTab(
  { font: { fontFamily: "Raleway-Light", fontSize: 28 }, color: "#000080", window: $.__views.surveyWin, id: "surveyTab", title: "Survey" });

  $.__views.surveyTab && $.addTopLevelView($.__views.surveyTab);
  exports.destroy = function () {};




  _.extend($, $.__views);


  var args = $.args;





  getTodoList();

  function getTodoList() {

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





  function openSpecies() {
    Alloy.Globals.Sites.length = 0;
    var selectedRow = $.picker.getSelectedRow(0).myId;
    var selectedRow1 = $.picker.getSelectedRow(1).title;
    var selectedRow2 = $.picker.getSelectedRow(2).title;

    var species = Alloy.createController('species').getView();
    species.open();
    species = null;

    Alloy.Globals.Species = [selectedRow, selectedRow1, selectedRow2];
  }





  __defers['$.__views.speciesBtn!click!openSpecies'] && $.addListener($.__views.speciesBtn, 'click', openSpecies);



  _.extend($, exports);
}

module.exports = Controller;