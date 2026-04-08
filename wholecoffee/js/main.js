$(document).ready(function() {
    AOS.init({
        offset: ($(window).height() / 2),
        duration: 500,
        once: true
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
    
    /*
    faq 아코디언
    버튼을 클릭하면:
    */
    $('.faq .contents_box .item .accordion-button').click(function() {
        // 1. active 클래스 줌
        toggleClass($(this), 'active');
        toggleClass($(this).parent().parent(), 'active');
        // 2. aria-expanded를 True로
        if ($(this).attr('aria-expanded') == 'true') {
            $(this).attr('aria-expanded', 'false');            
        } else {
            $(this).attr('aria-expanded', 'true');
        }
        // 3. 내용 표시 또는 숨김
        
    });
});