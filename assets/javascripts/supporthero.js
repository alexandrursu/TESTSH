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
