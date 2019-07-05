var args = $.args;
var animation = require('animation');

function animate() {
    animation.make($.clicks, $.clicksMoans, $.moans, $.moansWhistles, $.whistles);
 
    setTimeout(function(){
        	animation.remove();
        	animation = null;
        	closeLoading();
    }, 3000);    
}

function closeLoading() {
	$.loading.close();
}

setTimeout(function(){
	animate(); 
}, 3000);