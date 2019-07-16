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
  { exitOnClose: false, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, tabBarHidden: true, id: "species" });

  $.__views.species && $.addTopLevelView($.__views.species);
  $.__views.speciesTable = Ti.UI.createTableView(
  { id: "speciesTable" });

  $.__views.species.add($.__views.speciesTable);
  select ? $.addListener($.__views.speciesTable, 'click', select) : __defers['$.__views.speciesTable!click!select'] = true;exports.destroy = function () {};




  _.extend($, $.__views);



  var args = $.args;

  var columnCounter = 0;
  var creatureData = [];
  var creatureData1 = [];
  Alloy.Globals.Sites = [];

  var row,left,container,img,text = '';




  for (var i = 1; i < 19; i++) {
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


  $.speciesTable.setData(creatureData);

  creatureData = [];
  creatureData = null;

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





  __defers['$.__views.speciesTable!click!select'] && $.addListener($.__views.speciesTable, 'click', select);



  _.extend($, exports);
}

module.exports = Controller;