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

var img = Ti.UI.createImageView({
		top : "15%",
		left : "0%",
		width : "100%",
		height : "70%",
		image : "http://backend.tigerwhale.com/api/dive/image/" + args.img,// + ".jpg",
		verticalAlign : 'center' 
		});
		
		$.image.add(img);

        for (var i = 0; i < Alloy.Globals.Names.length; i++) {
            //Putting into string format the JSON values
            var name = JSON.stringify(Alloy.Globals.Names[i]);
            var namer = name.slice(1,-1);

            var science = JSON.stringify(Alloy.Globals.Scientific[i]);
            var sciencer = science.slice(1,-1);
         
            var description = JSON.stringify(Alloy.Globals.Description[i]);        
            var descriptioner = description.slice(1,-1);
            
            var sizer = JSON.stringify(Alloy.Globals.Size[i]);        
            //var sizer = size.slice(1,-1);   
            
            var conservtion = JSON.stringify(Alloy.Globals.Conservation[i]);        
            var conservtioner = conservtion.slice(1,-1);
            
            var curiosity = JSON.stringify(Alloy.Globals.Curiosity[i]);        
            var curiositier = curiosity.slice(1,-1); 
            
            var level = JSON.stringify(Alloy.Globals.Level[i]);
			//var leveler = level.slice(1,-1);
			
			var level2 = JSON.stringify(Alloy.Globals.Level2[i]);
			//var leveler2 = level2.slice(1,-1);
			
			var level3 = JSON.stringify(Alloy.Globals.Level3[i]);
			//var leveler3 = level3.slice(1,-1);
			
			var level4 = JSON.stringify(Alloy.Globals.Level4[i]);
			//var leveler4 = level4.slice(1,-1);
             
            if (args.img == i+1) {
               
                var ta1 = Titanium.UI.createTextArea({
                    value: namer,
                    height: 35,
                    width: "auto",//150,
                    left:"10%",
                    top: 20,
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

                $.common.add(ta1);

                var ta2 = Titanium.UI.createTextArea({
                    value: sciencer,
                    height: 35,
                    width: 'auto',
                    left:"10%",
                    top: 20,
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
 
               $.science.add(ta2);
               
               var ta3 = Titanium.UI.createTextArea({
                    value: descriptioner,
                    height: "auto",
                    width: 'auto',
                    left:"10%",
                    top: 20,
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
 
               $.description.add(ta3);

                var ta4 = Titanium.UI.createTextArea({
                    value: sizer,
                    height: 'auto', 
                    width: 150,
                    left:"10%",
                    top: 20,
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

                $.conserv.add(ta4);

                var ta5 = Titanium.UI.createTextArea({
                    value: conservtioner,
                    height: 'auto', 
                    width: 150,
                    left:"10%",
                    top: 20,
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

                $.size.add(ta5);
                
                var ta6 = Titanium.UI.createTextArea({
                    value: curiositier,
                    height: 'auto', 
                    width: 150,
                    left:"10%",
                    top: 20,
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
  
  var selectedRow = $.picker.getSelectedRow(0).title;
  
    var params = ({    	
    
    /*"user_id": "1",
    "creature_id": args.img,
    "abundance_value": Alloy.Globals.Species[4],
    "number_diver": survey[2],
    "dive_time": survey[1],
    "diving_spot_id": survey[0],
    "max_depth" : "1"*/
	"user_id": "1", //Ti.App.Properties.getObject('user').id,
    "creature_id": args.img,
    "abundance_value": selectedRow, //Alloy.Globals.Species[4].match(/\d/g).join(""),
    "number_diver": parseInt(survey[2]),
    "dive_time": parseInt(survey[1]),
    "diving_spot_id": survey[0] + 1,
    "max_depth" : "1",
    "date": d + " "+ x
    });
 
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

    insertData();
    Alloy.Globals.Species = Alloy.Globals.Species.slice(0, 3);


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

