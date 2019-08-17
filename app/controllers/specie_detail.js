// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

	var l = Titanium.UI.createLabel({
		text:'Common name:',
		font:{fontFamily: 'Raleway-Bold',
			  fontSize:14},
		left:"10%",
		top:0,
		width:300,
		height:'auto'
	});
	
	$.common.add(l);
	
	var ll = Titanium.UI.createLabel({
		text:'Scientific name:',
		font:{fontFamily: 'Raleway-Bold',
			  fontSize:14},
		left:"10%",
		top:0,
		width:300,
		height:'auto'
	});
	
	$.science.add(ll);
	
		var lll = Titanium.UI.createLabel({
		text:'Description:',
		font:{fontFamily: 'Raleway-Bold',
			  fontSize:14},
		left:"10%",
		top:0,
		width:300,
		height:'auto'
	});
	
	$.description.add(lll);
	
		var a = Titanium.UI.createLabel({
		text:'Conservation Status:',
		font:{fontFamily: 'Raleway-Bold',
			  fontSize:14},
		left:"10%",
		top:0,
		width:300,
		height:'auto'
	});
	
	$.conserv.add(a);
	
	var aa = Titanium.UI.createLabel({
		text:'Size:',
		font:{fontFamily: 'Raleway-Bold',
			  fontSize:14},
		left:"10%",
		top:0,
		width:300,
		height:'auto'
	});
	
	$.size.add(aa);
	
		var aaa = Titanium.UI.createLabel({
		text:'Curiosity:',
		font:{fontFamily: 'Raleway-Bold',
			  fontSize:14},
		left:"10%",
		top:0,
		width:300,
		height:'auto'
	});
	
	$.curiosity.add(aaa);
var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, args.img +'.png');
var img = Ti.UI.createImageView({
		top : "0%",
		left : "-10%",
		width : "120%",
		height : "100%",
		image : file,// + ".jpg",
		verticalAlign : 'center' ,
		});
		
		$.image.add(img);

        for (var i = 0; i < Ti.App.Properties.getList('myNmaes').length; i++) {
            //Putting into string format the JSON values
            var name = JSON.stringify(Ti.App.Properties.getList('myNmaes')[i]);
            var namer = name.slice(1,-1);

            var science = JSON.stringify(Ti.App.Properties.getList('myScientific')[i]);
            var sciencer = science.slice(1,-1);
         
            var description = JSON.stringify(Ti.App.Properties.getList('myDescription')[i]);        
            var descriptioner = description.slice(1,-1);
            
            var size = JSON.stringify(Ti.App.Properties.getList('mySize')[i]);        
            var sizer = size.slice(1,-1);
            
            var conservtion = JSON.stringify(Ti.App.Properties.getList('myConservation')[i]);        
            var conservtioner = conservtion.slice(1,-1);
            
            var curiosity = JSON.stringify(Ti.App.Properties.getList('myCuriosity')[i]);        
            var curiositier = curiosity.slice(1,-1); 
            
            var level = JSON.stringify(Ti.App.Properties.getList('myLevel')[i]);
			//var leveler = level.slice(1,-1);
			
			var level2 = JSON.stringify(Ti.App.Properties.getList('myLevel2')[i]);
			//var leveler2 = level2.slice(1,-1);
			
			var level3 = JSON.stringify(Ti.App.Properties.getList('myLevel3')[i]);
			//var leveler3 = level3.slice(1,-1);
			
			var level4 = JSON.stringify(Ti.App.Properties.getList('myLevel4')[i]);
			//var leveler4 = level4.slice(1,-1);
             
            if (args.img == i+1) {
               
                var ta1 = Titanium.UI.createTextField({
					left : "9%",
					width : "70%",
					textAlign : "center",
					font : {
						fontFamily : 'Raleway-Light',
						fontSize : 14
					},
					color : "#0099ff",
					hintTextColor : "gray",
					backgroundColor : "#EEEEEE",
					borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
					borderColor : "#0099ff",
					borderRadius : 6,
					height : 'auto',
					hintText : namer,
					editable: false
                });

                $.common.add(ta1);

                var ta2 = Titanium.UI.createTextField({
					left : "9%",
					width : "70%",
					textAlign : "center",
					font : {
						fontFamily : 'Raleway-Light',
						fontSize : 14
					},
					color : "#0099ff",
					hintTextColor : "gray",
					backgroundColor : "#EEEEEE",
					borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
					borderColor : "#0099ff",
					borderRadius : 6,
					height : 'auto',
					hintText : sciencer,
					editable: false
                });
 
               $.science.add(ta2);
               
               var ta3 = Titanium.UI.createTextField({
					left : "9%",
					width : "70%",
					textAlign : "center",
					font : {
						fontFamily : 'Raleway-Light',
						fontSize : 14
					},
					color : "#0099ff",
					hintTextColor : "gray",
					backgroundColor : "#EEEEEE",
					borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
					borderColor : "#0099ff",
					borderRadius : 6,
					height : 'auto',
					hintText : descriptioner,
					editable: false
                });
 
               $.description.add(ta3);

                var ta4 = Titanium.UI.createTextField({
					left : "9%",
					width : "70%",
					textAlign : "center",
					font : {
						fontFamily : 'Raleway-Light',
						fontSize : 14
					},
					color : "#0099ff",
					hintTextColor : "gray",
					backgroundColor : "#EEEEEE",
					borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
					borderColor : "#0099ff",
					borderRadius : 6,
					height : 'auto',
					hintText : sizer,
					editable: false
                });

                $.conserv.add(ta4);

                var ta5 = Titanium.UI.createTextField({
					left : "9%",
					width : "70%",
					textAlign : "center",
					font : {
						fontFamily : 'Raleway-Light',
						fontSize : 14
					},
					color : "#0099ff",
					hintTextColor : "gray",
					backgroundColor : "#EEEEEE",
					borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
					borderColor : "#0099ff",
					borderRadius : 6,
					height : 'auto',
					hintText : conservtioner,
					editable: false
                });

                $.size.add(ta5);
                
                var ta6 = Titanium.UI.createTextField({
					left : "9%",
					width : "70%",
					textAlign : "center",
					font : {
						fontFamily : 'Raleway-Light',
						fontSize : 14
					},
					color : "#0099ff",
					hintTextColor : "gray",
					backgroundColor : "#EEEEEE",
					borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
					borderColor : "#0099ff",
					borderRadius : 6,
					height : 'auto',
					hintText : curiositier,
					editable: false
                });

                $.curiosity.add(ta6);

			var row = Ti.UI.createPickerRow({
				title: level, 
				myId : i
			});

			$.abundance.addRow(row);

			var row2 = Ti.UI.createPickerRow({
				title: level2, 
				myId : i
			});

			$.abundance.addRow(row2);

			var row3 = Ti.UI.createPickerRow({
				title: level3, 
				myId : i
			});

			$.abundance.addRow(row3);
			
			var row4 = Ti.UI.createPickerRow({
				title: level4, 
				myId : i
			});

			$.abundance.addRow(row4);

            }
        };
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

    var request = Ti.Network.createHTTPClient({

        onload: function(e) {

            if (this.status == '200') {
            }

        },

        onerror: function(e) {
        	Ti.App.Properties.setList('myParams',params);
            //Ti.API.debug(e.error);
            //alert('There was an error during the conexion');
            //alert(Ti.App.Properties.getList('myParams'));
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
  
  var selectedRow = $.picker.getSelectedRow(0).title;
  
    var params = ({    	
	"user_id": Ti.App.Properties.getObject('user'), //Ti.App.Properties.getObject('user').id,
    "creature_id": args.img,
    "abundance_value": selectedRow, //Alloy.Globals.Species[4].match(/\d/g).join(""),
    "number_diver": parseInt(survey[2]),
    "dive_time": parseInt(survey[1]),
    "diving_spot_id": survey[0] + 1,
    "max_depth" : "1",
    "date": d + " "+ x
    });
   Ti.App.Properties.setList('myParams',params);
   request.send(params);
  
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


function openMore() {

    var selectedRow3 = $.picker.getSelectedRow(0).title;
    var species = Alloy.createController('species').getView();
    species.open();
    species = null;
    //img, l, ll, lll, ta1, ta2, ta3, specie_detail = null;
    Alloy.Globals.Species.push(args.img, selectedRow3);

    survey = Alloy.Globals.Species.slice(0, 3);

    insertData();
    Alloy.Globals.Species = Alloy.Globals.Species.slice(0, 3);


}

function openMain() {
    survey = Alloy.Globals.Species.slice(0, 3);
    for (i = 3; i < Alloy.Globals.Species.length; i += 2) {
        specie = Alloy.Globals.Species.slice(i, i + 2);


    }

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

