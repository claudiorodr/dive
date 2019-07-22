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
  { backgroundColor: "white", exitOnClose: false, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, tabBarHidden: true, id: "specieDetailWin", title: "Specie Details" });

  $.__views.specieDetailWin && $.addTopLevelView($.__views.specieDetailWin);
  $.__views.header = Ti.UI.createView(
  { backgroundColor: "#f8f8f8", width: "50%", height: "100%", left: 0, id: "header" });

  $.__views.specieDetailWin.add($.__views.header);
  $.__views.image = Ti.UI.createView(
  { id: "image" });

  $.__views.header.add($.__views.image);
  $.__views.body = Ti.UI.createView(
  { layout: "vertical", width: "25%", left: "50%", height: "100%", id: "body" });

  $.__views.specieDetailWin.add($.__views.body);
  $.__views.body2 = Ti.UI.createView(
  { layout: "vertical", width: "30%", right: 0, height: "100%", id: "body2" });

  $.__views.specieDetailWin.add($.__views.body2);
  $.__views.picker = Ti.UI.createPicker(
  { top: "20%", right: "5%", selectionIndicator: true, font: { fontFamily: "Raleway-Bold" }, id: "picker", useSpinner: false });

  $.__views.body2.add($.__views.picker);
  var __alloyId7 = [];$.__views.Abundance = Ti.UI.createPickerColumn(
  { id: "Abundance" });

  __alloyId7.push($.__views.Abundance);
  $.__views.__alloyId8 = Ti.UI.createPickerRow(
  { title: "Low (1)", id: "__alloyId8" });

  $.__views.Abundance.addRow($.__views.__alloyId8);
  $.__views.__alloyId9 = Ti.UI.createPickerRow(
  { title: "Medium (2-3)", id: "__alloyId9" });

  $.__views.Abundance.addRow($.__views.__alloyId9);
  $.__views.__alloyId10 = Ti.UI.createPickerRow(
  { title: "High (4-5)", id: "__alloyId10" });

  $.__views.Abundance.addRow($.__views.__alloyId10);
  $.__views.__alloyId11 = Ti.UI.createPickerRow(
  { title: "Very High (>5)", id: "__alloyId11" });

  $.__views.Abundance.addRow($.__views.__alloyId11);
  $.__views.picker.add(__alloyId7);
  $.__views.moreBtn = Ti.UI.createButton(
  { font: { fontFamily: "Raleway-SemiBold", fontSize: 20 }, title: "Add specie", bottom: "15%", width: "70%", color: "white", height: 40, backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, id: "moreBtn" });

  $.__views.body2.add($.__views.moreBtn);
  openMore ? $.addListener($.__views.moreBtn, 'click', openMore) : __defers['$.__views.moreBtn!click!openMore'] = true;$.__views.endBtn = Ti.UI.createButton(
  { font: { fontFamily: "Raleway-SemiBold", fontSize: 20 }, title: "End survey", bottom: "0%", width: "70%", color: "white", height: 40, backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, id: "endBtn" });

  $.__views.body2.add($.__views.endBtn);
  openMain ? $.addListener($.__views.endBtn, 'click', openMain) : __defers['$.__views.endBtn!click!openMain'] = true;exports.destroy = function () {};




  _.extend($, $.__views);



  var args = $.args;



































































































  var l = Titanium.UI.createLabel({
    text: 'Common name:',
    font: { fontFamily: 'Raleway-Bold',
      fontSize: 14 },
    left: "10%",
    top: "15%",
    width: 300,
    height: 'auto' });


  $.body.add(l);

  var ll = Titanium.UI.createLabel({
    text: 'Scientific name:',
    font: { fontFamily: 'Raleway-Bold',
      fontSize: 14 },
    left: "10%",
    top: "25%",
    width: 300,
    height: 'auto' });


  $.body.add(ll);

  var lll = Titanium.UI.createLabel({
    text: 'Habitat:',
    font: { fontFamily: 'Raleway-Bold',
      fontSize: 14 },
    left: "10%",
    top: "35%",
    width: 300,
    height: 'auto' });


  $.body.add(lll);

  var img = Ti.UI.createImageView({
    top: "15%",
    left: "0%",
    width: "100%",
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
        var descriptioner = description.slice(1, -1);

        if (args.img == i + 1) {
          var ta1 = Titanium.UI.createTextArea({
            value: namer,
            height: 35,
            width: 150,
            left: "10%",
            top: "18%",
            font: {
              fontSize: 14,
              fontFamily: 'Raleway-Bold' },


            color: '#888',
            textAlign: 'left',
            borderWidth: 2,
            borderColor: '#bbb',
            borderRadius: 5,
            suppressReturn: false,
            editable: false });


          $.body.add(ta1);

          var ta2 = Titanium.UI.createTextArea({
            value: sciencer,
            height: 35,
            width: 'auto',
            left: "10%",
            top: "28%",
            font: {
              fontSize: 14,
              fontFamily: 'Raleway-Bold' },


            color: '#888',
            textAlign: 'left',
            borderWidth: 2,
            borderColor: '#bbb',
            borderRadius: 5,
            suppressReturn: false,
            editable: false });


          $.body.add(ta2);

          var ta3 = Titanium.UI.createTextArea({
            value: descriptioner,
            height: 'auto',
            width: 150,
            left: "10%",
            top: "38%",
            font: {
              fontSize: 14,
              fontFamily: 'Raleway-Bold' },


            color: '#888',
            textAlign: 'left',
            borderWidth: 2,
            borderColor: '#bbb',
            borderRadius: 5,
            suppressReturn: false,
            editable: false });


          $.body.add(ta3);
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

      var date = new Date();
      var y = date.getFullYear();
      var mo = date.getMonth() + 1;
      var da = date.getDate();
      var d = y + "-" + mo + "-" + da;
      var h = date.getHours();
      var m = date.getMinutes();
      var s = date.getSeconds();
      var x = h + ":" + m + ":" + s;

      var params = {








        "user_id": "1",
        "creature_id": args.img,
        "abundance_value": "1",
        "number_diver": parseInt(survey[2]),
        "dive_time": parseInt(survey[1]),
        "diving_spot_id": survey[0] + 1,
        "max_depth": "1",
        "date": d + " " + x };


      request.send(params);
      alert(params);



      params = {
        "user_id": "",
        "creature_id": "",
        "abundance_value": "",
        "number_diver": "",
        "dive_time": "",
        "diving_spot_id": "",
        "max_depth": "",
        "dive_id": "",
        "date": "" };


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