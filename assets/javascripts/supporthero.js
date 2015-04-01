'use strict';

$(function() {
    // Implement data-hide, a replacement for data-dismiss (which destroys HTML elements in the DOM)
    $("[data-hide]").on("click", function(){
        $("." + $(this).attr("data-hide")).hide();
    });
});
// Create our namespace if it doesn't exist
if (!window.supporthero) {
    window.supporthero = {};
}

    // .position() uses position relative to the offset parent,
    var pos = $(".ticket--list .btn--add").position();

    // .outerWidth() takes into account border and padding.
    var width = $(".ticket--list .btn--add").outerWidth();

    //show the menu directly over the placeholder
    $(".ticket--list .list-group-item__action").css({
        position: "absolute",
        top: pos.top + "px",
        left: (pos.left + width) + "px"
    }).show();
