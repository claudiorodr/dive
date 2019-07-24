var args = $.args;

//Array to store the data from the todo list


//We execute the function to show the data for the first view 
getTodoList();
getTodoList2();

 
function getTodoList() {
	//function to use HTTP to connect to a web server and transfer the data. 
	var sendit = Ti.Network.createHTTPClient({
		onerror: function (e) {
			//Ti.API.debug(e.error);
			//alert('There was an error during the connection');
			
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
		
		for (var i = 0; i < Alloy.Globals.Sites.length; i++) {
			//Putting into string format the JSON values
			var spot = JSON.stringify(Alloy.Globals.Sites[i]);
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
            Ti.API.debug(e.error);
            alert('There was an error during the connection');
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
            //Pushing into array evry value			
            Alloy.Globals.Names.push(jsonname[pos].name);
        }

        for (pos = 0; pos < jsonname.length; pos++) {
            //Pushing into array evry value			
            Alloy.Globals.Scientific.push(jsonname[pos].name_scientific);
        }
        for (pos = 0; pos < jsonname.length; pos++) {
            //Pushing into array evry value			
            Alloy.Globals.Description.push(jsonname[pos].description);
        }

        for (var i = 0; i < Alloy.Globals.Names.length; i++) {
            //Putting into string format the JSON values
            var name = JSON.stringify(Alloy.Globals.Names[i]);
            //Slicing the values for cleaner look 
            var namer = name.slice(1,-1);            
        };
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
}