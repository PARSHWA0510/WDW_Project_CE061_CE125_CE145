var $ken = $('.ken');

var walkLeft = function(){
    $ken.addClass('walk').css({ marginLeft:'-=10px' });
};
var walkRight = function(){
    $ken.addClass('walk').css({ marginLeft:'+=10px' });
};


$('#left').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkLeft(); }
    else { $ken.removeClass('walk'); }
});
$('#right').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkRight(); }
    else { $ken.removeClass('walk'); }
});

$(document).on('keydown keyup', function(e) {
    if (e.type == 'keydown') 
    { 
        // ←← →→ walking
        if (e.keyCode == 37) { walkLeft(); }
        if (e.keyCode == 39) { walkRight(); }
    }
    console.log(e.keyCode);
});
