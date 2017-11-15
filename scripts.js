//Side Picture fade in function

$(document).ready(function() {
    $("#shipflight").fadeIn(4000);
});

$(document).ready(function() {
    $("#talsplash").fadeIn(4000);
});
$(document).ready(function() {
    $("#westsplash").fadeIn(4000);
});

//Lightbox overlay and function

var $overlay = $('<div id ="overlay"></div>');
var $image = $("<img>");

$overlay.append($image);

$("body").append($overlay);

$("#gallery a").click(function(event){
    event.preventDefault();
    var select = $(this).attr("href");
    $image.attr("src", select);
    $overlay.show();
});

$overlay.click(function(){
    $overlay.hide();
});