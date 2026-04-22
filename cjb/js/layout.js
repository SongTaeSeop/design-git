$(document).ready(function() {

    let isTop;
    let isDesktop;
    const breakpoint = 1024;

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
        } else {
            $('.header').addClass('scroll');
        }
    }

    check_top();

    $(window).scroll(function() {
        check_top();
    });

    function toggleClass($target, className) {
        if (!className || typeof className !== 'string') return;

        const $els = ($target instanceof jQuery) ? $target : $($target);
        $els.each(function() {
            const $el = $(this);
            if ($el.hasClass(className)) {
            $el.removeClass(className);
            } else {
            $el.addClass(className);
            }
        });
    }

    /***
     * 사이트맵 열기 접기
     ***/

    const sitemap_open_btn = $('.header .left .gnb .sitemap_open');
    const sitemap_close_btn = $('.header .sitemap_wrap .util .sitemap_close');
    const sitemap_wrap = $('.header .sitemap_wrap');

    sitemap_open_btn.click(function() {
        if (!sitemap_wrap.hasClass('open')) {
            sitemap_wrap.addClass('open');
        }
    });
    sitemap_close_btn.click(function() {
        if (sitemap_wrap.hasClass('open')) {
            sitemap_wrap.removeClass('open');
        }
    });

    /***
     * 모바일) 메뉴 열기 접기
     ***/
    const depth1_btn = $('.header .sitemap_wrap ul.depth1 > li > a');
    depth1_btn.click(function(e) {
        if (!isDesktop) {
            if ($(this).next().is('ul.depth2')) {
                e.preventDefault();
                toggleClass($(this).parent(), 'open');
            }
        }
    });

});