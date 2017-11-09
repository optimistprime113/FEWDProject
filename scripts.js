var $overlay = $('<div id ="overlay"></div>');
var $image = $("<img>");

$overlay.append($image);

$("body").append($overlay);

$("#kuragallery a").click(function(event){
    event.preventDefault();
    var kuraselect = $(this).attr("href");
    $image.attr("src", kuraselect);
    $overlay.show();
});