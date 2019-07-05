// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

	var l = Titanium.UI.createLabel({
		text:'Dive spot name:',
		font:{fontSize:14},
		left:10,
		top:10,
		width:'auto',
		height:'auto'
	});
	
	$.image.add(l);
	
	var ll = Titanium.UI.createLabel({
		text:'Maximum depth:',
		font:{fontSize:14},
		left:10,
		top:85,
		width:'auto',
		height:'auto'
	});
	
	$.image.add(ll);
	
		var lll = Titanium.UI.createLabel({
		text:'Description:',
		font:{fontSize:14},
		left:10,
		top:160,
		width:'auto',
		height:'auto'
	});
	
	$.image.add(lll);

		var ta1 = Titanium.UI.createTextArea({
		value:'bla bla',
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
		value:'bla bla',
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
		value:'bla bla',
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