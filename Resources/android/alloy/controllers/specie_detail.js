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
  this.__controllerPath = 'specie_detail';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.specieDetailWin = Ti.UI.createWindow(
  { backgroundImage: "/img/images/mainback.jpg", exitOnClose: false, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, tabBarHidden: true, id: "specieDetailWin", title: "Specie Details" });

  $.__views.specieDetailWin && $.addTopLevelView($.__views.specieDetailWin);
  $.__views.__alloyId8 = Ti.UI.createView(
  { id: "__alloyId8" });

  $.__views.specieDetailWin.add($.__views.__alloyId8);
  $.__views.__alloyId9 = Ti.UI.createLabel(
  { id: "__alloyId9" });

  $.__views.__alloyId8.add($.__views.__alloyId9);
  $.__views.image = Ti.UI.createView(
  { id: "image" });

  $.__views.__alloyId8.add($.__views.image);
  $.__views.picker = Ti.UI.createPicker(
  { top: "20%", right: "5%", selectionIndicator: true, id: "picker", useSpinner: false });

  $.__views.__alloyId8.add($.__views.picker);
  var __alloyId10 = [];$.__views.Abundance = Ti.UI.createPickerColumn(
  { id: "Abundance" });

  __alloyId10.push($.__views.Abundance);
  $.__views.__alloyId11 = Ti.UI.createPickerRow(
  { title: "Low (1)", id: "__alloyId11" });

  $.__views.Abundance.addRow($.__views.__alloyId11);
  $.__views.__alloyId12 = Ti.UI.createPickerRow(
  { title: "Medium (2-3)", id: "__alloyId12" });

  $.__views.Abundance.addRow($.__views.__alloyId12);
  $.__views.__alloyId13 = Ti.UI.createPickerRow(
  { title: "High (4-5)", id: "__alloyId13" });

  $.__views.Abundance.addRow($.__views.__alloyId13);
  $.__views.__alloyId14 = Ti.UI.createPickerRow(
  { title: "Very High (>5)", id: "__alloyId14" });

  $.__views.Abundance.addRow($.__views.__alloyId14);
  $.__views.picker.add(__alloyId10);
  $.__views.moreBtn = Ti.UI.createButton(
  { id: "moreBtn", title: "Add more species", right: "5%", bottom: "20%", width: "auto", height: 50 });

  $.__views.__alloyId8.add($.__views.moreBtn);
  openMore ? $.addListener($.__views.moreBtn, 'click', openMore) : __defers['$.__views.moreBtn!click!openMore'] = true;$.__views.endBtn = Ti.UI.createButton(
  { id: "endBtn", title: "End survey", right: "5%", bottom: "15%", width: "auto", height: 50 });

  $.__views.__alloyId8.add($.__views.endBtn);
  openMain ? $.addListener($.__views.endBtn, 'click', openMain) : __defers['$.__views.endBtn!click!openMain'] = true;exports.destroy = function () {};




  _.extend($, $.__views);



  var args = $.args;



































































































  var l = Titanium.UI.createLabel({
    text: 'Common name:',
    font: { fontSize: 14 },
    left: 10,
    top: "15%",
    width: 300,
    height: 'auto' });


  $.image.add(l);

  var ll = Titanium.UI.createLabel({
    text: 'Scientific name:',
    font: { fontSize: 14 },
    left: 10,
    top: "25%",
    width: 300,
    height: 'auto' });


  $.image.add(ll);

  var lll = Titanium.UI.createLabel({
    text: 'Habitat:',
    font: { fontSize: 14 },
    left: 10,
    top: "35%",
    width: 300,
    height: 'auto' });


  $.image.add(lll);

  var img = Ti.UI.createImageView({
    top: "15%",
    width: "42%",
    height: "70%",
    image: "http://backend.tigerwhale.com/api/dive/image/" + args.img,
    verticalAlign: 'center' });


  $.image.add(img);

  getTodoList();

  function getTodoList() {

    var sendit = Ti.Network.createHTTPClient({
      onerror: function (e) {
        Ti.API.debug(e.error);
        alert('There was an error during the connection');
      },
      timeout: 1000 });


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

        var science = JSON.stringify(Alloy.Globals.Scientific[i]);

        var sciencer = science.slice(1, -1);
        var description = JSON.stringify(Alloy.Globals.Description[i]);
        var sciencer = description.slice(1, -1);

        if (args.img == i + 1) {
          var ta1 = Titanium.UI.createTextArea({
            value: namer,
            height: 35,
            width: 150,
            left: 10,
            top: "18%",
            font: {
              fontSize: 14,
              fontFamily: 'Marker Felt',
              fontWeight: 'bold' },

            color: '#888',
            textAlign: 'left',
            borderWidth: 2,
            borderColor: '#bbb',
            borderRadius: 5,
            suppressReturn: false,
            editable: false });


          $.image.add(ta1);

          var ta2 = Titanium.UI.createTextArea({
            value: sciencer,
            height: 35,
            width: 'auto',
            left: 10,
            top: "28%",
            font: {
              fontSize: 14,
              fontFamily: 'Marker Felt',
              fontWeight: 'bold' },

            color: '#888',
            textAlign: 'left',
            borderWidth: 2,
            borderColor: '#bbb',
            borderRadius: 5,
            suppressReturn: false,
            editable: false });


          $.image.add(ta2);

          var ta3 = Titanium.UI.createTextArea({
            value: description,
            height: 'auto',
            width: 150,
            left: 10,
            top: "38%",
            font: {
              fontSize: 14,
              fontFamily: 'Marker Felt',
              fontWeight: 'bold' },

            color: '#888',
            textAlign: 'left',
            borderWidth: 2,
            borderColor: '#bbb',
            borderRadius: 5,
            suppressReturn: false,
            editable: false });


          $.image.add(ta3);
        }
      };
    };
  }

  function checkJSON(_json) {
    try {
      JSON.parse(_json);
    } catch (e) {
      return false;
    }
    return true;
  }


  function insertData() {

    if (Ti.Network.online) {
      var request = Ti.Network.createHTTPClient({

        onload: function (e) {

          if (this.status == '200') {

            alert("all alright");


          }

        },

        onerror: function (e) {
          Ti.API.debug(e.error);
          alert('There was an error during the conexion');
        },

        timeout: 1000 });


      request.open("POST", "http://backend.tigerwhale.com/api/survey");

      var params = {








        "user_id": "1",
        "creature_id": "2",
        "abundance_value": "ola",
        "number_diver": "12",
        "dive_time": "12",
        "diving_spot_id": "1",
        "max_depth": "1" };


      request.send(params);
      console.log(params);

      params = {
        "user_id": "",
        "creature_id": "",
        "abundance_value": "",
        "number_diver": "",
        "dive_time": "",
        "diving_spot_id": "",
        "max_depth": "",
        "dive_id": "" };


    } else
    {
      var params = {








        "user_id": "1",
        "creature_id": "2",
        "abundance_value": "ola",
        "number_diver": "12",
        "dive_time": "12",
        "diving_spot_id": "1",
        "max_depth": "1" };


      Ti.App.Properties.setList('params', params);
      Ti.App.Properties.getList('params');
    }

  };

  function openMore() {

    var selectedRow3 = $.picker.getSelectedRow(0).title;
    var species = Alloy.createController('species').getView();
    species.open();
    species = null;

    Alloy.Globals.Species.push(args.img, selectedRow3);

    survey = Alloy.Globals.Species.slice(0, 3);

    console.log(survey);
    console.log(Alloy.Globals.Species);
    insertData();
    Alloy.Globals.Species = Alloy.Globals.Species.slice(0, 3);
    console.log(Alloy.Globals.Species);

  }

  function openMain() {
    survey = Alloy.Globals.Species.slice(0, 3);
    for (i = 3; i < Alloy.Globals.Species.length; i += 2) {
      specie = Alloy.Globals.Species.slice(i, i + 2);
      console.log(specie);

    }

    console.log(survey);
    console.log(Alloy.Globals.Species);
    insertData();


    var main = Alloy.createController('main').getView();
    main.open();
    main = null;

  }

  $.specieDetailWin.addEventListener('androidback', function (e) {
    species = null;

    openMore();
  });





  __defers['$.__views.moreBtn!click!openMore'] && $.addListener($.__views.moreBtn, 'click', openMore);__defers['$.__views.endBtn!click!openMain'] && $.addListener($.__views.endBtn, 'click', openMain);



  _.extend($, exports);
}

module.exports = Controller;