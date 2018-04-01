$(document).ready(function() {

    var menuBtn = $(".menu_icon" ),
        closeBtn = $('.menu_small_item_times'),
        menuSmall = $(".menu_small" );

    menuBtn.click(function() {
        menuSmall.addClass('opened');
    });

    closeBtn.click(function () {
        menuSmall.removeClass('opened');
    });
});