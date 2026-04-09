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

    /*
    내부 링크 버튼:
    클릭하면 아래로 스크롤
    */

    function scrollToElement(elementSelector, instance = 0) {
        const elements = document.querySelectorAll(elementSelector);
        if (elements.length > instance) {
            elements[instance].scrollIntoView({
                behavior: "smooth"
            });
        }
    }
    $('.header .toc ul li a').click(function(e) {
        e.preventDefault();
        console.log($(this).attr('href'));
        scrollToElement($(this).attr('href'));
    });

    /*
    화면 스크롤에 따른 탭 강조 갱신
    */

    const sections = $('section');

    let id;

    const observer = new window.IntersectionObserver(([entry]) => {

        if (entry.isIntersecting) {
            target = entry.target;
            old_id = id;
            id = $(target).attr('data-section');
            // console.log(old_id, id);
            if (old_id != id) {
                $('.header .toc ul li a[href="#' + old_id + '"]').removeClass('active');
                $('.header .toc ul li a[href="#' + id + '"]').addClass('active');
                $('.toc_mobile ul li a[href="#' + old_id + '"]').removeClass('active');
                $('.toc_mobile ul li a[href="#' + id + '"]').addClass('active');
            }
        }
        }, {
            root: null,
            threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
    });

    sections.each(function(idx, element) {
        observer.observe(element);
    });

    /* 모바일) 강조된 탭 아이템으로 스크롤 */

    const toc_items = $('.toc_mobile ul li a');

    var mut = new MutationObserver(function(mutations, mut){
        if (mutations.length > 1) {
            filtered = Array.from(mutations).filter((dom) => (dom.target.className == 'active'));
            target = $(filtered[0].target).parent();
            target.parent()[0].scrollTo({
                left: target[0].offsetLeft,
                behavior: 'smooth'
            });
        }
    });

    toc_items.each(function(idx, element) {
        mut.observe(element, {
            'attributes': true,
            'attributeFilter': ['class']
        });
    });

    // 위 코드는 포커스가 이동해서 안 됨
});