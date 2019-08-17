// ====
// MAIN
//$.main.open();
	// passed args
	var args = $.args;	
	
function openMain() { 
    var main = Alloy.createController('main').getView();
    main.open();
    main = null;

}

$.speciesWin.addEventListener('androidback', function(e) {
    openMain();
});