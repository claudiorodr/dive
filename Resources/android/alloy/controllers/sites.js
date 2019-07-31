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
  this.__controllerPath = 'sites';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};







  $.__views.sitesWin = Ti.UI.createWindow(
  { backgroundColor: "white", exitOnClose: true, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, orientationModes: [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT], id: "sitesWin", title: "Dive Sites" });

  var __alloyId7 = [];
  $.__views.mapview = (require("ti.map").createView || Ti.UI.createView)(
  { region: { latitude: 32.74511, longitude: -16.99232, latitudeDelta: 1.11, longitudeDelta: 1.11 }, annotations: __alloyId7, id: "mapview" });

  $.__views.sitesWin.add($.__views.mapview);
  report ? $.addListener($.__views.mapview, 'click', report) : __defers['$.__views.mapview!click!report'] = true;$.__views.sitesTab = Ti.UI.createTab(
  { window: $.__views.sitesWin, id: "sitesTab", title: "Sites" });

  $.__views.sitesTab && $.addTopLevelView($.__views.sitesTab);
  exports.destroy = function () {};




  _.extend($, $.__views);





  function report(event) {

  }



  $.mapview.addEventListener('click', function (e) {


    if (e.clicksource == 'leftPane') {

      var species = Alloy.createController('species').getView();
      species.open();
      species = null;
    }
  });

  getTodoList();

  function getTodoList() {

    var sendit = Ti.Network.createHTTPClient({
      onerror: function (e) {
        Ti.App.Properties.setList('myLatitudes', Alloy.Globals.Latitudes);
        Ti.App.Properties.setList('myLongitudes', Alloy.Globals.Longitudes);
        Ti.App.Properties.setList('myAddress', Alloy.Globals.Address);
        Ti.App.Properties.setList('myDepth', Alloy.Globals.Depth);

        for (var i = 0; i < Ti.App.Properties.getList('mySites').length; i++) {

          var lat = JSON.stringify(Ti.App.Properties.getList('mySites')[i]);
          var lon = JSON.stringify(Ti.App.Properties.getList('mySites')[i]);


          var lati = lat.slice(1, -1);
          var loni = lon.slice(1, -1);


          pin = Alloy.Globals.Map.createAnnotation({
            latitude: lati,
            longitude: loni,
            title: Alloy.Globals.Sites[i],
            subtitle: Alloy.Globals.Address[i] + "\n " + Alloy.Globals.Depth[i],
            animate: true,
            pincolor: Alloy.Globals.Map.ANNOTATION_BLUE,
            leftView: Ti.UI.createButton({
              title: 'SEE MORE',
              height: 32,
              width: 70 }) });




          Alloy.Globals.Pin.push(pin);

          $.mapview.addAnnotations([Alloy.Globals.Pin[i]]);

        }
      },
      timeout: 1000 });


    sendit.open("GET", "http://backend.tigerwhale.com/api/diving-spot");
    sendit.send();



    sendit.onload = function () {


      var json = JSON.parse(this.responseText);
      if (!json) {
        Titanium.API.info('Error - Null return!');
        return;
      }

      var jsonsites = json.data;
      var pos;

      for (pos = 0; pos < jsonsites.length; pos++) {

        Alloy.Globals.Latitudes.push(jsonsites[pos].latitude);
        Alloy.Globals.Longitudes.push(jsonsites[pos].longitude);
        Alloy.Globals.Address.push(jsonsites[pos].description);
        Alloy.Globals.Depth.push(jsonsites[pos].substract);
      }

      Ti.App.Properties.setList('myLatitudes', Alloy.Globals.Latitudes);
      Ti.App.Properties.setList('myLongitudes', Alloy.Globals.Longitudes);
      Ti.App.Properties.setList('myAddress', Alloy.Globals.Address);
      Ti.App.Properties.setList('myDepth', Alloy.Globals.Depth);



      for (var i = 0; i < Alloy.Globals.Sites.length; i++) {

        var lat = JSON.stringify(Alloy.Globals.Latitudes[i]);
        var lon = JSON.stringify(Alloy.Globals.Longitudes[i]);


        var lati = lat.slice(1, -1);
        var loni = lon.slice(1, -1);


        pin = Alloy.Globals.Map.createAnnotation({
          latitude: lati,
          longitude: loni,
          title: Alloy.Globals.Sites[i],
          subtitle: Alloy.Globals.Address[i] + "\n " + Alloy.Globals.Depth[i],
          animate: true,
          pincolor: Alloy.Globals.Map.ANNOTATION_BLUE,
          leftView: Ti.UI.createButton({
            title: 'SEE MORE',
            height: 32,
            width: 70 }) });




        Alloy.Globals.Pin.push(pin);

        $.mapview.addAnnotations([Alloy.Globals.Pin[i]]);

      }
    };
  };


































  function select(e) {
    if (e.source.id) {
      console.log(e.source.id);









    }
  }





  __defers['$.__views.mapview!click!report'] && $.addListener($.__views.mapview, 'click', report);



  _.extend($, exports);
}

module.exports = Controller;