$(document).ready(function() {
    const language_btn = $('.header .util .language_open');
    const language_btn_sitemap = $('.header .sitemap .util_mobile .language_open');
    
    let language_list;

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
});