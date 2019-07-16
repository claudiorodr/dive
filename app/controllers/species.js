// passed arguments
var args = $.args;

var columnCounter = 0;
var creatureData = [];
var creatureData1 = [];
Alloy.Globals.Sites = []; 

var row, left, container, img, text = '';


// prepare
 
for (var i = 1; i < 19; i++) {
    if (columnCounter == 0) {
        row = Ti.UI.createTableViewRow({
            className: "creature",
            top: 0,
            left: 0,
            width: 400,
            height: 200,
        });
        creatureData.push(row);
    }

    left = (columnCounter + 1) * 2 + columnCounter * 30;
    container = Ti.UI.createView({
        top: 0,
        left: left + "%",
        width: '30%',
        layout: "vertical"
    });
    row.add(container);

    // creature
    img = Ti.UI.createImageView({
        id: i,
        //top : 10,
        width: 200,
        height: 200,
        image: "http://backend.tigerwhale.com/api/dive/image/" + i,// + ".jpg",
        verticalAlign: 'center'
        // title : creatures_array[i-1]~		
    });
    container.add(img);

    // title
    text = Ti.UI.createLabel({
        bottom: 0,
        textAlign: "center",
        // text : creatures_array[i-1],
        font: {
            fontFamily: 'Smoolthan-Bold',
            fontSize: 14
        },
        color: "#FFFFFF"
    });
    container.add(text);

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