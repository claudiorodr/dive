exports.getToDo = function () {
  //function to use HTTP to connect to a web server and transfer the data. 

  var sendit = Ti.Network.createHTTPClient({
    onerror: function (e) {
      Ti.API.debug(e.error);
      alert('There was an error during the connection');
    },
    timeout: 1000 });

  //Here you have to change it for your local ip
  sendit.open("GET", "http://backend.tigerwhale.com/api/image/dive");
  sendit.send();


  //Function to be called upon a successful response 
  sendit.onload = function () {
    //Emptying the data to refresh the view 
    //Parsing into JSON format
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

        var download = require('download'); //Creating the local database
        download.downloadMultiFile(data, 0); //, change);
        download = null;

      } else {
        var contents = file.read();
        console.log("CONTEUDO DO FICHEIRO DE IMAGENS " + contents.text);
        var parse = parseInt(contents.text);

        if (parse == data["metadata"]) {
          var data = {
            status: "NOT NEED FOR DOWNLOAD" };

          //change(data);
        } else {
          file.write(" " + data["metadata"] + " ");
          var contents = file.read();
          console.log(
          "- created file: " + file.getName() + " image number: " + contents.text);

          download.downloadMultiFile(data, parse);
        }
      }
    };
    downloadImages(data);
  };
};