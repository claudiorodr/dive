/*

// terms
	function openTerms() {
		var termsWin = Ti.UI.createWindow({
			backgroundColor : "#BDED2A",
			tabBarHidden : true,
			navBarHidden : true,
			fullscreen : true
		});
	// open
		termsWin.open({
			activityEnterAnimation: Ti.Android.R.anim.fade_in,
			activityExitAnimation: Ti.Android.R.anim.fade_out
		});
			var termsView = Ti.UI.createView({
				top : 0, left : 0, bottom : 0, right : 0,
				backgroundColor : "#BDED2A",
				width : "100%",
				height : "100%"
			});	termsWin.add(termsView);
				var termsUrl = Ti.UI.createWebView({
					backgroundColor : "#BDED2A",
					top : 0,
					left : 0,
					right : 0,
					bottom : "10%",
					width : "100%",
					height : "90%",
					borderRadius: 1,
					url : "http://www.weeshapp.com/index.php/terms-of-use/"
				});	termsView.add(termsUrl);
				if (Ti.Platform.osname == "android") {
					var termsWebViewIndicator = Ti.UI.createActivityIndicator({
						indicatorColor: '#000080',
						style: Ti.UI.ActivityIndicatorStyle.BIG,
						height : Ti.UI.SIZE,
						width : Ti.UI.SIZE
					});	termsView.add(termsWebViewIndicator);
					termsWebViewIndicator.show();
					setTimeout(function() {
						termsWebViewIndicator.hide();
					}, 5000);
				}
				var termsBack = Ti.UI.createLabel({
					bottom : 0,
					width : "100%",
					height : "10%",
					backgroundColor : "#BDED2A",
					text : "BACK",
					font : {
						fontFamily : 'Smoolthan-Bold',
						fontSize : 16
					},
					color : "#000080",
					textAlign : "center"
				});	termsView.add(termsBack);
		// close
			var handleTerms = function(e) {
				termsBack.removeEventListener('click', handleTerms);
				handleTerms = null;
				if (OS_ANDROID) {
					termsWin.close({
						activityEnterAnimation: Ti.Android.R.anim.fade_in,
						activityExitAnimation: Ti.Android.R.anim.fade_out
					});
				}
				if (OS_IOS) {
					termsWin.close({
						transition : Ti.UI.iOS.AnimationStyle.NONE
					});
				}
				termsWin = null;
			};
			termsBack.addEventListener('click', handleTerms);
	} 
	function openPrivacy() {
		// setup
			var privacyWin = Ti.UI.createWindow({
				backgroundColor : "#BDED2A",
				tabBarHidden : true,
				navBarHidden : true,
				fullscreen : true
			});
		// open
			if (OS_ANDROID) {
				privacyWin.open({
					activityEnterAnimation: Ti.Android.R.anim.fade_in,
					activityExitAnimation: Ti.Android.R.anim.fade_out
				});
			}
			if (OS_IOS) {
				privacyWin.open({
					transition : Ti.UI.iOS.AnimationStyle.NONE
				});
			}
		// populate
			var privacyView = Ti.UI.createView({
				top : 0, left : 0, bottom : 0, right : 0,
				backgroundColor : "#BDED2A",
				width : "100%",
				height : "100%"
			});	privacyWin.add(privacyView);
				var privacyUrl = Ti.UI.createWebView({
					backgroundColor : "#BDED2A",
					top : 0,
					left : 0,
					right : 0,
					bottom : "10%",
					width : "100%",
					height : "90%",
					borderRadius: 1,
					url : "http://www.weeshapp.com/index.php/privacy-policy/"
				});	privacyView.add(privacyUrl);
				if (Ti.Platform.osname == "android") {
					var privacyWebViewIndicator = Ti.UI.createActivityIndicator({
						indicatorColor: '#000080',
						style: Ti.UI.ActivityIndicatorStyle.BIG,
						height : Ti.UI.SIZE,
						width : Ti.UI.SIZE
					});	privacyView.add(privacyWebViewIndicator);
					privacyWebViewIndicator.show();
					setTimeout(function() {
						privacyWebViewIndicator.hide();
					}, 5000);
				}
				var privacyBack = Ti.UI.createLabel({
					bottom : 0,
					width : "100%",
					height : "10%",
					backgroundColor : "#BDED2A",
					text : "BACK",
					font : {
						fontFamily : 'Smoolthan-Bold',
						fontSize : 16
					},
					color : "#000080",
					textAlign : "center"
				});	privacyView.add(privacyBack);
		// close
			var handlePrivacy = function(e) {
				privacyBack.removeEventListener('click', handlePrivacy);
				handlePrivacy = null;
				if (OS_ANDROID) {
					privacyWin.close({
						activityEnterAnimation : Ti.Android.R.anim.fade_in,
						activityExitAnimation : Ti.Android.R.anim.fade_out
					});
				}
				if (OS_IOS) {
					privacyWin.close({
						transition : Ti.UI.iOS.AnimationStyle.NONE
					});
				}
				privacyWin = null;
			};
			privacyBack.addEventListener('click', handlePrivacy);
	}

	// ===========
	// FORGOT PASS
		function forgotPassword() {
		// ========
		// AGREE NO
			if (!$.loginSwitch.value) {
				var alerts = require('alerts');
				alerts.show(L('privacy_alert', "Please agree to the Weesh\nTearms of Use and Privacy Policy"));
				alerts = null;
		// ========
		// AGREE OK
			} else {
			// ======
			// NET NO
				if (!Ti.Network.online) {
					var alerts = require('alerts');
					alerts.show(L('alert_internet', "Please check your internet connection"));
					alerts = null;
			// ======
			// NET OK
				} else {
				// ===========
				// FORGOT PASS
					var url = "forgotPassword";
					var data = {
						email : $.email.value
					};
					var postFunction = function postFunction(e) {
						if (!Alloy.Globals.checkErrors(e)) {
							if (e.OK == "OK") {
							// ===========
							// REMOVE USER
								if (Ti.App.Properties.getObject('user')) {
									Ti.App.Properties.removeProperty('user');
									console.log("-- alloy() - LOGOUT and USER removed: " + Ti.App.Properties.getObject('user'));
								}
							// ======
							// INFORM
								var alerts = require('alerts');
								alerts.show(L('pass_forgot_mail', "Email has been sent to you"));
								alerts = null;
							}
						}
					// =====
					// CLEAR
						url = null;
						data = null;
						postFunction = null;
					};
					var posts = require('posts');
					posts.post(url, data, postFunction);
					posts = null;
				}
			}
		}
*/
