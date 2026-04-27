$(document).ready(function() {
    let isDesktop;
    let isTablet;

    const breakpoint1 = 1024;
    const breakpoint2 = 768;

    function check_desktop() {
        isDesktop = ($(window).width() > breakpoint1);
        isTablet = ($(window).width() > breakpoint2);
    }

    check_desktop();

    $(window).resize(function() {
        check_desktop();
    });
    
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: false,
        },

        // effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        loopPreventsSliding: false, /* loop 적용 시 딜레이가 추가됨 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });

    /***
     * .visual 버튼
     * ***/
    $('.visual .stop').click(function() {
        visual_swiper.autoplay.stop();
    });
    $('.visual .play').click(function() {
        visual_swiper.autoplay.start();
    });

    
    /***
     * .visual tab 버튼
     * 
     * 
     * 1. 선택한 li에 active를 주고 나머지는 제거
     * 2. 선택한 li 버튼 내용 뒤로 <span class="sr-only"> 선택됨</span> 추가하고 나머지는 제거
     * 3. 선택한 li의 aria-selected를 true로 하고 나머지는 false로 설정
     * 4. 선택한 li의 aria-controls에 해당하는 클래스를 tab-conts에서 찾아 active 클래스를 주고 나머지는 제거
     * ***/

    const visual_tab_button = $('.visual .onair_box .tab li');
    const visual_tab_conts = $('.visual .onair_box .tab-conts .tab-contents');
    const sr_only_selected = '<span class="sr-only"> 선택됨</span>';

    let selected_tab;

    visual_tab_button.click(function() {
        visual_tab_button.removeClass('active');
        $(this).addClass('active');
        
        visual_tab_button.find('.sr-only').remove();
        $(this).find('.tab-item').append(sr_only_selected);

        visual_tab_button.attr('aria-selected', 'false');
        $(this).attr('aria-selected', 'true');

        selected_tab = $(this).attr('aria-controls');

        visual_tab_conts.removeClass('active');
        $('#' + selected_tab).addClass('active');

        visual_tab_conts.removeClass('active');
        $('#' + selected_tab).addClass('active');
    });

    /***
     * .news tab 버튼
     * 1. 선택한 li에 active를 주고 나머지는 제거
     * 2. 선택한 li 버튼 내용 뒤로 <span class="sr-only"> 선택됨</span> 추가하고 나머지는 제거
     * 3. 선택한 li의 aria-selected를 true로 하고 나머지는 false로 설정
     * 4. 선택한 li의 aria-controls에 해당하는 클래스를 tab-conts에서 찾아 active 클래스를 주고 나머지는 제거
     * ***/

    const news_tab_button = $('.news .contents_box .tab li');
    const news_tab_conts = $('.news .contents_box .tab-conts .tab-contents');

    news_tab_button.click(function() {
        news_tab_button.removeClass('active');
        $(this).addClass('active');
        
        news_tab_button.find('.sr-only').remove();
        $(this).find('.tab-item').append(sr_only_selected);

        news_tab_button.attr('aria-selected', 'false');
        $(this).attr('aria-selected', 'true');

        selected_tab = $(this).attr('aria-controls');

        news_tab_conts.removeClass('active');
        $('#' + selected_tab).addClass('active');

        news_tab_conts.removeClass('active');
        $('#' + selected_tab).addClass('active');
    });

    /* 모바일) 강조된 탭 아이템으로 스크롤 */
    const news_tab_list = $('.news .contents_box .tab ul li');

    var mut = new MutationObserver(function(mutations, mut){
        if (mutations.length > 1) {
            filtered = Array.from(mutations).filter((dom) => (dom.target.className == 'active'));
            target = $(filtered[0].target);
            
            target.parent()[0].scrollTo({
                left: target[0].offsetLeft - 16,
                behavior: 'smooth'
            });
        }
    });

    news_tab_list.each(function(idx, element) {
        mut.observe(element, {
            'attributes': true,
            'attributeFilter': ['class']
        });
    });

    const vod_swiper = new Swiper('.vod .swiper', { /* 팝업을 감싼는 요소의 class명 */
        // effect: "fade", /* fade 효과 */
        spaceBetween: 24,
        enabled: false,
        breakpoints: {
            1025: {
                enabled: true
            },
        },
        navigation: {
            nextEl: '.vod .contents_box .next',
            prevEl: '.vod .contents_box .prev',
        },
    });

    const vod_more_btn = $('.vod .contents_box .more');
    const vod_first_swiper_slide = $('.vod .contents_box .swiper-slide').first();
    
    vod_more_btn.click(function() {
        if (!isDesktop && !vod_first_swiper_slide.hasClass('open')) {
            vod_first_swiper_slide.find('.vod_grid').addClass('open');
            vod_more_btn.hide();
        }
    });


    /***
     * .program Swiper
     ***/

    const program_swiper = new Swiper('.program .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: "auto", /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        observeSlideChildren: true,
        enabled: false,
        breakpoints: {
            769: {
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
                enabled: true
            },
        },
        navigation: {
            nextEl: '.program .contents_box .next',
            prevEl: '.program .contents_box .prev',
        },
    });

    const program_more_btn = $('.program .contents_box .more');
    const program_list = $('.program .contents_box .swiper-wrapper');
    const program_tab_btn = $('.program .tab li');
    
    program_more_btn.click(function() {
        selected_filter = $('.program .tab li.active').attr('id');
        if (!isTablet && !program_list.hasClass('open')) {
            program_list.addClass('open');
            if (selected_filter == 'all') {
                program_list.children().show();
            } else {
                program_list.children().hide(); // 전체 숨기기
                program_list.children('[data-day~="' + selected_filter + '"]').show();
            }
            program_more_btn.hide();
        }
    });

    function swiper_overflow_check(s,target, className) {
        if (!s.isLocked) {
            target.addClass(className);
        } else {
            target.removeClass(className);
        }
    }

    /***
     * .program .tab 버튼으로 Swiper 필터링
     * 1. 선택한 li에 active를 주고 나머지는 제거
     * 2. 선택한 li 버튼 내용 뒤로 <span class="sr-only"> 선택됨</span> 추가하고 나머지는 제거
     * 3. 선택한 li의 aria-checked true로 하고 나머지는 false로 설정
     * 4. 선택한 날짜에 맞는 program_list 내 li을 show하고 나머지는 hide
     * ***/


    program_tab_btn.click(function() {
        program_tab_btn.removeClass('active');
        $(this).addClass('active');
        
        program_tab_btn.find('.sr-only').remove();
        $(this).find('.tab-item').append(sr_only_selected);

        program_tab_btn.attr('aria-checked', 'false');
        $(this).attr('aria-checked', 'true');

        selected_filter = $(this).attr('id');
        program_list.removeClass('open');
        if (selected_filter == 'all') {
            program_list.children().show();
        } else {
            program_list.children().hide(); // 전체 숨기기
            program_list.children('[data-day~="' + selected_filter + '"]').show();
        }
        program_swiper.update();
        swiper_overflow_check(program_swiper, $('.program .swiper'), 'drag');

        if (program_list.children(':visible').length > 0) {
            if (program_list.children(':visible').length > 4) {
                if (!isTablet) {
                    program_list.children(':visible').slice(4).hide();
                    program_more_btn.show();
                }
            } else {
                program_more_btn.hide();
            }
            program_list.find(':visible a').first().focus();
        }
    });
    
    program_tab_btn.each(function(idx, element) {
        mut.observe(element, {
            'attributes': true,
            'attributeFilter': ['class']
        });
    });

    swiper_overflow_check(program_swiper, $('.program .swiper'), 'drag');

    $(window).on('pointermove mousemove touchmove', function(e){  /* html cursor가 마우스 포인터를 따라다니게 하는 값 */
        $('.cursor').css('left', e.pageX + 'px');
        $('.cursor').css('top', e.pageY + 'px');
    });

    $('.program .swiper').hover(function() { /* 특정한 요소에 마우스를 올렸을때만 on 클래스 주기 */
        if (isTablet && $(this).hasClass('drag')) {
            $('.cursor').toggleClass('on');
        }
    });

    /***
     * .notice Swiper
     ***/

    const notice_swiper = new Swiper('.notice .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            328: {
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
            769: {
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        navigation: {
            nextEl: '.notice .contents_box .next',
            prevEl: '.notice .contents_box .prev',
        },
        pagination: {
            el: ".notice .swiper-pagination",
            type: "progressbar",
        },
    });

    /***
     * .advertise Swiper
     ***/

    const advertise_swiper = new Swiper('.advertise .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        loopPreventsSliding: false, /* loop 적용 시 딜레이가 추가됨 */
        navigation: {
            nextEl: '.advertise .swiper_nav .next',
            prevEl: '.advertise .swiper_nav .prev',
        },
        pagination: {
            el: ".advertise .swiper-pagination",
            type: "fraction",
        },
    });

    AOS.init({
        offset: ($(window).height() / 2), // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
        once: true
    });
});