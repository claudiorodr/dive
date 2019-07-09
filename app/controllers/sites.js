// =====
// SITES

function report(event) {
	//Ti.API.info('Annotation ' + event.title + ' clicked, ID: ' + event.annotation.myID);
}


//Creating eventListner to the pins on the map
$.mapview.addEventListener('click', function(e){
        // if user click on rightButton of annotaion
        //console.log(e.clicksource);
        if (e.clicksource == 'leftPane') { 
            //navGroup.open(detailWindow);
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
			Ti.API.debug(e.error); 
			alert('There was an error during the connection');
		},
		timeout: 1000,
	});
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

		//var annotations = [];

		for (var i = 0; i < Alloy.Globals.Sites.length; i++) {
			//Putting into string format the JSON values
			var lat = JSON.stringify(Alloy.Globals.Latitudes[i]);
			var lon = JSON.stringify(Alloy.Globals.Longitudes[i]);
			//Slicing the values for cleaner look
			var lati = lat.slice(1,-1);
			var loni = lon.slice(1,-1);
			
			
			pin = Alloy.Globals.Map.createAnnotation({
		        latitude: lati,
		        longitude: loni ,
		        title: Alloy.Globals.Sites[i],  
		        subtitle: Alloy.Globals.Address[i] + "\n " + Alloy.Globals.Depth[i], 
		        animate: true,
		        pincolor: Alloy.Globals.Map.ANNOTATION_BLUE,
		        leftView: Ti.UI.createButton({
	            title: 'SEE MORE',
	            height: 32,
	            width: 70
	       		 })
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