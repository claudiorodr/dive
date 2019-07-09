var args = $.args;

//Array to store the data from the todo list


//We execute the function to show the data for the first view 
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
// 1. prepare data from db
// 2. create rows from db values
// 3. incremeting each row with the db values
//4. showing data in picker row

function openSpecies() {
	Alloy.Globals.Sites.length = 0; 
	var selectedRow = $.picker.getSelectedRow(0).myId; //Value from picker 1
	var selectedRow1 = $.picker.getSelectedRow(1).title; //Value from picker 2
	var selectedRow2 = $.picker.getSelectedRow(2).title; //Value from picker 3
	 
	var species = Alloy.createController('species').getView(); 
	species.open();
	species = null;

	Alloy.Globals.Species = [selectedRow, selectedRow1, selectedRow2];
}