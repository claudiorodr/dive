// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function sign_out() {
	Ti.App.Properties.removeProperty("user");
	var login = Alloy.createController('index').getView();
	login.open();
	login = null;
}

var l = Titanium.UI.createLabel({
	text: 'Email:',
	font: {
		fontFamily: 'Raleway-Bold',
		fontSize: 14
	},
	left: "10%",
	top: 0,
	width: 300,
	height: 'auto'
});

$.common.add(l);

var ll = Titanium.UI.createLabel({
	text: 'Name:',
	font: {
		fontFamily: 'Raleway-Bold',
		fontSize: 14
	},
	left: "10%",
	top: 0,
	width: 300,
	height: 'auto'
});

$.science.add(ll);

var lll = Titanium.UI.createLabel({
	text: 'Country:',
	font: {
		fontFamily: 'Raleway-Bold',
		fontSize: 14
	},
	left: "10%",
	top: 0,
	width: 300,
	height: 'auto'
});

$.description.add(lll);

var a = Titanium.UI.createLabel({
	text: 'Gender:',
	font: {
		fontFamily: 'Raleway-Bold',
		fontSize: 14
	},
	left: "10%",
	top: 0,
	width: 300,
	height: 'auto'
});

$.conserv.add(a);

var aa = Titanium.UI.createLabel({
	text: 'Birthday:',
	font: {
		fontFamily: 'Raleway-Bold',
		fontSize: 14
	},
	left: "10%",
	top: 0,
	width: 300,
	height: 'auto'
});

$.size.add(aa);

var aaa = Titanium.UI.createLabel({
	text: 'Points:',
	font: {
		fontFamily: 'Raleway-Bold',
		fontSize: 14
	},
	left: "10%",
	top: 0,
	width: 300,
	height: 'auto'
});

$.curiosity.add(aaa);
/*   
                Ti.App.Properties.setObject('points', e.user.points);
                Ti.App.Properties.setObject('phone', e.user.phone);
                Ti.App.Properties.setObject('note', e.user.note);
                Ti.App.Properties.setObject('level', e.user.level);
                Ti.App.Properties.setObject('name', e.user.userable.user.name);
                Ti.App.Properties.setObject('gender', e.user.userable.user.gender);
                Ti.App.Properties.setObject('country', e.user.userable.user.country);
                Ti.App.Properties.setObject('b_day', e.user.userable.user.b_day);
                
                */

var ta1 = Titanium.UI.createTextField({
	left: "9%",
	width: "70%",
	textAlign: "center",
	font: {
		fontFamily: 'Raleway-Light',
		fontSize: '16'
	},
	color: "#0099ff",
	hintTextColor: "gray",
	backgroundColor: "#EEEEEE",
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#0099ff",
	borderRadius: 6,
	height: 50,
	hintText: Ti.App.Properties.getObject('email'),
	editable: false
});

$.common.add(ta1);

var ta2 = Titanium.UI.createTextField({
	left: "9%",
	width: "70%",
	textAlign: "center",
	font: {
		fontFamily: 'Raleway-Light',
		fontSize: '16'
	},
	color: "#0099ff",
	hintTextColor: "gray",
	backgroundColor: "#EEEEEE",
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#0099ff",
	borderRadius: 6,
	height: 50,
	hintText: Ti.App.Properties.getObject('name'),
	editable: false
});

$.science.add(ta2);

var country = Ti.App.Properties.getObject('country').charAt(0).toUpperCase() + Ti.App.Properties.getObject('country').slice(1);

var ta3 = Titanium.UI.createTextField({
	left: "9%",
	width: "70%",
	textAlign: "center",
	font: {
		fontFamily: 'Raleway-Light',
		fontSize: '16'
	},
	color: "#0099ff",
	hintTextColor: "gray",
	backgroundColor: "#EEEEEE",
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#0099ff",
	borderRadius: 6,
	height: 50,
	hintText: country,
	editable: false
});

$.description.add(ta3);

var gender;

if (Ti.App.Properties.getObject('gender') == 'm') {
	gender = "Masculine";
} else {
	gender = "Feminine";
}

var ta4 = Titanium.UI.createTextField({
	left: "9%",
	width: "70%",
	textAlign: "center",
	font: {
		fontFamily: 'Raleway-Light',
		fontSize: '16'
	},
	color: "#0099ff",
	hintTextColor: "gray",
	backgroundColor: "#EEEEEE",
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#0099ff",
	borderRadius: 6,
	height: 50,
	hintText: gender,
	editable: false
});

$.conserv.add(ta4);

var ta5 = Titanium.UI.createTextField({
	left: "9%",
	width: "70%",
	textAlign: "center",
	font: {
		fontFamily: 'Raleway-Light',
		fontSize: '16'
	},
	color: "#0099ff",
	hintTextColor: "gray",
	backgroundColor: "#EEEEEE",
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#0099ff",
	borderRadius: 6,
	height: 50,
	hintText: Ti.App.Properties.getObject('b_day'),
	editable: false
});

$.size.add(ta5);

var ta6 = Titanium.UI.createTextField({
	left: "9%",
	width: "70%",
	textAlign: "center",
	font: {
		fontFamily: 'Raleway-Light',
		fontSize: '16'
	},
	color: "#0099ff",
	hintTextColor: "gray",
	backgroundColor: "#EEEEEE",
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#0099ff",
	borderRadius: 6,
	height: 50,
	hintText: Ti.App.Properties.getObject('points'),
	editable: false
});

$.curiosity.add(ta6);
