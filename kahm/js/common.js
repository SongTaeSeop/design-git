$(document).ready(function() {
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function() {
        $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('open');
        $(this).addClass('open');
    });

    $('.header .logo').on('mouseenter focusin', function() {
        $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('open');
    });
    $('.header .util .search').on('mouseenter focusin', function() {
        $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('open');
    });

    const language_btn = $('.header .util .language_open');
    const language_btn_sitemap = $('.header .sitemap .util_mobile .language_open');
    const menu_btn_open = $('.header .util .sitemap_open');
    const menu_btn_close = $('.header .sitemap .util_mobile .sitemap_close');
    const sitemap_dropdown_menu = $('.header .sitemap .sitemap_wrap ul.depth1 > li:has(ul.depth2) > a');
    
    let language_list;
    let isMobile;

    function check_mobile() {
        isMobile = ($(window).width() < 1025);
    }

    check_mobile();

    $(window).resize(function() {
        check_mobile();
    });

    language_btn.click(function() {
        language_list = $(this).next();
        if (language_list.hasClass('open')) {
            language_list.removeClass('open');
        } else {
            language_list.addClass('open');
        }
    });

    language_btn_sitemap.click(function() {
        language_list = $(this).next();
        if (language_list.hasClass('open')) {
            language_list.removeClass('open');
        } else {
            language_list.addClass('open');
        }
    });

    menu_btn_open.click(function() {
        $('.header .sitemap').addClass('open');
    });
    menu_btn_close.click(function() {
        $('.header .sitemap').removeClass('open');
    });

    sitemap_dropdown_menu.click(function() {
        if (isMobile) {
            if ($(this).parent().hasClass('open')) {
                $(this).parent().removeClass('open');
            } else {
                $(this).parent().addClass('open');
            }
        }
    })

    /* 
    * #family_site_select
    * ***/
   
    $('#family_site_select').on("change",function() {
        if ($(this).val() != "") {
            window.open($(this).val());
        }
        $(this).val("");
    });    
});