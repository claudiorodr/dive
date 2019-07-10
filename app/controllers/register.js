// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

var sendit = Ti.Network.createHTTPClient({
    onerror: function(e) {
        Ti.API.debug(e.error);
        alert('There was an error during the connection');
    },
    timeout: 1000,
});
//Here you have to change it for your local ip  	
sendit.open("GET", "http://backend.tigerwhale.com/api/country");
sendit.send();


//Function to be called upon a successful response 
sendit.onload = function() {
    //Emptying the data to refresh the view 
    //Parsing into JSON fromat
    var json = JSON.parse(this.responseText);
    if (!json) {
        Titanium.API.info('Error - Null return!');
        return;
    }
    //Saving into var values from php page
    var i;
    //Saving into var values from php page
    var jsoncountries = json.countries;

    for (i = 0; i < jsoncountries.length; i++) {
        var row = Ti.UI.createPickerRow({
            title: Alloy.Globals.Countries[i],
            myId: i,
            textAlign: "center",
            font: {
                fontFamily: 'Smoolthan-Bold',
                fontSize: 16
            },
            color: "#000080",
            hintText: L('email_hintText', "COUNTRY"),
            hintTextColor: "gray",
            backgroundColor: "#EEEEEE",
            borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, //iOS only
            borderRadius: 0,
            borderColor: "#000080",
            borderWidth: 1,
            height: 50,
            returnKeyType: Titanium.UI.RETURNKEY_DONE
        });
        $.column1.addRow(row);
    }
};


Ti.App.Properties.setObject('user', {
    "email": "",
    "password": "",
    "first_name": "",
    "last_name": "",
    "phone": "",
    "gender": "",
    "country": "",
    "b_day": "",
    "note": ""
});

function register_user() {

    // store to user object
    Ti.App.Properties.setObject('user', {
        "userable_type": "UserPerson",
        //  "number_dives" = '0-10',
        "email": "claudio.duarte.98@live.com.pt", //$.email.value,
        "password": "blablabla", //$.password.value,
        "first_name": "claudio", //"$.first_name.value,
        "last_name": "rodrigues", //$.last_name.value,
        "phone": "964039199", //$.phone.value,
        "gender": "F", //$.gender.value,
        "country": "Portugal", //$.country.getSelectedRow(0).title,
        "b_day": "1998-08-08",
        "note": "blablabla" //$.note.value
    });


    // make a HTTP request

    var url = "api/register";
    var data = Ti.App.Properties.getObject('user');

    var postFunction = function postFunction(e) {
        alert("registered");
        //if (!Alloy.Globals.checkErrors(e)) {
        alert("registered");


        // REGISTER
        if (e.success == true) { 

            // set user 
            Ti.App.Properties.setObject('user', e);
            console.log("-- POST - " + url + " - user REGISTERED");
            console.log("-- POST - " + url + " - user.id: " + Ti.App.Properties.getObject('user').id);

            // create db
            //var db = require('db'); //Creating the local database
            //db.create();
            //db = null;

            // open info
            alert("registered");
 
        }

        //}

        // CLEAR
        url = null;
        data = null;
        postFunction = null; 
    };

    var posts = require('posts');
    posts.post(url, data, postFunction);
    posts = null;
}


//$.email.value = $.first_name.value = $.last_name.value = $.password.value = $.pass_confirm.value = $.phone.value = $.gender.value= $.country.value= $.b_day.value= $.note.value = "claudio.rodrigues98@mail.com.pt";