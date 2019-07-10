// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
function downloadImages(data) {
  console.log("DOWNLOAD IMAGES");
  console.log("STATUS "+data.status);
  console.log("METADATA "+data["metadata"]);

  var file = Ti.Filesystem.getFile(
    Ti.Filesystem.applicationDataDirectory,
    "imagenum.txt"
  );
  if (!file.exists()) {
    file.write(" " + data["metadata"] + " ");
    var contents = file.read();
    console.log("- created file: " + file.getName() + " image number: " + contents.text);
    download.downloadMultiFile(data, 0, change);
  } else {
    var contents = file.read(); 
    console.log("CONTEUDO DO FICHEIRO DE IMAGENS "+contents.text);
    var parse = parseInt(contents.text);

    if (parse == data["metadata"]) {
      var data = { status: "NOT NEED FOR DOWNLOAD" };
      change(data);
    } else {
      file.write(" " + data["metadata"] + " ");
      var contents = file.read();
      console.log(
        "- created file: " + file.getName() + " image number: " + contents.text
      );
      download.downloadMultiFile(data, parse, change);
    }
  }
} 