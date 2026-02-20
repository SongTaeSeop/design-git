$(document).ready(function(){
    const visual_swiper = new Swiper('.visual  .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: true,
        },
        //effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });//visual_swiper


    
    
    /***********************************************************
     * PC 메뉴
     * .header .gnb .gnb_wrap ul.depth1 > li 여기에 마우스를 올리면 over 추가
     * 조건: over는 마우스를 올린 단 하나의 li에만 추가해야 함
     * 
     * .header에 마우스를 올리면 menu_over 추가
     * 조건: PC 버전
    **********************************/
    let win_w; // 브라우저 너비 값
    let device_status; // pc인지 모바일인지 저장
    let mobile_size = 1024; // 1024부터 모바일(메뉴)

    function device_chk() {
        win_w = $(window).width();
        // console.log(win_w);
        if (win_w > mobile_size) {
            device_status = 'pc';
        } else {
            device_status = 'mobile';            
        }
        console.log(device_status);
    }

    device_chk();
    $(window).resize(function() {
        // 브라우저가 resize될 때마다 1번 실행
        device_chk();
    });




    $('.header .gnb .gnb_open').on('click', function() {
        if (device_status == 'mobile') {
            $('.header').addClass('menu_open');
        }
    });
    
    $('.header .gnb .gnb_wrap .gnb_close').on('click', function() {
        if (device_status == 'mobile') {
            $('.header').removeClass('menu_open');
        }
    });
    
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function() {
        if (device_status == 'pc') {
            $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('over');
            $(this).addClass('over');
            $('.header').addClass('menu_over');
        }
    });

    $('.header .gnb .gnb_wrap ul.depth1 > li').on('click', function() {
        if (device_status == 'mobile') {
            $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('open');
            $(this).addClass('open');
        }
    });

    $('.header .gnb_bg').on('mouseenter', function() {
        $('.header').removeClass('menu_over');
    });

    /***********************************************************
     * 웹진 swiper
    **********************************/
    let scrolling //브라우저가 스크롤 된 값

    const webzine_swiper = new Swiper('.webzine .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            // 541: {    /* 768-540사이 */
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

    /*******************************************
     * top버튼을 클릭하면 상단으로(맨위로) 스크롤 
    *****************************************/
    $('.footer .top').on('click', function(){
        console.log('클릭')
        //$(window).scrollTop(0)
        $('html,body').animate({
            scrollTop : 0
        }, 500)
    })
    

})//$(document).ready