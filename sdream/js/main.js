$(document).ready(function() {
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 1000,
        //     disableOnInteraction: true,
        // },

        // effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    }); //new Swiper()

    /* 1. .header에 마우스를 올리면 over 클래스 추가, 내리면 삭제 */
    /* 2. 브라우저 스크롤을 아래로 내리면 .header에 fixed 클래스 추가, 브라우저를 다시 최상단으로 올리면 삭제 */
    $('.header').on('mouseenter', function() {
        // console.log(1);
        $(this).addClass('over');
    });
    $('.header').on('mouseleave', function() {
        $(this).removeClass('over');
    });
    
    let scrolling // 브라우저가 스크롤된 값

    function header_fixed() {
        scrolling = $(window).scrollTop();
        // console.log(scrolling);
        if (scrolling > 0) {
            // console.log('fixed (gt 0)');
            $('.header').addClass('fixed');
        } else {
            // console.log('no fixed (leq 0)');
            $('.header').removeClass('fixed');
        }
    }

    header_fixed() // 맨 처음 브라우저 로딩된 이후 한 번
    $(window).scroll(function() {
        header_fixed(); // 브라우저가 스크롤될 때마다 실행
    });

    /*** .webzine .swiper ***/
    const webzine_swiper = new Swiper('.webzine .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            // 541: {    /* 540px 이상일때 적용 */
            //     slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            //     spaceBetween: 16,
            // },
            769: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {
            nextEl: '.webzine .ctrl_wrap .next',
            prevEl: '.webzine .ctrl_wrap .prev',
        },  
    });


}); //$(document).ready()