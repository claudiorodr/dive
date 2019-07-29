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
  $.__views.common = Ti.UI.createView(
  { top: "15%", height: "70", id: "common" });

  $.__views.body.add($.__views.common);
  $.__views.science = Ti.UI.createView(
  { height: "70", id: "science" });

  $.__views.body.add($.__views.science);
  $.__views.conserv = Ti.UI.createView(
  { height: "70", id: "conserv" });

  $.__views.body.add($.__views.conserv);
  $.__views.size = Ti.UI.createView(
  { height: "70", id: "size" });

  $.__views.body.add($.__views.size);
  $.__views.description = Ti.UI.createView(
  { height: "auto", id: "description" });

  $.__views.body.add($.__views.description);
  $.__views.curiosity = Ti.UI.createView(
  { height: "70", id: "curiosity" });

  $.__views.body.add($.__views.curiosity);
  $.__views.body2 = Ti.UI.createView(
  { layout: "vertical", width: "30%", right: 0, height: "100%", id: "body2" });

  $.__views.specieDetailWin.add($.__views.body2);
  $.__views.label = Ti.UI.createLabel(
  { text: "Insert the abundance of the fish:", font: { fontFamily: "Raleway-Bold", fontSize: 14 }, top: 0, width: 300, height: "auto", id: "label" });

  $.__views.body2.add($.__views.label);
  $.__views.picker = Ti.UI.createPicker(
  { top: "20%", right: "5%", selectionIndicator: true, font: { fontFamily: "Raleway-Bold" }, id: "picker", useSpinner: false });

  $.__views.body2.add($.__views.picker);
  var __alloyId7 = [];$.__views.abundance = Ti.UI.createPickerColumn(
  { id: "abundance" });

  __alloyId7.push($.__views.abundance);
  $.__views.picker.add(__alloyId7);
  $.__views.button = Ti.UI.createView(
  { bottom: 0, height: "100", id: "button" });

  $.__views.body2.add($.__views.button);
  $.__views.moreBtn = Ti.UI.createButton(
  { font: { fontFamily: "Raleway-SemiBold", fontSize: 20 }, title: "Add specie", bottom: "15%", width: "70%", color: "white", height: 40, backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, top: 0, id: "moreBtn" });

  $.__views.button.add($.__views.moreBtn);
  openMore ? $.addListener($.__views.moreBtn, 'click', openMore) : __defers['$.__views.moreBtn!click!openMore'] = true;$.__views.endBtn = Ti.UI.createButton(
  { font: { fontFamily: "Raleway-SemiBold", fontSize: 20 }, title: "End survey", bottom: 0, width: "70%", color: "white", height: 40, backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, id: "endBtn" });

  $.__views.button.add($.__views.endBtn);
  openMain ? $.addListener($.__views.endBtn, 'click', openMain) : __defers['$.__views.endBtn!click!openMain'] = true;exports.destroy = function () {};




  _.extend($, $.__views);



  var args = $.args;

  var l = Titanium.UI.createLabel({
    text: 'Common name:',
    font: { fontFamily: 'Raleway-Bold',
      fontSize: 14 },
    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.common.add(l);

  var ll = Titanium.UI.createLabel({
    text: 'Scientific name:',
    font: { fontFamily: 'Raleway-Bold',
      fontSize: 14 },
    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.science.add(ll);

  var lll = Titanium.UI.createLabel({
    text: 'Description:',
    font: { fontFamily: 'Raleway-Bold',
      fontSize: 14 },
    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.description.add(lll);

  var a = Titanium.UI.createLabel({
    text: 'Conservation Status:',
    font: { fontFamily: 'Raleway-Bold',
      fontSize: 14 },
    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.conserv.add(a);

  var aa = Titanium.UI.createLabel({
    text: 'Size:',
    font: { fontFamily: 'Raleway-Bold',
      fontSize: 14 },
    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.size.add(aa);

  var aaa = Titanium.UI.createLabel({
    text: 'Curiosity:',
    font: { fontFamily: 'Raleway-Bold',
      fontSize: 14 },
    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.curiosity.add(aaa);
  var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, args.img + '.png');
  var img = Ti.UI.createImageView({
    top: "15%",
    left: "0%",
    width: "100%",
    height: "70%",
    image: file,
    verticalAlign: 'center' });


  $.image.add(img);

  for (var i = 0; i < Ti.App.Properties.getList('myNmaes').length; i++) {

    var name = JSON.stringify(Ti.App.Properties.getList('myNmaes')[i]);
    var namer = name.slice(1, -1);

    var science = JSON.stringify(Ti.App.Properties.getList('myScientific')[i]);
    var sciencer = science.slice(1, -1);

    var description = JSON.stringify(Ti.App.Properties.getList('myDescription')[i]);
    var descriptioner = description.slice(1, -1);

    var size = JSON.stringify(Ti.App.Properties.getList('mySize')[i]);
    var sizer = size.slice(1, -1);

    var conservtion = JSON.stringify(Ti.App.Properties.getList('myConservation')[i]);
    var conservtioner = conservtion.slice(1, -1);

    var curiosity = JSON.stringify(Ti.App.Properties.getList('myCuriosity')[i]);
    var curiositier = curiosity.slice(1, -1);

    var level = JSON.stringify(Ti.App.Properties.getList('myLevel')[i]);


    var level2 = JSON.stringify(Ti.App.Properties.getList('myLevel2')[i]);


    var level3 = JSON.stringify(Ti.App.Properties.getList('myLevel3')[i]);


    var level4 = JSON.stringify(Ti.App.Properties.getList('myLevel4')[i]);


    if (args.img == i + 1) {

      var ta1 = Titanium.UI.createTextArea({
        value: namer,
        height: 35,
        width: "auto",
        left: "10%",
        top: 20,
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


      $.common.add(ta1);

      var ta2 = Titanium.UI.createTextArea({
        value: sciencer,
        height: 35,
        width: 'auto',
        left: "10%",
        top: 20,
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


      $.science.add(ta2);

      var ta3 = Titanium.UI.createTextArea({
        value: descriptioner,
        height: "auto",
        width: 'auto',
        left: "10%",
        top: 20,
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


      $.description.add(ta3);

      var ta4 = Titanium.UI.createTextArea({
        value: sizer,
        height: 'auto',
        width: 150,
        left: "10%",
        top: 20,
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


      $.conserv.add(ta4);

      var ta5 = Titanium.UI.createTextArea({
        value: conservtioner,
        height: 'auto',
        width: 150,
        left: "10%",
        top: 20,
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


      $.size.add(ta5);

      var ta6 = Titanium.UI.createTextArea({
        value: curiositier,
        height: 'auto',
        width: 150,
        left: "10%",
        top: 20,
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


      $.curiosity.add(ta6);

      var row = Ti.UI.createPickerRow({
        title: level,
        myId: i });


      $.abundance.addRow(row);

      var row2 = Ti.UI.createPickerRow({
        title: level2,
        myId: i });


      $.abundance.addRow(row2);

      var row3 = Ti.UI.createPickerRow({
        title: level3,
        myId: i });


      $.abundance.addRow(row3);

      var row4 = Ti.UI.createPickerRow({
        title: level4,
        myId: i });


      $.abundance.addRow(row4);

    }
  };
  function checkJSON(_json) {
    try {
      JSON.parse(_json);
    } catch (e) {
      return false;
    }
    return true;
  }

  function insertData() {


    var request = Ti.Network.createHTTPClient({

      onload: function (e) {

        if (this.status == '200') {
        }

      },

      onerror: function (e) {
        Ti.App.Properties.setList('myParams', params);
        Ti.API.debug(e.error);
        alert('There was an error during the conexion');
        alert(Ti.App.Properties.getList('myParams'));
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

    var selectedRow = $.picker.getSelectedRow(0).title;

    var params = {

      "user_id": Ti.App.Properties.getObject('user'),
      "creature_id": args.img,
      "abundance_value": selectedRow,
      "number_diver": parseInt(survey[2]),
      "dive_time": parseInt(survey[1]),
      "diving_spot_id": survey[0] + 1,
      "max_depth": "1",
      "date": d + " " + x };

    Ti.App.Properties.setList('myParams', params);
    request.send(params);



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


  }


  function openMore() {

    var selectedRow3 = $.picker.getSelectedRow(0).title;
    var species = Alloy.createController('species').getView();
    species.open();
    species = null;

    Alloy.Globals.Species.push(args.img, selectedRow3);

    survey = Alloy.Globals.Species.slice(0, 3);

    insertData();
    Alloy.Globals.Species = Alloy.Globals.Species.slice(0, 3);


  }

  function openMain() {
    survey = Alloy.Globals.Species.slice(0, 3);
    for (i = 3; i < Alloy.Globals.Species.length; i += 2) {
      specie = Alloy.Globals.Species.slice(i, i + 2);


    }

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