$(document).ready(function() {
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function() {
        $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('open');
        $(this).addClass('open');
    });
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function() {
        $(this).removeClass('open');
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
    });

    /***
     * .family_site 탭 관련 
    * ***/

    const footer_tab_dropdown_btn = $('.footer .family_site .tab-dropdown');
    const footer_tab = $('.footer .family_site ul');
    const footer_tab_items = $('.footer .family_site ul li');
    footer_tab_dropdown_btn.click(function() {
        if (footer_tab.hasClass('open')) {
            footer_tab.removeClass('open');
            footer_tab_dropdown_btn.attr('aria-expanded', 'false');
            footer_tab_dropdown_btn.attr('title', '연관 사이트 목록 열기');
        } else {
            footer_tab.addClass('open');
            footer_tab_dropdown_btn.attr('aria-expanded', 'true');
            footer_tab_dropdown_btn.attr('title', '연관 사이트 목록 닫기');
        }
    });

    footer_tab_items.click(function() {
        /* 메뉴 닫기 */
        footer_tab.removeClass('open');
        footer_tab_dropdown_btn.attr('aria-expanded', 'false');
    });
    
    
});