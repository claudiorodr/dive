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
  { layout: "vertical", width: "50%", left: "50%", height: "100%", id: "body" });

  $.__views.specieDetailWin.add($.__views.body);
  $.__views.scrollView = Ti.UI.createScrollView(
  { id: "scrollView", showVerticalScrollIndicator: true, showHorizontalScrollIndicator: true, layout: "vertical" });

  $.__views.body.add($.__views.scrollView);
  $.__views.common = Ti.UI.createView(
  { layout: "vertical", top: "5%", height: Titanium.UI.SIZE, id: "common" });

  $.__views.scrollView.add($.__views.common);
  $.__views.science = Ti.UI.createView(
  { layout: "vertical", height: Titanium.UI.SIZE, top: "1%", id: "science" });

  $.__views.scrollView.add($.__views.science);
  $.__views.conserv = Ti.UI.createView(
  { layout: "vertical", height: Titanium.UI.SIZE, top: "1%", id: "conserv" });

  $.__views.scrollView.add($.__views.conserv);
  $.__views.size = Ti.UI.createView(
  { layout: "vertical", height: Titanium.UI.SIZE, top: "1%", id: "size" });

  $.__views.scrollView.add($.__views.size);
  $.__views.description = Ti.UI.createView(
  { layout: "vertical", height: Titanium.UI.SIZE, top: "1%", id: "description" });

  $.__views.scrollView.add($.__views.description);
  $.__views.curiosity = Ti.UI.createView(
  { layout: "vertical", height: Titanium.UI.SIZE, top: "1%", id: "curiosity" });

  $.__views.scrollView.add($.__views.curiosity);
  $.__views.label = Ti.UI.createLabel(
  { text: "Insert the abundance of the fish:", font: { fontFamily: "Raleway-Bold", fontSize: 14 }, top: "5%", width: 300, height: Titanium.UI.SIZE, id: "label" });

  $.__views.scrollView.add($.__views.label);
  $.__views.picker = Ti.UI.createPicker(
  { right: "5%", selectionIndicator: true, font: { fontFamily: "Raleway-Bold" }, id: "picker", useSpinner: false });

  $.__views.scrollView.add($.__views.picker);
  var __alloyId0 = [];$.__views.abundance = Ti.UI.createPickerColumn(
  { id: "abundance" });

  __alloyId0.push($.__views.abundance);
  $.__views.picker.add(__alloyId0);
  $.__views.button = Ti.UI.createView(
  { bottom: 0, height: "100", id: "button" });

  $.__views.scrollView.add($.__views.button);
  $.__views.moreBtn = Ti.UI.createButton(
  { font: { fontFamily: "Raleway-SemiBold", fontSize: 20 }, title: "Add specie", width: "70%", color: "white", height: 40, backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, top: 0, id: "moreBtn" });

  $.__views.button.add($.__views.moreBtn);
  openMore ? $.addListener($.__views.moreBtn, 'click', openMore) : __defers['$.__views.moreBtn!click!openMore'] = true;$.__views.endBtn = Ti.UI.createButton(
  { font: { fontFamily: "Raleway-SemiBold", fontSize: 20 }, title: "End survey", width: "70%", color: "white", height: 40, backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, bottom: 0, id: "endBtn" });

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
    top: "0%",
    left: "-10%",
    width: "120%",
    height: "100%",
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

      var ta1 = Titanium.UI.createTextField({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        color: "#0099ff",
        hintTextColor: "gray",
        backgroundColor: "#EEEEEE",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor: "#0099ff",
        borderRadius: 6,
        height: 'auto',
        hintText: namer,
        editable: false });


      $.common.add(ta1);

      var ta2 = Titanium.UI.createTextField({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        color: "#0099ff",
        hintTextColor: "gray",
        backgroundColor: "#EEEEEE",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor: "#0099ff",
        borderRadius: 6,
        height: 'auto',
        hintText: sciencer,
        editable: false });


      $.science.add(ta2);

      var ta3 = Titanium.UI.createTextField({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        color: "#0099ff",
        hintTextColor: "gray",
        backgroundColor: "#EEEEEE",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor: "#0099ff",
        borderRadius: 6,
        height: 'auto',
        hintText: descriptioner,
        editable: false });


      $.description.add(ta3);

      var ta4 = Titanium.UI.createTextField({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        color: "#0099ff",
        hintTextColor: "gray",
        backgroundColor: "#EEEEEE",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor: "#0099ff",
        borderRadius: 6,
        height: 'auto',
        hintText: sizer,
        editable: false });


      $.conserv.add(ta4);

      var ta5 = Titanium.UI.createTextField({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        color: "#0099ff",
        hintTextColor: "gray",
        backgroundColor: "#EEEEEE",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor: "#0099ff",
        borderRadius: 6,
        height: 'auto',
        hintText: conservtioner,
        editable: false });


      $.size.add(ta5);

      var ta6 = Titanium.UI.createTextField({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        color: "#0099ff",
        hintTextColor: "gray",
        backgroundColor: "#EEEEEE",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        borderColor: "#0099ff",
        borderRadius: 6,
        height: Titanium.UI.FILL,
        hintText: curiositier,
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