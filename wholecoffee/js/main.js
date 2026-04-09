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
    내부 링크 버튼:
    클릭하면 아래로 스크롤
    탭 강조 효과는 layout.js에서
    */

    function scrollToElement(elementSelector, instance = 0) {
        const elements = document.querySelectorAll(elementSelector);
        if (elements.length > instance) {
            elements[instance].scrollIntoView({
                behavior: "smooth"
            });
        }
    }
    $('.toc_mobile ul li a').click(function(e) {
        e.preventDefault();
        scrollToElement($(this).attr('href'));
    })
    
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

    /*
    Top 버튼
    */
   $('.util .top').click(function() {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 300);
   });

   
});