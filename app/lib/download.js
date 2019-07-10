exports.downloadOneFile = function(url, localFilepath, callBack_DownloadOneFileFinished) {
       console.log("url: " + url);
       console.log("local path: " + localFilepath);
       console.log("----------------------------------------");
       if (Titanium.Network.online) {
            var xhr = Ti.Network.createHTTPClient({
               onerror : function(e) {
                   Ti.API.info('Database: Download failed: url= ' + url + ' Error=' + e.error);
                   /*callBack_DownloadOneFileFinished({
                       success : e.error,
                       path : ''
                   });*/
                    },
                   // CLOSE AN ANIMATION HERE AFTER DOWNLOAD




               onload: function(e) {
                   if(Titanium.Platform.name === 'android') {
                       
                       // On android HTTPClient will not save the file to disk. So have to hack around it
                       console.log('-- downloadImages() - SINGLE STARTED: ' + localFilepath);
                       var f = Titanium.Filesystem.getFile(localFilepath);
                       console.log("file path: " + f.nativePath);
                       console.log("data: " + this.responseData);
                       f.write(this.responseData);
                        
                        /*callBack_DownloadOneFileFinished({
                            success : this.status,
                            path : f.nativePath ,
                        });*/

                   }
                   // OPEN AN ANIMATION HERE

               }
         });
           xhr.open('GET', url);
           xhr.send();

       } else {

               var alerts = require('alert');
               alerts.note("Please check your internet connection.",1);
               alerts = null;
       }
   };
   
exports.downloadMultiFile = function(data,starter,callBack_DownloadMultipleFileFinished){
  var queueIndex = starter;

  if (Titanium.Network.online) {
    var processQueue = function(dados) {
      if (queueIndex < data["metadata"]) {
      	if(dados){
	      console.log(dados.status);  		
      	}
        var localFilePath =Ti.Filesystem.applicationDataDirectory +"imagens/" +
          data["data"][queueIndex]["photo_number"] +".png";
        downloadOneImage(data["data"][queueIndex].url,localFilePath,processQueue);
        queueIndex++;
      } else {
        callBack_DownloadMultipleFileFinished({ status: "ACABOU O DOWNLOAD DAS IMAGENS" });
      }
    };
    processQueue();
  } else {
    var alerts = require("alert");
    alerts.note("Please check your internet connection.", 1);
    alerts = null;
  }

  function downloadOneImage(url,localFilepath,callBack_DownloadOneFileFinished){
    var postURL = Ti.App.Properties.getString("serverUrl") + url;
    console.log("url: " + postURL);
    console.log("local path: " + localFilepath);

    if (Titanium.Network.online) {
      var xhr = Ti.Network.createHTTPClient({
        onerror: function(e) {
          Ti.API.info("IMAGE: Download failed: url= " + postURL + " Error=" + e.error);
          callBack_DownloadOneFileFinished({
            status: e.error
          });
        },
        onload: function(e) {
          console.log("-- Image() - SINGLE STARTED: " + localFilepath);
          var f = Titanium.Filesystem.getFile(localFilepath);
          console.log("file path: " + f.nativePath);
          f.write(this.responseData);
          callBack_DownloadOneFileFinished({
            status: "success"
          });
        }
      });
      xhr.open("GET", postURL);
      xhr.send();
    } else {
      var alerts = require("alert");
      alerts.note("Please check your internet connection.", 1);
      alerts = null;
    }
  }
};