var $overlay = $('<div id ="overlay"></div>');
var $image = $("<img>");
var $fadeimage = $("#shipflight")

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
    
$($window).onload = function() {
    $fadeimage.fadeIn(3000)};