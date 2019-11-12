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

  // Generated code that must be executed before all UI and/or
  // controller code. One example is all model and collection
  // declarations from markup.


  // Generated UI code
  $.__views.sitesWin = Ti.UI.createWindow(
  { backgroundColor: "white", exitOnClose: true, navBarHidden: true, fullscreen: true, height: Ti.UI.FILL, width: Ti.UI.FILL, orientationModes: [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT], id: "sitesWin", title: "Dive Sites" });

  var __alloyId6 = [];
  $.__views.mapview = (require("ti.map").createView || Ti.UI.createView)(
  { region: { latitude: 32.74511, longitude: -16.99232, latitudeDelta: 1.11, longitudeDelta: 1.11 }, annotations: __alloyId6, id: "mapview" });

  $.__views.sitesWin.add($.__views.mapview);
  report ? $.addListener($.__views.mapview, 'click', report) : __defers['$.__views.mapview!click!report'] = true;$.__views.sitesTab = Ti.UI.createTab(
  { window: $.__views.sitesWin, id: "sitesTab", title: "Sites" });

  $.__views.sitesTab && $.addTopLevelView($.__views.sitesTab);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  // =====
  // SITES

  function report(event) {

  } //Ti.API.info('Annotation ' + event.title + ' clicked, ID: ' + event.annotation.myID);


  //Creating eventListner to the pins on the map
  $.mapview.addEventListener('click', function (e) {
    // if user click on rightButton of annotaion
    //console.log(e.clicksource);
    if (e.clicksource == 'leftPane') {

      var species = Alloy.createController('species').getView();
      species.open();
      species = null;
    }
  });

  getTodoList();

  function getTodoList() {
    //function to use HTTP to connect to a web server and transfer the data. 
    var sendit = Ti.Network.createHTTPClient({
      onerror: function (e) {
        Ti.App.Properties.setList('myLatitudes', Alloy.Globals.Latitudes);
        Ti.App.Properties.setList('myLongitudes', Alloy.Globals.Longitudes);
        Ti.App.Properties.setList('myAddress', Alloy.Globals.Address);
        Ti.App.Properties.setList('myDepth', Alloy.Globals.Depth);

        for (var i = 0; i < Ti.App.Properties.getList('mySites').length; i++) {
          //Putting into string format the JSON values
          var lat = JSON.stringify(Ti.App.Properties.getList('mySites')[i]);
          var lon = JSON.stringify(Ti.App.Properties.getList('mySites')[i]);
          //
          //Slicing the values for cleaner look
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
              width: 70 })

            //leftButton: 'appcelerator.gif'
          });
          //annotations[i] = pin;
          Alloy.Globals.Pin.push(pin);
          //$.mapview.annotations = Alloy.Globals.Pin;
          $.mapview.addAnnotations([Alloy.Globals.Pin[i]]);

        }
      },
      timeout: 1000 });

    //Here you have to change it for your local ip
    sendit.open("GET", "http://backend.tigerwhale.com/api/diving-spot");
    sendit.send();


    //Function to be called upon a successful response 
    sendit.onload = function () {
      //Emptying the data to refresh the view 
      //Parsing into JSON fromat
      var json = JSON.parse(this.responseText);
      if (!json) {
        Titanium.API.info('Error - Null return!');
        return;
      }
      //Saving into var values from php page
      var jsonsites = json.data;
      var pos;

      for (pos = 0; pos < jsonsites.length; pos++) {
        //Pushing into array evry value
        Alloy.Globals.Latitudes.push(jsonsites[pos].latitude);
        Alloy.Globals.Longitudes.push(jsonsites[pos].longitude);
        Alloy.Globals.Address.push(jsonsites[pos].description);
        Alloy.Globals.Depth.push(jsonsites[pos].substract);
      }

      Ti.App.Properties.setList('myLatitudes', Alloy.Globals.Latitudes);
      Ti.App.Properties.setList('myLongitudes', Alloy.Globals.Longitudes);
      Ti.App.Properties.setList('myAddress', Alloy.Globals.Address);
      Ti.App.Properties.setList('myDepth', Alloy.Globals.Depth);

      //var annotations = [];

      for (var i = 0; i < Alloy.Globals.Sites.length; i++) {
        //Putting into string format the JSON values
        var lat = JSON.stringify(Alloy.Globals.Latitudes[i]);
        var lon = JSON.stringify(Alloy.Globals.Longitudes[i]);
        //
        //Slicing the values for cleaner look
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
            width: 70 })

          //leftButton: 'appcelerator.gif'
        });
        //annotations[i] = pin;
        Alloy.Globals.Pin.push(pin);
        //$.mapview.annotations = Alloy.Globals.Pin;
        $.mapview.addAnnotations([Alloy.Globals.Pin[i]]);

      }
    };
  };



  /*
         $.mapview.addEventListener('click', function(e) {
            Ti.API.info("Opening detail window");
            var main = Alloy.createController('main').getView();
            main.open();
        });*/

  /*
                       $.sites.addEventListener('click',function(evt)
                       {
                           // map event properties 
                           var annotation = evt.annotation;
                           var title = evt.title;
                           var clickSource = evt.clicksource;
                       
                          // Titanium.API.info('MAPVIEW EVENT - you clicked on '+title+' with click source = '+clickSource);
                       
                       if (clickSource == 'rightButton'){
                          
                           $.sites.close();
                           openMain();
                       }
                       });
                       
                       function openMain() {
                       	var main = Alloy.createController('main').getView();
                       		main.open();
                       		main = null;		
                       }
                       //Cleaning workspace 
                       */
  function select(e) {
    if (e.source.id) {
      console.log(e.source.id);

      //clear
      //img, row, speciesTable = null;

      // close
      // $.species.close();

      // open
      // Alloy.createController('specie_detail', {img : e.source.id}).getView().open();            
    }
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.
  __defers['$.__views.mapview!click!report'] && $.addListener($.__views.mapview, 'click', report);

  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file://C:\Users\claud\Documents\dive/build/map/Resources\android\alloy\controllers\sites.js.map