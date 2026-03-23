$(document).ready(function() {
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        parallax: true,
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: false,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });


    /***
     * .museum Swiper 
    * ***/

    const first_class_museum_tit_list = $('#first_class_museum .txt_box .swiper h3');
    const first_class_museum_more_each = $('#first_class_museum .controls_box .more');
    const first_class_museum_more_link = ['https://kahm.kr/1%EC%A2%85-%EC%82%AC%EB%A6%BD%EB%AF%B8%EC%88%A0%EA%B4%80/view/380168@2553215',
        'https://kahm.kr/1%EC%A2%85-%EC%82%AC%EB%A6%BD%EB%AF%B8%EC%88%A0%EA%B4%80/view/390409@11777955',
        'https://kahm.kr/%EC%A3%BC%EC%9D%80%ED%99%94%EB%AF%B8%EC%88%A0%EA%B4%80'
    ];

    const second_class_museum_tit_list = $('#second_class_museum .txt_box .swiper h3');
    const second_class_museum_more_each = $('#second_class_museum .controls_box .more');
    const second_class_museum_more_link = ['https://kahm.kr/%EA%B0%95%ED%83%9C%EC%84%B1%EB%AF%B8%EC%88%A0%EA%B4%80',
        'https://kahm.kr/%EC%8B%A0%EC%9A%A9%EB%8D%95%EB%AF%B8%EC%88%A0%EA%B4%80',
        'https://kahm.kr/%EC%A1%B0%EB%8F%84%EC%A4%91%EB%AF%B8%EC%88%A0%EA%B4%80'
    ];

    const first_class_museum_txt_swiper = new Swiper('#first_class_museum .txt_box .swiper', {
        parallax: true,
        effect: "fade", /* fade 효과 */
        loop: true,
    });

    const first_class_museum_img_swiper = new Swiper('#first_class_museum .img_box .swiper', { /* 팝업을 감싼는 요소의 class명 */
        parallax: true,
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 24,
        
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '#first_class_museum .next',  /* 다음 버튼의 클래스명 */
            prevEl: '#first_class_museum .prev',  
        },
        on: {
            slideChange: function(){
                first_class_museum_more_each.find('span').text(first_class_museum_tit_list[this.realIndex].innerText + ' ');
                first_class_museum_more_each.attr('href', first_class_museum_more_link[this.realIndex]);
            }
        }
    });

    first_class_museum_img_swiper.controller.control = first_class_museum_txt_swiper;
    first_class_museum_txt_swiper.controller.control = first_class_museum_img_swiper;

    const second_class_museum_txt_swiper = new Swiper('#second_class_museum .txt_box .swiper', {
        parallax: true,
        effect: "fade", /* fade 효과 */
        loop: true,
    });

    const second_class_museum_img_swiper = new Swiper('#second_class_museum .img_box .swiper', { /* 팝업을 감싼는 요소의 class명 */
        parallax: true,
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 24,
        
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '#second_class_museum .next',  /* 다음 버튼의 클래스명 */
            prevEl: '#second_class_museum .prev',  
        },
        on: {
            slideChange: function(){
                second_class_museum_more_each.find('span').text(second_class_museum_tit_list[this.realIndex].innerText + ' ');
                second_class_museum_more_each.attr('href', second_class_museum_more_link[this.realIndex]);
            }
        }
    });

    second_class_museum_img_swiper.controller.control = second_class_museum_txt_swiper;
    second_class_museum_txt_swiper.controller.control = second_class_museum_img_swiper;

    
    /***
     * .museum 탭 관련 
     * 할 일(위에서 아래로):
     * 1. 모바일) tab-dropdown을 클릭하면 ul에 open 클래스 줌
     * 2. 모바일) tab-dropdown의 aria-expanded를 true로 설정
     * 3. 선택한 li의 글자를 tab-dropdown의 span 글자 변경
     * 4. 선택한 li에 active를 주고 나머지는 제거
     * 5. 선택한 li의 aria-selected를 true로 하고 나머지는 false로 설정
     * 6. 선택한 li의 aria-controls에 해당하는 클래스를 tab-conts에서 찾아 active 클래스를 주고 나머지는 제거
    * ***/

    const museum_tab_dropdown_btn = $('.museum .tab .tab-dropdown');
    const museum_tab = $('.museum .tab ul');
    const museum_tab_items = $('.museum .tab ul li');
    const museum_tab_contents = $('.museum .tab_wrapper .tab-contents');
    museum_tab_dropdown_btn.click(function() {
        if (museum_tab.hasClass('open')) {
            museum_tab.removeClass('open');
            museum_tab_dropdown_btn.attr('aria-expanded', 'false');
        } else {
            museum_tab.addClass('open');
            museum_tab_dropdown_btn.attr('aria-expanded', 'true');
        }
    });

    museum_tab_items.click(function() {
        /* 메뉴 닫기 */
        museum_tab.removeClass('open');
        museum_tab_dropdown_btn.attr('aria-expanded', 'false');
        /* 메뉴 이름 변경 */
        museum_tab_dropdown_btn.text($(this).find('span.tab-item-name').text());
        /* 선택한 메뉴만 active */
        museum_tab_items.removeClass('active');
        $(this).addClass('active');
        /* 선택한 메뉴만 aria-selected */
        museum_tab_items.attr('aria-selected', 'false');
        $(this).attr('aria-selected', 'true');
        /* 선택한 메뉴의 탭만 active 나머지는 제거 */
        museum_tab_contents.removeClass('active');
        $('#' + $(this).attr('aria-controls')).addClass('active');
    });


    /***
     * .artist Swiper 
    * ***/
    const artist_swiper = new Swiper('.artist .tab-contents .swiper', {
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
            1025: {    /* 1025px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },

        pagination: {
            el: ".artist .tab-contents .swiper-pagination",
            type: "progressbar",
        },
    });
    

    /***
     * .artist 탭 관련 
    * ***/

    const artist_tab_dropdown_btn = $('.artist .tab .tab-dropdown');
    const artist_tab = $('.artist .tab ul');
    const artist_tab_items = $('.artist .tab ul li');
    const artist_tab_contents = $('.artist .tab_wrapper .tab-contents');
    artist_tab_dropdown_btn.click(function() {
        if (artist_tab.hasClass('open')) {
            artist_tab.removeClass('open');
            artist_tab_dropdown_btn.attr('aria-expanded', 'false');
        } else {
            artist_tab.addClass('open');
            artist_tab_dropdown_btn.attr('aria-expanded', 'true');
        }
    });

    artist_tab_items.click(function() {
        /* 메뉴 닫기 */
        artist_tab.removeClass('open');
        artist_tab_dropdown_btn.attr('aria-expanded', 'false');
        /* 메뉴 이름 변경 */
        artist_tab_dropdown_btn.text($(this).find('span.tab-item-name').text());
        /* 선택한 메뉴만 active */
        artist_tab_items.removeClass('active');
        $(this).addClass('active');
        /* 선택한 메뉴만 aria-selected */
        artist_tab_items.attr('aria-selected', 'false');
        $(this).attr('aria-selected', 'true');
        /* 선택한 메뉴의 탭만 active 나머지는 제거 */
        artist_tab_contents.removeClass('active');
        $('#' + $(this).attr('aria-controls')).addClass('active');
    });
});