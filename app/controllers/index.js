// set server property
//Ti.App.Properties.setString("serverUrl", "http://82.214.92.197/backend/public/");
Ti.App.Properties.setString("serverUrl", "http://backend.tigerwhale.com/");

// open login
$.login.open();

// animate
//var loading = Alloy.createController("loading").getView();
//loading.open();
//loading = null;

//[{JSON --> New() Instance of the program}]
 
//Ge new link of this
console.log('starting');
// user exists
if (!Ti.App.Properties.hasProperty("user")) {

	console.log('has user');
	var main = Alloy.createController("main").getView();
	main.open();

	// user does not exist
} else {
	console.log('creating user');
	console.log("-- index() - creating folders");
	// species
	var specieFolder = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'species');
	if (!specieFolder.exists()) {
		specieFolder.createDirectory();
		console.log("-- index() - created folders: " + specieFolder.getName());
	} else {
		console.log("-- index() - CUSTOM folder already exist");
	}

	// profile
	var profileFolder = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'profile');
	if (!profileFolder.exists()) {
		profileFolder.createDirectory();
		console.log("-- index() - created folders: " + profileFolder.getName());
	} else {
		console.log("-- index() - PROFILE folder already exist");
	}
	specieFolder = null;
	profileFolder = null;
}

function register() {
	var register = Alloy.createController("register").getView();
	register.open();
}

function loginRegister() {
	$.email.blur();
	$.pass.blur();

	// NET NO
	if (!Ti.Network.online) {
		var alerts = require('alerts');
		alerts.show(L('alert_internet', "Please check your internet connection"));
		alerts = null;

		// NET OK
	} else {

		// LOGIN
		var url = "api/login";
		var url2 = "http://seasurface.tigerwhale.com/db.sqlite";
		var data = {
			email : "admin@admin.wave", //$.email.value.replace(/ /g,''),
			password : "admin" //$.pass.value.replace(/ /g,''),
			//remember_token : "",//To be added on the backend
			//device_data : AlloyGlobals.DeviceData
		};
		var localFilepath = Ti.Filesystem.applicationDataDirectory + "bd.sqlite";
		var postFunction = function postFunction(e) {
			//if (!Alloy.Globals.checkErrors(e)) {
			// REGISTER
			if (e.register == true) {

				// set user
				Ti.App.Properties.setObject('user', e);
				console.log("-- POST - " + url + " - user REGISTERED");
				console.log("-- POST - " + url + " - user.id: " + Ti.App.Properties.getObject('user').id);

				// create db
				var db = require('database');
				//Creating the local database
				db.create();
				db = null;

				// open info
				alert("registered");
			}

			// LOGIN
			if (e.success == true) {
				// set user

				Ti.App.Properties.setObject('user', e);
				console.log("-- POST - " + url + " - user LOGGED IN");
				console.log("-- POST - " + url + " - user.id: " + Ti.App.Properties.getObject('user').id);

				// create db
				//var db = require('database');
				//create_database();

				// open main
				var main = Alloy.createController("main").getView();
				main.open();
			}
			//}
			// =====
			// CLEAR
			url = null;
			data = null;
			postFunction = null;
		};
		var posts = require('posts');
		posts.post(url, data, postFunction);
		posts = null;

		/*var down = require('download');//Creating the local database
		 down.downloadOneFile(url2, localFilepath);//, callBack_DownloadOneFileFinished);
		 down = null;*/

		/*var inst = require('install');//Creating the local database
		 inst.downloadImages();//, callBack_DownloadOneFileFinished);
		 inst = null;*/

	}
}