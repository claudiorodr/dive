exports.getToDo = function () {

    var sendit = Ti.Network.createHTTPClient({
        onerror: function (e) {
            Ti.API.debug(e.error);
            alert('There was an error during the connection');
        },
        timeout: 1000
    });

    sendit.open("GET", "http://backend.tigerwhale.com/api/dive/image");
    sendit.send();

    sendit.onload = function () {
        var data = JSON.parse(this.responseText);

        downloadImages = function (data) {
            console.log("DOWNLOAD IMAGES");
            console.log("STATUS " + data.status);
            console.log("METADATA " + data["metadata"]);

            var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'imagenum.txt');
            if (!file.exists()) {
                file.write(" " + data["metadata"] + " ");
                var contents = file.read();
                console.log("- created file: " + file.getName() + " image number: " + contents.text);

                var download = require('download');
                download.downloadMultiFile(data, 0);
                download = null;
            } else {
                var contents = file.read();
                console.log("CONTEUDO DO FICHEIRO DE IMAGENS " + contents.text);
                var parse = parseInt(contents.text);

                if (parse == data["metadata"]) {
                    var data = {
                        status: "NOT NEED FOR DOWNLOAD"
                    };
                } else {
                    file.write(" " + data["metadata"] + " ");
                    var contents = file.read();
                    console.log("- created file: " + file.getName() + " image number: " + contents.text);
                    download.downloadMultiFile(data, parse);
                }
            }
        };
        downloadImages(data);
    };
};