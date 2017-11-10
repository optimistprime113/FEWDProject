$(document).ready(function() {
    If 
    $("#shipflight").fadeIn(4000);
});

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