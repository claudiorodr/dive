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

  // Generated code that must be executed before all UI and/or
  // controller code. One example is all model and collection
  // declarations from markup.


  // Generated UI code
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
  { text: "Insert the abundance of the fish:", font: { fontFamily: "Raleway-Bold", fontSize: 14 }, top: "3%", width: 300, height: Titanium.UI.SIZE, id: "label" });

  $.__views.scrollView.add($.__views.label);
  $.__views.picker = Ti.UI.createPicker(
  { top: "2%", left: "9%", width: "70%", textAlign: "center", font: { fontFamily: "Raleway-Light", fontSize: 16 }, color: "#0099ff", hintTextColor: "gray", backgroundColor: "#EEEEEE", borderColor: "#0099ff", borderRadius: 6, height: 40, id: "picker", selectionIndicator: true, useSpinner: false });

  $.__views.scrollView.add($.__views.picker);
  var __alloyId7 = [];$.__views.abundance = Ti.UI.createPickerColumn(
  { id: "abundance" });

  __alloyId7.push($.__views.abundance);
  $.__views.picker.add(__alloyId7);
  $.__views.button = Ti.UI.createView(
  { layout: "vertical", bottom: 0, height: Titanium.UI.SIZE, id: "button" });

  $.__views.scrollView.add($.__views.button);
  $.__views.moreBtn = Ti.UI.createButton(
  { top: 10, font: { fontFamily: "Raleway-SemiBold", fontSize: 20 }, title: "Add specie", width: "70%", color: "white", height: 40, backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, left: "9%", id: "moreBtn" });

  $.__views.button.add($.__views.moreBtn);
  openMore ? $.addListener($.__views.moreBtn, 'click', openMore) : __defers['$.__views.moreBtn!click!openMore'] = true;$.__views.endBtn = Ti.UI.createButton(
  { bottom: 5, font: { fontFamily: "Raleway-SemiBold", fontSize: 20 }, title: "End survey", width: "70%", color: "white", height: 40, backgroundColor: "#0099ff", borderColor: "#EEEEEE", borderRadius: 6, top: 10, left: "9%", id: "endBtn" });

  $.__views.button.add($.__views.endBtn);
  openMain ? $.addListener($.__views.endBtn, 'click', openMain) : __defers['$.__views.endBtn!click!openMain'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  // Arguments passed into this controller can be accessed via the `$.args` object directly or:
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
    text: 'Size:',
    font: { fontFamily: 'Raleway-Bold',
      fontSize: 14 },
    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.conserv.add(a);

  var aa = Titanium.UI.createLabel({
    text: 'Conservation Status:',
    font: { fontFamily: 'Raleway-Bold',
      fontSize: 14 },
    left: "10%",
    top: 0,
    width: 300,
    height: 'auto' });


  $.size.add(aa);

  // 	var aaa = Titanium.UI.createLabel({
  // 	text:'Curiosity:',
  // 	font:{fontFamily: 'Raleway-Bold',
  // 		  fontSize:14},
  // 	left:"10%",
  // 	top:0,
  // 	width:300,
  // 	height:'auto'
  // });

  // $.curiosity.add(aaa);
  var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, args.img + '.png');
  var img = Ti.UI.createImageView({
    top: "0%",
    left: "-10%",
    width: "120%",
    height: "100%",
    image: file, // + ".jpg",
    verticalAlign: 'center' });


  $.image.add(img);

  for (var i = 0; i < Ti.App.Properties.getList('myNmaes').length; i++) {
    //Putting into string format the JSON values
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
    var leveler = level.slice(1, -1);

    var level2 = JSON.stringify(Ti.App.Properties.getList('myLevel2')[i]);
    var leveler2 = level2.slice(1, -1);

    var level3 = JSON.stringify(Ti.App.Properties.getList('myLevel3')[i]);
    var leveler3 = level3.slice(1, -1);

    var level4 = JSON.stringify(Ti.App.Properties.getList('myLevel4')[i]);
    var leveler4 = level4.slice(1, -1);

    if (args.img == i + 1) {

      var ta1 = Titanium.UI.createLabel({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        // color : "#0099ff",
        // hintTextColor : "gray",
        // backgroundColor : "#EEEEEE",
        // borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        // borderColor : "#0099ff",
        // borderRadius : 6,
        height: 'auto',
        text: namer
        // editable: false
      });

      $.common.add(ta1);

      var ta2 = Titanium.UI.createLabel({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        // color : "#0099ff",
        // hintTextColor : "gray",
        // backgroundColor : "#EEEEEE",
        // borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        // borderColor : "#0099ff",
        // borderRadius : 6,
        height: 'auto',
        text: sciencer
        // editable: false
      });

      $.science.add(ta2);


      var ta4 = Titanium.UI.createLabel({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        // color : "#0099ff",
        // hintTextColor : "gray",
        // backgroundColor : "#EEEEEE",
        // borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        // borderColor : "#0099ff",
        // borderRadius : 6,
        height: 'auto',
        text: sizer
        // editable: false
      });

      $.conserv.add(ta4);

      var ta5 = Titanium.UI.createLabel({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        // color : "#0099ff",
        // hintTextColor : "gray",
        // backgroundColor : "#EEEEEE",
        // borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        // borderColor : "#0099ff",
        // borderRadius : 6,
        height: 'auto',
        text: conservtioner
        // editable: false
      });

      $.size.add(ta5);

      var ta3 = Titanium.UI.createLabel({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        // color : "#0099ff",
        // hintTextColor : "gray",
        // backgroundColor : "#EEEEEE",
        // borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        // borderColor : "#0099ff",
        // borderRadius : 6,
        height: Titanium.UI.SIZE,
        text: descriptioner
        // editable: false
      });

      $.description.add(ta3);

      var ta6 = Titanium.UI.createLabel({
        left: "9%",
        width: "70%",
        textAlign: "center",
        font: {
          fontFamily: 'Raleway-Light',
          fontSize: 14 },

        // color : "#0099ff",
        // hintTextColor : "gray",
        // backgroundColor : "#EEEEEE",
        // borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        // borderColor : "#0099ff",
        // borderRadius : 6,
        height: Titanium.UI.SIZE,
        text: curiositier
        // editable: false
      });

      // $.curiosity.add(ta6);

      var row = Ti.UI.createPickerRow({
        title: leveler,
        myId: i,
        color: "#0099ff" });


      $.abundance.addRow(row);

      var row2 = Ti.UI.createPickerRow({
        title: leveler2,
        myId: i,
        color: "#0099ff" });


      $.abundance.addRow(row2);

      var row3 = Ti.UI.createPickerRow({
        title: leveler3,
        myId: i,
        color: "#0099ff" });


      $.abundance.addRow(row3);

      var row4 = Ti.UI.createPickerRow({
        title: leveler4,
        myId: i,
        color: "#0099ff" });


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
    //if there is something in the textbox

    var request = Ti.Network.createHTTPClient({

      onload: function (e) {

        if (this.status == '200') {
        }

      },

      onerror: function (e) {
        Ti.App.Properties.setList('myParams', params);
        //Ti.API.debug(e.error);
        //alert('There was an error during the conexion');
        //alert(Ti.App.Properties.getList('myParams'));
      },

      timeout: 1000 });

    //Request the data from the web service, Here you have to change it for your local ip
    request.open("POST", "http://backend.tigerwhale.com/api/survey");
    //alert(Alloy.Globals.Species[4],survey[2],survey[1],survey[0]);
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
      "user_id": "1", //Ti.App.Properties.getObject('user'), Ti.App.Properties.getObject('user').id,
      "creature_id": args.img,
      "abundance_value": selectedRow, //Alloy.Globals.Species[4].match(/\d/g).join(""),
      "number_diver": parseInt(survey[2]),
      "dive_time": parseInt(survey[1]),
      "diving_spot_id": survey[0] + 1,
      "max_depth": "1",
      "date": d + " " + x };

    Ti.App.Properties.setList('myParams', params);
    console.log(params);

    request.send(params);

    //Clean of parameters

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
    //img, l, ll, lll, ta1, ta2, ta3, specie_detail = null;
    Alloy.Globals.Species.push(args.img, selectedRow3);

    survey = Alloy.Globals.Species.slice(0, 3);

    insertData();
    Alloy.Globals.Species = Alloy.Globals.Species.slice(0, 3);

    alert("Specie Added!");

  }
  function openMoreBack() {


    var selectedRow3 = $.picker.getSelectedRow(0).title;
    var species = Alloy.createController('species').getView();
    species.open();
    species = null;
    //img, l, ll, lll, ta1, ta2, ta3, specie_detail = null;
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
    //Inserting into HTTP request from Backend

    var main = Alloy.createController('survey').getView();
    main.open();
    main = null;
    // img, l, ll, lll, ta1, ta2, ta3, specie_detail = null; 
  }

  $.specieDetailWin.addEventListener('androidback', function (e) {
    species = null;
    //img, l, ll, lll, ta1, ta2, ta3, specie_detail = null;
    openMoreBack();
  });

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views.moreBtn!click!openMore'] && $.addListener($.__views.moreBtn, 'click', openMore);__defers['$.__views.endBtn!click!openMain'] && $.addListener($.__views.endBtn, 'click', openMain);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file://C:\Users\claud\Documents\dive/build/map/Resources\android\alloy\controllers\specie_detail.js.map