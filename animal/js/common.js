/***
 * header와 footer 공통 사항에 들어가는 스크립트
 * ***/

$(document).ready(function() {
    let device_status; // 'Mobile': 모바일 화면, 'PC': PC 화면
    let window_w;
    const mobile_size = 1024;

    function device_chk() {
        window_w = $(window).width();
        if (window_w > mobile_size) {
            device_status = 'PC';
        } else {
            device_status = 'Mobile';
        }
    }

    device_chk();

    $(window).resize(function() {
        device_chk();
    });

    $('.header .gnb ul.depth1 > li:has(ul.depth2)').on('mouseenter', function() {
        if (device_status == 'PC') {
            $('.header').addClass('menu_over');
            $(this).addClass('over');
            $(this).find('ul.depth2').stop().slideDown(300);
        }
    });
    $('.header .gnb ul.depth1 > li').on('mouseleave', function() {
        if (device_status == 'PC') {
            $(this).removeClass('over');
            $(this).find('ul.depth2').stop().slideUp(0);
        }
    });

    $('.header').on('mouseleave', function() {
        $(this).removeClass('menu_over');
    });

    // sitemap_btn
    $('.header .util .sitemap_btn').on('click', function() {
        const sitemap_open = $('.header').hasClass('menu_open');
        console.log(sitemap_open);
        if (sitemap_open) {
            $('.header').removeClass('menu_open');
        } else {
            $('.header').addClass('menu_open');
        }

    })
});