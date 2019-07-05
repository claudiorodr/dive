function create_database() {
    var animation = require("animation");
    animation.make($.clicks, $.clicksMoans, $.moans, $.moansWhistles, $.whistles);
    var suiteDir = Ti.Filesystem.applicationDataDirectory;
    var folder = Ti.Filesystem.getFile(suiteDir, 'bd.sqlite');
    console.log("hello");

    Ti.API.info(" Verify if file exist-" + folder.nativePath + "-" + folder.exists());
    if (folder.exists()) {
        animation.remove($.clicks, $.clicksMoans, $.moans, $.moansWhistles, $.whistles);
        change();
    } else {
        var url = "http://seasurface.tigerwhale.com/db.sqlite";
        var localFilePath = Ti.Filesystem.applicationDataDirectory + "bd.sqlite";
        var download = require('download');
        download.downloadOneFile(url, localFilePath, change);
    }
}