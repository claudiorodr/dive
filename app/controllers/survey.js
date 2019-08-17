var args = $.args;

//Array to store the data from the todo list


//We execute the function to show the data for the first view 
getTodoList();
getTodoList2();
getTodoList3();
 
function getTodoList() { 
	//function to use HTTP to connect to a web server and transfer the data. 

	var sendit = Ti.Network.createHTTPClient({
		onerror: function (e) {
			for (var i = 0; i < Ti.App.Properties.getList('mySites').length; i++) {
			//Putting into string format the JSON values
			var spot = JSON.stringify(Ti.App.Properties.getList('mySites')[i]);
			//Slicing the values for cleaner look
			var spotter = spot.slice(1,-1);
			var row = Ti.UI.createPickerRow({
				title: spotter, 
				myId : i
			});

			$.column1.addRow(row);
		}
			
		},
		timeout: 10000,
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
		
		var jsonsites = json.data;
		var pos;
		
		for (pos = 0; pos < jsonsites.length; pos++) {
			//Pushing into array evry value			
			Alloy.Globals.Sites.push(jsonsites[pos].name);

		}
		Ti.App.Properties.setList('mySites',Alloy.Globals.Sites);

		for (var i = 0; i < Ti.App.Properties.getList('mySites').length; i++) {
			//Putting into string format the JSON values
			var spot = JSON.stringify(Ti.App.Properties.getList('mySites')[i]);
			//Slicing the values for cleaner look
			var spotter = spot.slice(1,-1);
			var row = Ti.UI.createPickerRow({
				title: spotter,
				myId : i
			});

			$.column1.addRow(row);
		}
	}; 
};

function getTodoList2() {
    //function to use HTTP to connect to a web server and transfer the data. 
    var sendit = Ti.Network.createHTTPClient({
        onerror: function(e) {
        for (var i = 0; i < Ti.App.Properties.getList('myNmaes').length; i++) {
            //Putting into string format the JSON values
            var name = JSON.stringify(Ti.App.Properties.getList('myNmaes')[i]);
            //Slicing the values for cleaner look 
            var namer = name.slice(1,-1);            
        };
        },
        timeout: 10000,
    });
    //Here you have to change it for your local ip  
    sendit.open("GET", "http://backend.tigerwhale.com/api/creature");
    sendit.send();


    //Function to be called upon a successful response 
    sendit.onload = function() {
        //Emptying the data to refresh the view 
        //Parsing into JSON fromat
        var json = JSON.parse(this.responseText);
        if (!json) {
            Titanium.API.info('Error - Null return!');
            return;
        }
        //Saving into var values from php page
        var jsonname = json.data;
        
        var pos;

        for (pos = 0; pos < jsonname.length; pos++) {
        	if(jsonname[pos].dive_center_app == 1){
            //Pushing into array evry value			
            Alloy.Globals.Names.push(jsonname[pos].name);
            Alloy.Globals.Scientific.push(jsonname[pos].name_scientific);		
            Alloy.Globals.Description.push(jsonname[pos].description);
            Alloy.Globals.Conservation.push(jsonname[pos].conserv);
            Alloy.Globals.Curiosity.push(jsonname[pos].curiosity);
            Alloy.Globals.Size.push(jsonname[pos].size); 
           }
            
        }
		Ti.App.Properties.setList('myNmaes',Alloy.Globals.Names);
		Ti.App.Properties.setList('myScientific',Alloy.Globals.Scientific);
		Ti.App.Properties.setList('myDescription',Alloy.Globals.Description);
		Ti.App.Properties.setList('myConservation',Alloy.Globals.Conservation);
		Ti.App.Properties.setList('myCuriosity',Alloy.Globals.Curiosity);
		Ti.App.Properties.setList('mySize',Alloy.Globals.Size);


        for (var i = 0; i < Ti.App.Properties.getList('myNmaes').length; i++) {
            //Putting into string format the JSON values
            var name = JSON.stringify(Ti.App.Properties.getList('myNmaes')[i]);
            //Slicing the values for cleaner look 
            var namer = name.slice(1,-1);            
        };
    };
}

function getTodoList3() {
    //function to use HTTP to connect to a web server and transfer the data. 
    var sendit = Ti.Network.createHTTPClient({
        onerror: function(e) {

        },
        timeout: 10000,
    });
    //Here you have to change it for your local ip  
    sendit.open("GET", "http://backend.tigerwhale.com/api/abundance");
    sendit.send();


    //Function to be called upon a successful response 
    sendit.onload = function() {
        //Emptying the data to refresh the view 
        //Parsing into JSON fromat
        var json = JSON.parse(this.responseText);
        if (!json) {
            Titanium.API.info('Error - Null return!');
            return;
        }
        //Saving into var values from php page
        var jsonname = json.data;
        
        var pos;

        for (pos = 0; pos < jsonname.length; pos++) {
            //Pushing into array evry value			
            Alloy.Globals.Level.push(jsonname[pos].level_1);
            Alloy.Globals.Level2.push(jsonname[pos].level_2);
            Alloy.Globals.Level3.push(jsonname[pos].level_3);
            Alloy.Globals.Level4.push(jsonname[pos].level_4);
        }
        	Ti.App.Properties.setList('myLevel',Alloy.Globals.Level);
        	Ti.App.Properties.setList('myLevel2',Alloy.Globals.Level2);
        	Ti.App.Properties.setList('myLevel3',Alloy.Globals.Level3);
        	Ti.App.Properties.setList('myLevel4',Alloy.Globals.Level4);
    };
}

// 1. prepare data from db
// 2. create rows from db values
// 3. incremeting each row with the db values
//4. showing data in picker row

function openSpecies() {
	Alloy.Globals.Sites.length = 0; 
	var selectedRow = $.picker.getSelectedRow(0).myId; //Value from picker 1
	var selectedRow1 = $.picker2.getSelectedRow(0).title; //Value from picker 2
	var selectedRow2 = $.picker3.getSelectedRow(0).title; //Value from picker 3
	var species = Alloy.createController('species').getView(); 
	species.open();
	species = null;

	Alloy.Globals.Species = [selectedRow, selectedRow1, selectedRow2];
	Ti.App.Properties.setList('mySpecies',Alloy.Globals.Species);
}

function openMain() { 
    var main = Alloy.createController('main').getView();
    main.open();
    main = null;

}

$.surveyWin.addEventListener('androidback', function(e) {
openMain();
});