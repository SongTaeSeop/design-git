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

    /*
    * check_top:
    * 1. PC) 만약 화면 최상단에 있으면: fixed를 제거한다.
    * 2. Mobile) 만약 화면 최상단에 있으면: fixed를 제거한다.
    * 3. PC) 만약 화면을 스크롤하면: fixed를 추가한다.
    * 4. Mobile) 만약 화면을 스크롤하면: fixed를 추가하지 않는다.
    */

    function check_top() {
        isTop = ($(window).scrollTop() <= 0);
        if ((isTop)) {
            $('.header').removeClass('fixed');
        } else if (isDesktop) {
            $('.header').addClass('fixed');
        }
    }

    check_top();

    $(window).scroll(function() {
        check_top();
    });
});