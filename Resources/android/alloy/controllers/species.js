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

  // Generated code that must be executed before all UI and/or
  // controller code. One example is all model and collection
  // declarations from markup.


  // Generated UI code
  $.__views.species = Ti.UI.createWindow(
  { exitOnClose: false, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, tabBarHidden: true, id: "species" });

  $.__views.species && $.addTopLevelView($.__views.species);
  $.__views.speciesTable = Ti.UI.createTableView(
  { id: "speciesTable" });

  $.__views.species.add($.__views.speciesTable);
  select ? $.addListener($.__views.speciesTable, 'click', select) : __defers['$.__views.speciesTable!click!select'] = true;exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  // passed arguments
  var args = $.args;

  var columnCounter = 0;
  var creatureData = [];
  var creatureData1 = [];
  Alloy.Globals.Sites = [];
  Ti.App.Properties.getList('myNmaes').length = 0;

  var row,left,container,img,text = '';

  // prepare


  for (var i = 1; i < 19; i++) {
    left = 0;
    if (columnCounter == 0) {
      row = Ti.UI.createTableViewRow({
        className: "creature",
        top: 0,
        left: 0,
        // width: 400,
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
    var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, i + '.png');
    // creature
    img = Ti.UI.createImageView({
      id: i,
      //top : 10,
      width: "100%",
      // height: 200,
      image: file,
      verticalAlign: 'center'
      // title : creatures_array[i-1]~		
    });
    container.add(img);
    // view, bottom 0 width 100%, height 25%, background black 90%
    // label white

    container2 = Ti.UI.createView({
      bottom: 0,
      width: '100%',
      height: '25%',
      opacity: 0.75,
      backgroundColor: 'black' });


    // title
    text = Ti.UI.createLabel({
      //value : "Olá",
      text: Alloy.Globals.Names[i - 1],
      font: {
        fontFamily: 'Raleway-Bold',
        fontSize: 22 },

      color: "#FFFFFF" });

    container2.add(text);

    container.add(container2);

    columnCounter++;
    if (columnCounter == 3) {
      columnCounter = 0;
    }
  } // eof for

  // set
  $.speciesTable.setData(creatureData);
  // clear
  creatureData = [];
  creatureData = null;

  row, left, container, img, text = null;

  function select(e) {
    if (e.source.id) {
      console.log(e.source.id);

      //clear
      img, row, speciesTable = null;

      // close
      $.species.close();

      // open
      Alloy.createController('specie_detail', {
        img: e.source.id }).
      getView().open();
    }
  }


  function openMain() {
    var main = Alloy.createController('survey').getView();
    main.open();
    main = null;

  }

  $.species.addEventListener('androidback', function (e) {
    img,
    row,
    speciesTable = null;

    // close
    $.species.close();
    openMain();
  });

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views.speciesTable!click!select'] && $.addListener($.__views.speciesTable, 'click', select);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file://C:\Users\claud\Documents\dive/build/map/Resources\android\alloy\controllers\species.js.map