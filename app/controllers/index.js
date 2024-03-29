Ti.App.Properties.setString("serverUrl", "http://backend.tigerwhale.com/");

// open login
$.login.open();

//Ge new link of this
console.log('starting');
// user exists
if (Ti.App.Properties.hasProperty("user")) {

    var inst = require('install'); //Creating the local database
    inst.getToDo(); //, callBack_DownloadOneFileFinished);
    inst = null;


    console.log('has user');
    var main = Alloy.createController("survey").getView();
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
            email: $.email.value, //$.email.value.replace(/ /g,''),
            password: $.pass.value //$.pass.value.replace(/ /g,''),
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

                Ti.App.Properties.setObject('id', e.user.id);
                Ti.App.Properties.setObject('email', e.user.email);
                Ti.App.Properties.setObject('points', e.user.points);
                Ti.App.Properties.setObject('phone', e.user.phone);
                Ti.App.Properties.setObject('note', e.user.note);
                Ti.App.Properties.setObject('level', e.user.level);
                Ti.App.Properties.setObject('name', e.user.userable.user.name);
                Ti.App.Properties.setObject('gender', e.user.userable.user.gender);
                Ti.App.Properties.setObject('country', e.user.userable.user.country);
                Ti.App.Properties.setObject('b_day', e.user.userable.user.b_day);

                console.log("-- POST - " + url + " - user LOGGED IN");
                console.log("-- POST - " + url + " - user.id: " + Ti.App.Properties.getObject('user'));

                var inst = require('install'); //Creating the local database
                inst.getToDo(); //, callBack_DownloadOneFileFinished);
                inst = null;

                // open main
                var main = Alloy.createController("survey").getView();
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

    }
}

function openIndex() {
    var main = Alloy.createController('index').getView();
    main.open();
}

$.login.addEventListener('androidback', function (e) {
    openIndex();
});