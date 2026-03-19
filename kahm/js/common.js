$(document).ready(function() {
    let language_list
    $('.header .util .language_open').click(function() {
        language_list = $(this).next();
        if (language_list.hasClass('open')) {
            language_list.removeClass('open');
        } else {
            language_list.addClass('open');
        }
    });
});