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
  { backgroundImage: "/img/images/mainback.jpg", exitOnClose: true, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, orientationModes: [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT], id: "surveyWin", title: "Survey" });

  $.__views.surveyTitle = Ti.UI.createLabel(
  { text: 'Survey', id: "surveyTitle" });

  $.__views.surveyWin.add($.__views.surveyTitle);
  $.__views.picker = Ti.UI.createPicker(
  { id: "picker", selectionIndicator: true, useSpinner: true });

  $.__views.surveyWin.add($.__views.picker);
  var __alloyId19 = [];$.__views.column1 = Ti.UI.createPickerColumn(
  { id: "column1", width: "30%" });

  __alloyId19.push($.__views.column1);
  $.__views.column2 = Ti.UI.createPickerColumn(
  { id: "column2" });

  __alloyId19.push($.__views.column2);
  $.__views.__alloyId20 = Ti.UI.createPickerRow(
  { title: "10 minutes", id: "__alloyId20" });

  $.__views.column2.addRow($.__views.__alloyId20);
  $.__views.__alloyId21 = Ti.UI.createPickerRow(
  { title: "20 minutes", id: "__alloyId21" });

  $.__views.column2.addRow($.__views.__alloyId21);
  $.__views.__alloyId22 = Ti.UI.createPickerRow(
  { title: "30 minutes", id: "__alloyId22" });

  $.__views.column2.addRow($.__views.__alloyId22);
  $.__views.__alloyId23 = Ti.UI.createPickerRow(
  { title: "40 minutes", id: "__alloyId23" });

  $.__views.column2.addRow($.__views.__alloyId23);
  $.__views.__alloyId24 = Ti.UI.createPickerRow(
  { title: "50 minutes", id: "__alloyId24" });

  $.__views.column2.addRow($.__views.__alloyId24);
  $.__views.__alloyId25 = Ti.UI.createPickerRow(
  { title: "60 minutes", id: "__alloyId25" });

  $.__views.column2.addRow($.__views.__alloyId25);
  $.__views.__alloyId26 = Ti.UI.createPickerRow(
  { title: "70 minutes", id: "__alloyId26" });

  $.__views.column2.addRow($.__views.__alloyId26);
  $.__views.__alloyId27 = Ti.UI.createPickerRow(
  { title: "80 minutes", id: "__alloyId27" });

  $.__views.column2.addRow($.__views.__alloyId27);
  $.__views.__alloyId28 = Ti.UI.createPickerRow(
  { title: "90 minutes", id: "__alloyId28" });

  $.__views.column2.addRow($.__views.__alloyId28);
  $.__views.__alloyId29 = Ti.UI.createPickerRow(
  { title: "100 minutes", id: "__alloyId29" });

  $.__views.column2.addRow($.__views.__alloyId29);
  $.__views.__alloyId30 = Ti.UI.createPickerRow(
  { title: "110 minutes", id: "__alloyId30" });

  $.__views.column2.addRow($.__views.__alloyId30);
  $.__views.__alloyId31 = Ti.UI.createPickerRow(
  { title: "120 minutes", id: "__alloyId31" });

  $.__views.column2.addRow($.__views.__alloyId31);
  $.__views.column3 = Ti.UI.createPickerColumn(
  { id: "column3" });

  __alloyId19.push($.__views.column3);
  $.__views.__alloyId32 = Ti.UI.createPickerRow(
  { title: "2 divers", id: "__alloyId32" });

  $.__views.column3.addRow($.__views.__alloyId32);
  $.__views.__alloyId33 = Ti.UI.createPickerRow(
  { title: "3 divers", id: "__alloyId33" });

  $.__views.column3.addRow($.__views.__alloyId33);
  $.__views.__alloyId34 = Ti.UI.createPickerRow(
  { title: "4 divers", id: "__alloyId34" });

  $.__views.column3.addRow($.__views.__alloyId34);
  $.__views.__alloyId35 = Ti.UI.createPickerRow(
  { title: "5 divers", id: "__alloyId35" });

  $.__views.column3.addRow($.__views.__alloyId35);
  $.__views.__alloyId36 = Ti.UI.createPickerRow(
  { title: "6 divers", id: "__alloyId36" });

  $.__views.column3.addRow($.__views.__alloyId36);
  $.__views.__alloyId37 = Ti.UI.createPickerRow(
  { title: "7 divers", id: "__alloyId37" });

  $.__views.column3.addRow($.__views.__alloyId37);
  $.__views.__alloyId38 = Ti.UI.createPickerRow(
  { title: "8 divers", id: "__alloyId38" });

  $.__views.column3.addRow($.__views.__alloyId38);
  $.__views.__alloyId39 = Ti.UI.createPickerRow(
  { title: "9 divers", id: "__alloyId39" });

  $.__views.column3.addRow($.__views.__alloyId39);
  $.__views.__alloyId40 = Ti.UI.createPickerRow(
  { title: "10 divers", id: "__alloyId40" });

  $.__views.column3.addRow($.__views.__alloyId40);
  $.__views.__alloyId41 = Ti.UI.createPickerRow(
  { title: "11 divers", id: "__alloyId41" });

  $.__views.column3.addRow($.__views.__alloyId41);
  $.__views.__alloyId42 = Ti.UI.createPickerRow(
  { title: "12 divers", id: "__alloyId42" });

  $.__views.column3.addRow($.__views.__alloyId42);
  $.__views.__alloyId43 = Ti.UI.createPickerRow(
  { title: "13 divers", id: "__alloyId43" });

  $.__views.column3.addRow($.__views.__alloyId43);
  $.__views.__alloyId44 = Ti.UI.createPickerRow(
  { title: "14 divers", id: "__alloyId44" });

  $.__views.column3.addRow($.__views.__alloyId44);
  $.__views.__alloyId45 = Ti.UI.createPickerRow(
  { title: "15 divers", id: "__alloyId45" });

  $.__views.column3.addRow($.__views.__alloyId45);
  $.__views.__alloyId46 = Ti.UI.createPickerRow(
  { title: "16 divers", id: "__alloyId46" });

  $.__views.column3.addRow($.__views.__alloyId46);
  $.__views.__alloyId47 = Ti.UI.createPickerRow(
  { title: "17 divers", id: "__alloyId47" });

  $.__views.column3.addRow($.__views.__alloyId47);
  $.__views.__alloyId48 = Ti.UI.createPickerRow(
  { title: "18 divers", id: "__alloyId48" });

  $.__views.column3.addRow($.__views.__alloyId48);
  $.__views.__alloyId49 = Ti.UI.createPickerRow(
  { title: "19 divers", id: "__alloyId49" });

  $.__views.column3.addRow($.__views.__alloyId49);
  $.__views.__alloyId50 = Ti.UI.createPickerRow(
  { title: "20 divers", id: "__alloyId50" });

  $.__views.column3.addRow($.__views.__alloyId50);
  $.__views.picker.add(__alloyId19);
  $.__views.speciesBtn = Ti.UI.createButton(
  { id: "speciesBtn", title: "Start survey", bottom: "8%", width: "20%", height: 50 });

  $.__views.surveyWin.add($.__views.speciesBtn);
  openSpecies ? $.addListener($.__views.speciesBtn, 'click', openSpecies) : __defers['$.__views.speciesBtn!click!openSpecies'] = true;$.__views.surveyTab = Ti.UI.createTab(
  { window: $.__views.surveyWin, id: "surveyTab", title: "Survey" });

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
    Alloy.Globals.Sites = [];
    console.log(Alloy.Globals.Sites);
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