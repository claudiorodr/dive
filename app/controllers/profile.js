// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

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
					hintText : Ti.App.Properties.getObject('id'),
					editable: false

                });

                $.common.add(ta1);