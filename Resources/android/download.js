exports.downloadOneFile = function (url, localFilepath, callBack_DownloadOneFileFinished) {
    console.log("url: " + url);
    console.log("local path: " + localFilepath);
    console.log("----------------------------------------");
    if (Titanium.Network.online) {
        var xhr = Ti.Network.createHTTPClient({
            onerror: function (e) {
                Ti.API.info('Database: Download failed: url= ' + url + ' Error=' + e.error);
            },


            onload: function (e) {
                if ("android" === 'android') {
                    console.log('-- downloadImages() - SINGLE STARTED: ' + localFilepath);
                    var f = Titanium.Filesystem.getFile(localFilepath);
                    console.log("file path: " + f.nativePath);
                    console.log("data: " + this.responseData);
                    f.write(this.responseData);
                }
            }
        });
        xhr.open('GET', url);
        xhr.send();
    } else {

        var alerts = require('alert');
        alerts.note("Please check your internet connection.", 1);
        alerts = null;
    }
};