$(document).ready(function() {
    let visual_bar_w;

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: false,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        loopPreventsSliding: false, /* loop 적용 시 딜레이가 추가됨 */

        // speed: 1000,

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_right .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_right .prev',  
        },

        on: {
            autoplayTimeLeft(s, time, progress) {
                // console.log(progress);
                visual_bar_w = 100 - (100 * progress);
                $('.visual .ctrl_left .bar span').width(visual_bar_w + '%');
            }
        },
    });

    $('.visual .ctrl_left .stop').on('click', function() {
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide();
        $('.visual .ctrl_left .play').show();
    });
    $('.visual .ctrl_left .play').on('click', function() {
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide();
        $('.visual .ctrl_left .stop').show();
    });

    /***  
     * 현재 너비에 따라 헤더 메뉴의 PC 버전, 모바일 버전 구분 
     * => 구분 기준: 너비 1025px 이상이면 PC, 1024px 이하면 모바일
     * 너비 계산 시점: 1. 처음 로딩 2. resize될 때마다
     * => win_w 값과 버전을 갱신하는 함수를 정의
     * ***/


    let win_w; // 너비
    const mobile_size = 1024; // 이것 이하면 모바일
    let device_status; // 'PC' 또는 'Mobile'

    function device_chk() {
        win_w = $(window).width();
        if (win_w > mobile_size) {
            device_status = 'PC';
        } else {
            device_status = 'Mobile';
        }
        console.log(device_status);
    }

    device_chk();

    $(window).resize(function() {
        device_chk();
    });

    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function() {
        if (device_status == 'PC') {
            $(this).addClass('over');
            $('.header').addClass('menu_over');
        }
    });
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave focusout', function() {
        if (device_status == 'PC') {
            $(this).removeClass('over');
        }
    });

    $('.header .gnb .gnb_bg').on('mouseenter', function() {
        if (device_status == 'PC') {
            $('.header').removeClass('menu_over');
        }
    });
    $('.header').on('mouseleave', function() {
        if (device_status == 'PC') {
            $('.header').removeClass('menu_over');
        }
    });

    $('.header .util .search .search_open').on('focusin', function() {
        if (device_status == 'PC') {
            $('.header').removeClass('menu_over');
        }
    });
    
    /***  
     * 모바일 메뉴: 
     * 1. 한 번 누르면 열림
     * 2. 열린 메뉴를 다시 누르면 닫힘
     * 3. 열린 메뉴는 단 하나임
     * 
     * 주의: 모바일 메뉴의 1차 메뉴를 클릭하면 링크를 이동하지 않고 메뉴를 열기만 해야 함
     * => 1차 메뉴 a의 href를 제어해야 함
     * => 이벤트를 정지시키는 함수가 있음 
				$().on("click", function (e) {
					e.preventDefault();
                )};
     * ***/

    $('.header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e) {
        if (device_status == 'Mobile') {
            e.preventDefault(); // href 링크 이동 막기 (모든 event 막기)
            // 클릭한 a의 부모 li의 open 클래스를 추가 또는 삭제 (토글)
            const gnb_open = $(this).parents('li').hasClass('open');

            if (gnb_open) {
                $(this).parents('li').removeClass('open');
                $(this).next().stop().slideUp(300, function() {
                    // 여기서 this는 이벤트 대상 (slideUp을 적용하는 태그)
                    $(this).removeAttr('style');
                });
            } else {
                $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('open');
                $('.header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').stop().slideUp(300, function() {
                    // 여기서 this는 이벤트 대상 (slideUp을 적용하는 태그)
                    $(this).removeAttr('style');
                });
                $(this).parents('li').addClass('open');
                $(this).next().stop().slideDown();
            }
        }
    });

    $('.header .gnb .gnb_open').on('click', function() {
        $('.header').addClass('menu_open');
    });
    $('.header .gnb .gnb_wrap .gnb_close').on('click', function() {
        $('.header').removeClass('menu_open');
    });

    /***  
     * 브라우저가 스크롤되면, header에 fixed 클래스 추가
     * 맨 위로 올라가면 fixed 클래스 삭제
     * => 먼저, 브라우저 로딩할 때 검사,
     * => 다음으로 브라우저를 스크롤할 때마다 검사
     * ***/

    let scrolling;

    function scroll_chk() {
        scrolling = $(window).scrollTop();
        if (scrolling > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    }

    scroll_chk();

    $(window).scroll(function() {
        scroll_chk();
    });

    /***
     * .book Swiper 팝업
     * ***/
    const book_swiper = new Swiper('.book .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 640px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        // loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.book .next',
            prevEl: '.book .prev',
        },
    });
});