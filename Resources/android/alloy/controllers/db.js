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
  this.__controllerPath = 'db';
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
  $.__views.db = Ti.UI.createView(
  { id: "db" });

  $.__views.db && $.addTopLevelView($.__views.db);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  /*// Arguments passed into this controller can be accessed via the `$.args` object directly or:
  var args = $.args;
  
  var db = Ti.Database.open(‘wave’);
  var specie = “SELECT * FROM sqlite_master WHERE type=‘table’ AND name=‘specie’“;
              var specieTable = db.execute(specie);
                 console.log(“-- DB: specieTable: ” + cetaceanTable);
  var specie = “SELECT * FROM sqlite_master WHERE type=‘table’ AND name=‘cpecie’“;
              var specieTable = db.execute(specie);
                 console.log(“-- DB: specieTable: ” + specieTable);
                 
  db.execute(‘COMMIT’); // just if you have more tables
  specieTable.close();
              specieTable = null;
  // clears the memory
  
  db.close();
          db = null;*/

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file://C:\Users\claud\Documents\dive/build/map/Resources\android\alloy\controllers\db.js.map