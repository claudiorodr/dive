// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

	var img = Ti.UI.createImageView({
		top : 10,
		width : 250,
		height : 250,
		image : "/img/species/" + args.img + ".jpg",
		verticalAlign : 'center'
		});
		
		$.image.add(img);
	if(args.img == 	'1' || args.img == 	'4' || args.img == 	'5' || args.img == 	'6' || args.img == 	'9' || args.img == 	'23' || args.img ==  '25' || args.img ==  '26' || args.img ==  '29')
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
	
	$.specieInfoWin.add(scrollView);
	
	var i=1;
	var activeView = img;
	
	scrollView.addEventListener('scroll', function(e)
	{
		activeView = e.view;  // the object handle to the view that is about to become visible
		i = e.currentPage;
		Titanium.API.info("scroll called - current index " + i + ' active view ' + activeView);
	});
	}

	var d = Titanium.UI.createLabel({
		text:'Description:',
		font:{fontSize:14},
		left:500,
		top:10,
		width:300,
		height:'auto'
	});
	
	$.specieInfoWin.add(d);
	
	var da1 = Titanium.UI.createTextArea({		
		height:'auto',
		width:150,
		right:10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(da1);
	
	var l = Titanium.UI.createLabel({
		text:'Common name:',
		font:{fontSize:14},
		left:10,
		top:10,
		width:300,
		height:'auto'
	});
	
	$.image.add(l);
	
	var ll = Titanium.UI.createLabel({
		text:'Scientific name:',
		font:{fontSize:14},
		left:10,
		top:85,
		width:300,
		height:'auto'
	});
	
	$.image.add(ll);
	
		var lll = Titanium.UI.createLabel({
		text:'Habitat:',
		font:{fontSize:14},
		left:10,
		top:160,
		width:300,
		height:'auto'
	});
	
	$.image.add(lll);

if(args.img == '1')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Canary damsel',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Abudefduf luridus',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
	
	da1.value = "individuals grow to around 15 cm in length, and feed primarily on algae and small invertebrates. Each fish has large eyes, with coloring that is black to brownish black with blue on the fins, and lighter colors on the ventral part of the body.";
}	
if(args.img == '2')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Snakelocks anemone',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Anemonia viridis',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
	
		da1.value ="The tentacles of anemones in deep or murky water can be a grey colour, but are otherwise usually a deep green colour with purple tips due to the presence of symbiotic algae within the tentacles that use sunlight as an energy source. As a result, the anemones prefer brightly lit shallow waters. On average the snakelock anemone is 8 cm wide.";
}	
if(args.img == '3')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Orange Sponge',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Aplysina aerophoba',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
	
	da1.value = "Sponges come in a range of sizes from minuscule encrusting species under rocks to massive sponges which can be up to one and half metres high. They are able to filter many litres of sea water every few seconds.";
}	
if(args.img == '4')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Bogue',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Boops boops',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
	
		da1.value = "They can generally be found down to 100 m, and infrequently down to 350 m. They consume seaweed, crustaceans, and some plankton. Individuals can reach 36 cm, but average 20 cm.";
}	
if(args.img == '5')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Macaronesian sharpnose',
		height:35,
		width:'auto',
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Canthigaster capistrata',
		height:35,
		width:'auto',
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
	
	da1.value = "Canthigaster capistrata has a elongated body. Its back is green and his belly white, both separated by a black line. Its body is littered with bright blue dots, although these are multiplied on the lower half of the body. Its eyes are yellow with black pupils. It reaches a maximum size of 25cm.";
}	
if(args.img == '6')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Atlantic chromis',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Chromis limbata',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
	
		da1.value = "has an oval and laterally compressed body with an noticeably large eye. Its mouth is strongly protractile, reaching to below the centre of the eye, with small canine-like teeth set in 3 rows on the jaws. It can grow up to a size of 25 centimetres (9.8 in) in length, with a common length of 13 centimetres (5.1 in).";
}	
if(args.img == '7')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Red Hermit Crabs',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Dardanus calidus',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
	
			da1.value = "";
}	
if(args.img == '8')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Long-spined Sea Urchin',
		height:35,
		width:'auto',
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Diadema africanum',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '9')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'White seabream',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Diplodus sargus',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '10')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Dusky Grouper',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Epinephelus marginatus',
		height:35,
		width:'auto',
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '11')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Brown moray',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Gymnothorax unicolor',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '12')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Bearded fireworm',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Hermodice caruncalata',
		height:35,
		width:'auto',
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '13')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Cleaner Shrimp',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Lysmata grabhami',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '14')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Spiny Starfish',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Marthasterias glacialis',
		height:35,
		width:'auto',
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '15')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Striped Red Lullet',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Mullus surmuletus',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '16')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Black Moray Eel',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Mureana augusti',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '17')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Common octopus',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Octopus vulgaris',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '18')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Peacocks tail',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Padina pavonica',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '19')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Sally Lightfoot',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Percnon gibbesi',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '20')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Bastard grunt',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Pomadasys incisus',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '21')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Salema porgy',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Sarpa salpa',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '22')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Red scorpionfish',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Scorpaena',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '23')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Common cuttlefish',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Sepia officinalis',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '24')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Blacktail comber',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Serranus atricauda',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '25')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Guinean puffer',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Sphoeroides marmoratus',
		height:35,
		width:'auto',
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '26')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Yellowmouth barracuda',
		height:35,
		width:'auto',
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Sphyraena viridensis',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '27')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Arrow crab',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Stenorhynchus lanceolatus',
		height:35,
		width:'auto',
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '28')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Diamond lizardfish',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Synodus synodus',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '29')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Club Tipped Anemone',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Telmatactis cricoides',
		height:35,
		width:150,
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}	
if(args.img == '30')	
{	
	var ta1 = Titanium.UI.createTextArea({
		value:'Ornate wrasse ',
		height:35,
		width:150,
		left :10,
		top:40,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta1);
	
	var ta2 = Titanium.UI.createTextArea({
		value:'Thalassoma pavo females',
		height:35,
		width:'auto',
		left :10,
		top:115,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta2);
	
	var ta3 = Titanium.UI.createTextArea({
		value:'Atlantic Ocean',
		height:35,
		width:150,
		left :10,
		top:190,
		font:{fontSize:14,fontFamily:'Marker Felt', fontWeight:'bold'},
		color:'#888',
		textAlign:'left',
		borderWidth:2,
		borderColor:'#bbb',
		borderRadius:5,
		suppressReturn:false,
		editable : false
	});
	
	$.image.add(ta3);	
}

function openMain() {
	var main = Alloy.createController('main').getView();
		main.open();
		main = null;
		img,l,ll,lll,ta1,ta2,ta3,specie_info = null;
}

$.specieInfoWin.addEventListener('androidback', function(e){
		gallery = null;
		img,l,ll,lll,ta1,ta2,ta3,specie_info = null;
    	openMain();
});