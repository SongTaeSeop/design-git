$(document).ready(function() {

    let isTop;
    let isDesktop;
    const breakpoint = 768;

    function check_desktop() {
        isDesktop = ($(window).width() > breakpoint);
    }

    check_desktop();

    $(window).resize(function() {
        check_desktop();
    });

    function check_top() {
        isTop = ($(window).scrollTop() <= 0);
        if ((isTop)) {
            $('.header').removeClass('scroll');
        } else if (isDesktop) {
            $('.header').addClass('scroll');
        }
    }

    check_top();

    $(window).scroll(function() {
        check_top();
    });

});