

exports.post = function (url, data, postFunction) {
	var postURL = Ti.App.Properties.getString("serverUrl") + url;
	console.log("---------------------------");
	console.log("-- POST - START");
	console.log("-- POST - URL: " + postURL);

	for (var child in data) {
		if (data.hasOwnProperty(child)) {
			console.log("-- POST - DATA: " + data[child]);
		}
	}

	if (Titanium.Network.online) {
		var xhr = Ti.Network.createHTTPClient({
			onload: function () {
				if (this.status == "200") {
					if (checkJSON(this.responseText)) {
						postFunction(JSON.parse(this.responseText));
					}
				}
				console.log("-- POST - " + url + " - END");
			},
			onerror: function (e) {
				Alloy.Globals.HandleErr(e, url);
			},
			timeout: 10000
		});
		xhr.open('POST', postURL);
		xhr.send(data);
	} else {
		Alloy.Globals.HandleNoNet();
	}
};

function checkJSON(_json) {
	try {
		JSON.parse(_json);
	} catch (e) {
		var alerts = require('alerts');
		alerts.show(e);
		alerts = null;
		return false;
	}
	return true;
}

exports.get = function (url, data, getFunction) {
	var postURL = Ti.App.Properties.getString("serverUrl") + url;
	console.log("---------------------------");
	console.log("-- POST - START");
	console.log("-- POST - URL: " + postURL);

	for (var child in data) {
		if (data.hasOwnProperty(child)) {
			console.log("-- POST - DATA: " + data[child]);
		}
	}

	if (Titanium.Network.online) {
		var xhr = Ti.Network.createHTTPClient({
			onload: function () {
				console.log("-- POST - " + url + " - START");
				console.log("-- POST - " + url + " - STATUS: " + this.status);
				console.log("-- POST - " + url + " - TEXT:   " + this.responseText);

				if (this.status == "200") {
					IsJsonString(this.responseText);
					function IsJsonString(JSONtoParse) {
						try {
							JSON.parse(JSONtoParse);
						} catch (e) {
							var alerts = require('alerts');
							alerts.show(e);
							alerts = null;
							return false;
						}

						getFunction(JSON.parse(JSONtoParse));
						return true;
					}
				}
				console.log("-- POST - " + url + " - END");
			},
			onerror: function (e) {
				Alloy.Globals.HandleErr(e, url);
			},
			timeout: 10000
		});
		xhr.open('GET', postURL);
		xhr.send(data);
	} else {
		Alloy.Globals.HandleNoNet();
	}
};