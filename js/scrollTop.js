$(document).ready(function() {

    var up =  $(".arrow_up");

    up.click(function() {
        $('html, body').animate({
            scrollTop: $(".header").offset().top
        }, 2000);
    });

    $(document).scroll(function () {

        if(window.scrollY > 200){
            up.addClass('shown');
        } else {
            up.removeClass('shown');
        }
    });

    if(window.scrollY > 200){
        up.addClass('shown');
    } else {
        up.removeClass('shown');
    }
});