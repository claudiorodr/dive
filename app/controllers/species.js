// passed arguments
var args = $.args;

var columnCounter = 0;
var creatureData = [];
var creatureData1 = [];
Alloy.Globals.Sites = []; 
Ti.App.Properties.getList('myNmaes').length = 0;

var row, left, container, img, text = '';

// prepare


for (var i = 1; i < 19; i++) {
	left = 0;
    if (columnCounter == 0) {
        row = Ti.UI.createTableViewRow({ 
            className: "creature",
            top: 0,
            left: 0,
            // width: 400,
            height: Ti.UI.SIZE,
        }); 
        creatureData.push(row); 
    } else {
	    left = columnCounter * 33.333;
    }


    container = Ti.UI.createView({
        top: 0,
        left: left + "%",
        width: '33.33%',
        height : Ti.UI.SIZE
    }); 

    row.add(container);
	 		var file = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, i +'.png');
    // creature
    img = Ti.UI.createImageView({
        id: i,
        //top : 10,
        width: "100%",  
        // height: 200,
        image: file,
        verticalAlign: 'center'
        // title : creatures_array[i-1]~		
    });
    container.add(img);
    	// view, bottom 0 width 100%, height 25%, background black 90%
    	// label white coor
    	
	    container2 = Ti.UI.createView({  
	        bottom: 0,
	        width: '100%',
	        height : '25%',
	        opacity : 0.75,
	        backgroundColor : 'black'
	    });
    	 
		    // title
		    text = Ti.UI.createLabel({
		        //value : "Olá",
		        text: Alloy.Globals.Names[i-1],
		        font: {
		            fontFamily: 'Raleway-Bold',
		            fontSize: 24
		        },
		        color: "#FFFFFF"
		    }); 
		    container2.add(text);

    container.add(container2);
    
    columnCounter++;
    if (columnCounter == 3) {
        columnCounter = 0;
    }
} // eof for

// set
$.speciesTable.setData(creatureData);
// clear
creatureData = [];
creatureData = null;

row, left, container, img, text = null;

function select(e) {
    if (e.source.id) {
        console.log(e.source.id);

        //clear
        img, row, speciesTable = null;

        // close
        $.species.close();

        // open
        Alloy.createController('specie_detail', {
            img: e.source.id
        }).getView().open();
    }
}
 
function openMain() { 
    var main = Alloy.createController('main').getView();
    main.open();
    main = null;

}

$.species.addEventListener('androidback', function(e) {
    img,
    row,
    speciesTable = null;

    // close
    $.species.close();
    openMain();
});