// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

//args.array.push(selectedRow3);
/*	var row = Ti.UI.createPickerRow({
				title: "a-ha",  
				myId : i 
			});
	var img = Ti.UI.createImageView({
		top : 10,
		width : 250,
		height : 250,
		image : "/img/species/" + args.img + ".jpg",
		verticalAlign : 'center'
		});
		
		$.image.add(img);
		
	if(args.img == 	'2' || args.img == 	'3' || args.img == 	'4' || args.img == 	'8' || args.img ==  '10' || args.img ==  '12' || args.img ==  '14'|| args.img ==  '16'|| args.img ==  '18' )
	{ 
	var img2 = Ti.UI.createImageView({
		top : 10,
		width : 250,
		height : 250,
		image : "/img/speciesscroll/" + args.img + ".1" + ".jpg",
		verticalAlign : 'center'
		});
		
		$.image.add(img2);
		
		
	var scrollView = Titanium.UI.createScrollableView({
		views:[img,img2,img3],
		showPagingControl:true,
		pagingControlHeight:30,
		maxZoomScale:2.0,
		currentPage:0,
		top : 10,
		width : 250,
		height : 250,
	});
	
	$.specieDetailWin.add(scrollView);
	
	var i=1;
	var activeView = img;
	
	scrollView.addEventListener('scroll', function(e)
	{
		activeView = e.view;  // the object handle to the view that is about to become visible
		i = e.currentPage;
		Titanium.API.info("scroll called - current index " + i + ' active view ' + activeView);
	});
	}
	
	else if(args.img == 	'6' || args.img == 	'9' )
	{ 
	var img2 = Ti.UI.createImageView({
		top : 10,
		width : 250,
		height : 250,
		image : "/img/speciesscroll/" + args.img + ".1" + ".jpg",
		verticalAlign : 'center'
		});
		
		$.image.add(img2);
		
	var img3 = Ti.UI.createImageView({
		top : 10,
		width : 250,
		height : 250,
		image : "/img/speciesscroll/" + args.img + ".2" + ".jpg",
		verticalAlign : 'center'
		});
		
		$.image.add(img3);
		
	var scrollView = Titanium.UI.createScrollableView({
		views:[img,img2,img3],
		showPagingControl:true,
		pagingControlHeight:30,
		maxZoomScale:2.0,
		currentPage:0,
		top : 10,
		width : 250,
		height : 250,
	});
	
	$.specieDetailWin.add(scrollView);
	
	var i=1;
	var activeView = img;
	
	scrollView.addEventListener('scroll', function(e)
	{
		activeView = e.view;  // the object handle to the view that is about to become visible
		i = e.currentPage;
		Titanium.API.info("scroll called - current index " + i + ' active view ' + activeView);
	});
	}
*/	
	var l = Titanium.UI.createLabel({
		text:'Common name:',
		font:{fontFamily: 'Raleway-Bold',
			  fontSize:14},
		left:"50%",
		top:"15%",
		width:300,
		height:'auto'
	});
	
	$.image.add(l);
	
	var ll = Titanium.UI.createLabel({
		text:'Scientific name:',
		font:{fontFamily: 'Raleway-Bold',
			  fontSize:14},
		left:"50%",
		top:"25%",
		width:300,
		height:'auto'
	});
	
	$.image.add(ll);
	
		var lll = Titanium.UI.createLabel({
		text:'Habitat:',
		font:{fontFamily: 'Raleway-Bold',
			  fontSize:14},
		left:"50%",
		top:"35%",
		width:300,
		height:'auto'
	});
	
	$.image.add(lll);

var img = Ti.UI.createImageView({
		top : "15%",
		left : "5%",
		width : "42%",
		height : "70%",
		image : "http://backend.tigerwhale.com/api/dive/image/" + args.img,// + ".jpg",
		verticalAlign : 'center' 
		});
		
		$.image.add(img);
		
getTodoList();

function getTodoList() {
    //function to use HTTP to connect to a web server and transfer the data. 
    var sendit = Ti.Network.createHTTPClient({
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert('There was an error during the connection');
        },
        timeout: 1000,
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
            //Putting into string format the JSON values
            var science = JSON.stringify(Alloy.Globals.Scientific[i]);
            //Slicing the values for cleaner look 
            var sciencer = science.slice(1,-1);
            //Putting into string format the JSON values           
            var description = JSON.stringify(Alloy.Globals.Description[i]);        
            var descriptioner = description.slice(1,-1);   
             
            if (args.img == i+1) {
                var ta1 = Titanium.UI.createTextArea({
                    value: namer,
                    height: 35,
                    width: 150,
                    left:"50%",
                    top: "18%",
                    font: {
                        fontSize: 14,
                        fontFamily: 'Raleway-Bold',

                    },
                    color: '#888',
                    textAlign: 'left', 
                    borderWidth: 2,
                    borderColor: '#bbb',
                    borderRadius: 5,
                    suppressReturn: false,
                    editable: false
                });

                $.image.add(ta1);

                var ta2 = Titanium.UI.createTextArea({
                    value: sciencer,
                    height: 35,
                    width: 'auto',
                    left:"50%",
                    top: "28%",
                    font: {
                        fontSize: 14,
                        fontFamily: 'Raleway-Bold',

                    },
                    color: '#888',
                    textAlign: 'left',
                    borderWidth: 2,
                    borderColor: '#bbb',
                    borderRadius: 5,
                    suppressReturn: false,
                    editable: false
                });

                $.image.add(ta2);

                var ta3 = Titanium.UI.createTextArea({
                    value: descriptioner,
                    height: 'auto',
                    width: 150,
                    left:"50%",
                    top: "38%",
                    font: { 
                        fontSize: 14,
                        fontFamily: 'Raleway-Bold',

                    },
                    color: '#888',
                    textAlign: 'left',
                    borderWidth: 2,
                    borderColor: '#bbb',
                    borderRadius: 5,
                    suppressReturn: false,
                    editable: false
                });

                $.image.add(ta3);
            }
        };
    };
}

function checkJSON(_json) {
    try {
        JSON.parse(_json);
    } catch (e) {
        return false;
    }
    return true;
}

function insertData() {
    //if there is something in the textbox
    if (Ti.Network.online) {
    var request = Ti.Network.createHTTPClient({

        onload: function(e) {

            if (this.status == '200') {
                // here you receive back the values and you can see them with
                alert("all alright");

                // make a global of e
            }

        },

        onerror: function(e) {
            Ti.API.debug(e.error);
            alert('There was an error during the conexion');
        },
        
        timeout: 1000,
    });
    //Request the data from the web service, Here you have to change it for your local ip
    request.open("POST", "http://backend.tigerwhale.com/api/survey");
    //alert(Alloy.Globals.Species[4],survey[2],survey[1],survey[0]);
    var date = new Date();
  var y = date.getFullYear();
  var mo = (date.getMonth() + 1 );
  var da = date.getDate();
  var d = y + "-"+ mo + "-" + da;
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var x = h + ":" + m + ":" + s;
  
    var params = ({    	
    
    /*"user_id": "1",
    "creature_id": args.img,
    "abundance_value": Alloy.Globals.Species[4],
    "number_diver": survey[2],
    "dive_time": survey[1],
    "diving_spot_id": survey[0],
    "max_depth" : "1"*/
	"user_id": "1",
    "creature_id": args.img,
    "abundance_value": "1", //Alloy.Globals.Species[4].match(/\d/g).join(""),
    "number_diver": parseInt(survey[2]),
    "dive_time": parseInt(survey[1]),
    "diving_spot_id": survey[0] + 1,
    "max_depth" : "1",
    "date":d + " "+x
    });

    request.send(params);
    alert(params); 
  
	//Clean of parameteres
  
    params = ({ 
    "user_id": "",
    "creature_id": "",
    "abundance_value": "",
    "number_diver": "",
    "dive_time": "",
    "diving_spot_id": "",
    "max_depth" : "",
    "dive_id" : "", 
    "date" : ""
    });
    
   }
   else {
   	var params = ({    	
      
    /*"user_id": "1",
    "creature_id": args.img,
    "abundance_value": Alloy.Globals.Species[4],
    "number_diver": survey[2],
    "dive_time": survey[1],
    "diving_spot_id": survey[0],
    "max_depth" : "1"*/
    "user_id": "1",
    "creature_id": "2",
    "abundance_value": "ola",
    "number_diver": "12",
    "dive_time": "12",
    "diving_spot_id": "1",
    "max_depth" : "1" 
    });

   	Ti.App.Properties.setList('params',params);
   	Ti.App.Properties.getList('params');
   }

};

function openMore() {

    var selectedRow3 = $.picker.getSelectedRow(0).title;
    var species = Alloy.createController('species').getView();
    species.open();
    species = null;
    //img, l, ll, lll, ta1, ta2, ta3, specie_detail = null;
    Alloy.Globals.Species.push(args.img, selectedRow3);

    survey = Alloy.Globals.Species.slice(0, 3);

    console.log(survey);
    console.log(Alloy.Globals.Species);
    insertData();
    Alloy.Globals.Species = Alloy.Globals.Species.slice(0, 3);
    console.log(Alloy.Globals.Species);

}

function openMain() {
    survey = Alloy.Globals.Species.slice(0, 3);
    for (i = 3; i < Alloy.Globals.Species.length; i += 2) {
        specie = Alloy.Globals.Species.slice(i, i + 2);
        console.log(specie);

    }

    console.log(survey);
    console.log(Alloy.Globals.Species);
    insertData();
    //Inserting into HTTP request from Backend

    var main = Alloy.createController('main').getView();
    main.open();
    main = null;
   // img, l, ll, lll, ta1, ta2, ta3, specie_detail = null; 
}

$.specieDetailWin.addEventListener('androidback', function(e) {
    species = null;
    //img, l, ll, lll, ta1, ta2, ta3, specie_detail = null;
    openMore();
});

