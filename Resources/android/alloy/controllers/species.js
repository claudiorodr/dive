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
    left = 0;
    if (columnCounter == 0) {
      row = Ti.UI.createTableViewRow({
        className: "creature",
        top: 0,
        left: 0,

        height: Ti.UI.SIZE });

      creatureData.push(row);
    } else {
      left = columnCounter * 33.333;
    }


    container = Ti.UI.createView({
      top: 0,
      left: left + "%",
      width: '33.33%',
      height: Ti.UI.SIZE });


    row.add(container);


    img = Ti.UI.createImageView({
      id: i,

      width: "100%",

      image: "http://backend.tigerwhale.com/api/dive/image/" + i,
      verticalAlign: 'center' });


    container.add(img);



    container2 = Ti.UI.createView({
      bottom: 0,
      width: '100%',
      height: '25%',
      opacity: 0.55,
      backgroundColor: 'black' });



    text = Ti.UI.createLabel({

      text: Alloy.Globals.Names[i - 1],
      font: {
        fontFamily: 'Raleway-Bold',
        fontSize: 18 },

      color: "#FFFFFF" });

    container2.add(text);

    container.add(container2);

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