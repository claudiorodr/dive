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
  this.__controllerPath = 'species';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.species = Ti.UI.createWindow(
  { backgroundImage: "/img/images/mainback.jpg", exitOnClose: false, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, tabBarHidden: true, orientationModes: [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT], id: "species" });

  $.__views.species && $.addTopLevelView($.__views.species);
  var __alloyId18 = [];
  $.__views.speciesTable = Ti.UI.createTableView(
  { id: "speciesTable" });

  __alloyId18.push($.__views.speciesTable);
  select ? $.addListener($.__views.speciesTable, 'click', select) : __defers['$.__views.speciesTable!click!select'] = true;$.__views.speciesTable1 = Ti.UI.createTableView(
  { id: "speciesTable1" });

  __alloyId18.push($.__views.speciesTable1);
  select ? $.addListener($.__views.speciesTable1, 'click', select) : __defers['$.__views.speciesTable1!click!select'] = true;$.__views.scrollableView = Ti.UI.createScrollableView(
  { views: __alloyId18, id: "scrollableView", showPagingControl: true });

  $.__views.species.add($.__views.scrollableView);
  exports.destroy = function () {};




  _.extend($, $.__views);



  var args = $.args;

  var columnCounter = 0;
  var creatureData = [];
  var creatureData1 = [];
  Alloy.Globals.Sites = [];

  var row,left,container,img,text = '';




  var scrollView = Titanium.UI.createScrollableView({
    views: [],
    showPagingControl: true,
    pagingControlHeight: 30,
    maxZoomScale: 2.0,
    currentPage: 1 });


  for (var i = 1; i < 10; i++) {
    if (columnCounter == 0) {
      row = Ti.UI.createTableViewRow({
        className: "creature",
        top: 0,
        left: 0,
        width: 400,
        height: 200 });

      creatureData.push(row);
    }

    left = (columnCounter + 1) * 2 + columnCounter * 30;
    container = Ti.UI.createView({
      top: 0,
      left: left + "%",
      width: '30%',
      layout: "vertical" });

    row.add(container);


    img = Ti.UI.createImageView({
      id: i,

      width: 200,
      height: 200,
      image: "http://backend.tigerwhale.com/api/dive/image/" + i,
      verticalAlign: 'center' });


    container.add(img);


    text = Ti.UI.createLabel({
      bottom: 0,
      textAlign: "center",

      font: {
        fontFamily: 'Smoolthan-Bold',
        fontSize: 14 },

      color: "#FFFFFF" });

    container.add(text);

    columnCounter++;
    if (columnCounter == 3) {
      columnCounter = 0;
    }
  }

  for (var i = 10; i < 19; i++) {
    if (columnCounter == 0) {
      row = Ti.UI.createTableViewRow({
        className: "creature",
        top: 0,
        left: 0,
        width: 400,
        height: 200 });

      creatureData1.push(row);
    }

    left = (columnCounter + 1) * 2 + columnCounter * 30;
    container = Ti.UI.createView({
      top: 0,
      left: left + "%",
      width: '30%',
      layout: "vertical" });

    row.add(container);


    img = Ti.UI.createImageView({
      id: i,
      top: 10,
      width: 200,
      height: 200,
      image: "http://backend.tigerwhale.com/api/dive/image/" + i,
      verticalAlign: 'center' });


    container.add(img);


    text = Ti.UI.createLabel({
      bottom: 0,
      textAlign: "center",

      font: {
        fontFamily: 'Smoolthan-Bold',
        fontSize: 14 },

      color: "#FFFFFF" });

    container.add(text);

    columnCounter++;
    if (columnCounter == 3) {
      columnCounter = 0;
    }
  }

  $.speciesTable.setData(creatureData);
  $.speciesTable1.setData(creatureData1);

  creatureData = [];
  creatureData = null;
  creatureData1 = [];
  creatureData1 = null;
  row, left, container, img, text = null;

  function select(e) {
    if (e.source.id) {
      console.log(e.source.id);


      img, row, speciesTable = null;


      $.species.close();


      Alloy.createController('specie_detail', {
        img: e.source.id }).
      getView().open();
    }
  }

  function openMain() {
    var main = Alloy.createController('main').getView();
    main.open();
    main = null;

  }

  $.species.addEventListener('androidback', function (e) {
    img,
    row,
    speciesTable = null;


    $.species.close();
    openMain();
  });
  var args = $.args;

  var columnCounter = 0;
  var creatureData = [];
  var creatureData1 = [];

  var row,left,container,img,text = '';




  var scrollView = Titanium.UI.createScrollableView({
    views: [],
    showPagingControl: true,
    pagingControlHeight: 30,
    maxZoomScale: 2.0,
    currentPage: 1 });


  for (var i = 1; i < 10; i++) {
    if (columnCounter == 0) {
      row = Ti.UI.createTableViewRow({
        className: "creature",
        top: 0,
        left: 0,
        width: 400,
        height: 200 });

      creatureData.push(row);
    }

    left = (columnCounter + 1) * 2 + columnCounter * 30;
    container = Ti.UI.createView({
      top: 0,
      left: left + "%",
      width: '30%',
      layout: "vertical" });

    row.add(container);


    img = Ti.UI.createImageView({
      id: i,

      width: 200,
      height: 200,
      image: "http://backend.tigerwhale.com/api/dive/image/" + i,
      verticalAlign: 'center' });


    container.add(img);


    text = Ti.UI.createLabel({
      bottom: 0,
      textAlign: "center",

      font: {
        fontFamily: 'Smoolthan-Bold',
        fontSize: 14 },

      color: "#FFFFFF" });

    container.add(text);

    columnCounter++;
    if (columnCounter == 3) {
      columnCounter = 0;
    }
  }

  for (var i = 10; i < 19; i++) {
    if (columnCounter == 0) {
      row = Ti.UI.createTableViewRow({
        className: "creature",
        top: 0,
        left: 0,
        width: 400,
        height: 200 });

      creatureData1.push(row);
    }

    left = (columnCounter + 1) * 2 + columnCounter * 30;
    container = Ti.UI.createView({
      top: 0,
      left: left + "%",
      width: '30%',
      layout: "vertical" });

    row.add(container);


    img = Ti.UI.createImageView({
      id: i,
      top: 10,
      width: 200,
      height: 200,
      image: "http://backend.tigerwhale.com/api/dive/image/" + i,
      verticalAlign: 'center' });


    container.add(img);


    text = Ti.UI.createLabel({
      bottom: 0,
      textAlign: "center",

      font: {
        fontFamily: 'Smoolthan-Bold',
        fontSize: 14 },

      color: "#FFFFFF" });

    container.add(text);

    columnCounter++;
    if (columnCounter == 3) {
      columnCounter = 0;
    }
  }

  $.speciesTable.setData(creatureData);
  $.speciesTable1.setData(creatureData1);

  creatureData = [];
  creatureData = null;
  creatureData1 = [];
  creatureData1 = null;
  row, left, container, img, text = null;

  function select(e) {
    if (e.source.id) {
      console.log(e.source.id);


      img, row, speciesTable = null;


      $.species.close();


      Alloy.createController('specie_detail', {
        img: e.source.id }).
      getView().open();
    }
  }

  function openMain() {

    var main = Alloy.createController('main').getView();
    main.open();
    main = null;

  }

  $.species.addEventListener('androidback', function (e) {
    img,
    row,
    speciesTable = null;
    console.log(Alloy.Globals.Sites);

    $.species.close();
    openMain();
  });





  __defers['$.__views.speciesTable!click!select'] && $.addListener($.__views.speciesTable, 'click', select);__defers['$.__views.speciesTable1!click!select'] && $.addListener($.__views.speciesTable1, 'click', select);



  _.extend($, exports);
}

module.exports = Controller;