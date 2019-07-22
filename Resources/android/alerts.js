

exports.show = function (alertText) {

	var indWin = Titanium.UI.createWindow({
		opacity: 0,

		navBarHidden: true,
		fullscreen: true,
		tabBarHidden: true,
		height: "15%",
		bottom: "15%",
		orientationModes: [Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT]
	});
	var indView = Titanium.UI.createView({
		height: Ti.UI.SIZE,
		width: Ti.UI.SIZE,
		borderRadius: 25,
		backgroundColor: '#000080',
		opacity: 1.0
	});indWin.add(indView);
	var message = Titanium.UI.createLabel({
		text: "\n" + alertText + "          " + "\n",
		color: '#fff',
		textAlign: "center",
		font: {
			fontFamily: 'Smoolthan-Bold',
			fontSize: 14
		}
	});indView.add(message);

	var interval = interval ? interval : 2000;
	indWin.open();
	var animation = Titanium.UI.createAnimation({
		duration: 700,
		opacity: 1.0
	});
	var animationHandler = function () {
		animation.removeEventListener('complete', animationHandler);
		indWin.animate(animation);
	};
	animation.addEventListener('complete', animationHandler);
	indWin.animate(animation);

	setTimeout(function () {
		indWin.close();

		setTimeout(function () {
			indWin.removeAllChildren();
			indWin = null;
			indView = null;
			message = null;
			interval = null;
			animation = null;
			animationHandler = null;
		}, 400);
	}, interval);
};