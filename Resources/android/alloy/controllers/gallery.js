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
  this.__controllerPath = 'gallery';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.gallery = Ti.UI.createWindow(
  { backgroundImage: "/img/images/mainback.jpg", height: Ti.UI.FILL, width: Ti.UI.FILL, orientationModes: [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT], id: "gallery", title: "Gallery" });

  $.__views.galleryTable = Ti.UI.createTableView(
  { id: "galleryTable" });

  $.__views.gallery.add($.__views.galleryTable);
  select ? $.addListener($.__views.galleryTable, 'click', select) : __defers['$.__views.galleryTable!click!select'] = true;$.__views.galleryTab = Ti.UI.createTab(
  { window: $.__views.gallery, id: "galleryTab", title: "Gallery" });

  $.__views.galleryTab && $.addTopLevelView($.__views.galleryTab);
  exports.destroy = function () {};




  _.extend($, $.__views);



  var args = $.args;

  var columnCounter = 0;
  var creatureData = [];

  var row,left,container,img,text = '';


  for (var i = 1; i < 31; i++) {
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
      top: 10,
      width: 200,
      height: 200,
      image: "/img/species/" + i + ".jpg",
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


  $.galleryTable.setData(creatureData);


  creatureData = [];
  creatureData = null;
  row, left, container, img, text = null;

  function select(e) {
    if (e.source.id) {
      console.log(e.source.id);


      img, row, speciesTable = null;


      $.gallery.close();


      Alloy.createController('specie_info', { img: e.source.id }).getView().open();
    }
  }

  function openMain() {
    var main = Alloy.createController('main').getView();
    main.open();
    main = null;

  }

  $.gallery.addEventListener('androidback', function (e) {
    img, row, speciesTable = null;


    $.gallery.close();
    openMain();
  });





  __defers['$.__views.galleryTable!click!select'] && $.addListener($.__views.galleryTable, 'click', select);



  _.extend($, exports);
}

module.exports = Controller;