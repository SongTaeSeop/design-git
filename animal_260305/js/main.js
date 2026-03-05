/*************************
* main.js는 메인페이지에서만 구동되는 스크립트를 저장..
***********************/
$(document).ready(function(){
    $('.visual .popup_wrap .popup').slick({
        autoplay: true, //팝업 자동 실행
        autoplaySpeed: 5000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        //fade: true,  //페이드 효과 적용
        dots: true, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
    });

    $('.visual .ctrl_wrap .stop').on('click', function(){
        $('.visual .popup_wrap .popup').slick('slickPause');  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap .play').show()
    })
    $('.visual .ctrl_wrap .play').on('click', function(){
        $('.visual .popup_wrap .popup').slick('slickPlay');  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap .stop').show()
    })

    /***
     * tab 구현
     * .find .tab_list ul li를 클릭:
     * 1. active 클래스를 클릭한 li(this)에 줌, 나머지는 삭제
     * 2. 클릭한 li(this)의 aria-selected 속성 값을 true로 변경, 나머지는 false로 변경
     * 3. this의 자식 태그인 button 내용 뒤에 <em>선택됨</em>을 추가, 나머지는 삭제
     * 4. this의 aria-controls의 속성 값을 가져가서, .find .tab_conts .tab_item 중 id가 같은 요소에만 active 클래스를 줌, 나머지는 삭제
     * ***/
    
    const tab_list = $('.find .tab_list ul li');
    let tab_name;

    tab_list.on('click', function() {
        // 1.
        tab_list.removeClass('active');
        $(this).addClass('active');
        // 2.
        tab_list.attr('aria-selected', 'false');
        $(this).attr('aria-selected', 'true');
        // 3.
        tab_list.find('button em').text('');
        $(this).find('button em').html(' 선택됨');
        // 4.
        tab_name = $(this).attr('aria-controls');
        $('.find .tab_conts .tab_item').removeClass('active');
        $('.find .tab_conts').find('#'+tab_name).addClass('active');

        // slick reload
        $('.find .tab_conts .tab_item.active .tab_conts_list').slick('setPosition');
    });

    /***
     * .find .tab_conts slick
     * ***/
    $('.find .tab_conts .animal .tab_conts_list').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: true,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
        //variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 4, //한번에 보일 팝업 수
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
                breakpoint: 1281, //1280px 이하
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    variableWidth: true,
                    arrows: false
                }
            },
            {
                breakpoint: 273,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ]
    });
    
    $('.find .tab_conts .people .tab_conts_list').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: true,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
        //variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 4, //한번에 보일 팝업 수
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
                breakpoint: 1281, //1280px 이하
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 901,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    variableWidth: true,
                    arrows: false
                }
            },
            {
                breakpoint: 273,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ]
    });
    
    /***
     * .message 글자 채우기
     * message는 높이가 높고, 자식 클래스 inner가 안에 sticky로 스크롤됨
     * => message에서 스크롤 되는 동안 .message p strong span의 width가 조정됨
     * ***/
    const color_obj = $('.message p strong');
    const color_area = $('.message');
    const color_resizer = 'span';
    const color_line = color_obj.length; // 줄 개수

    let color_header;
    let color_win_h;

    let color_start; // 색상 변경 시작점
    let color_end; // 색상 변경 끝점
    let color_total; // 색상 변경 총 길이
    let color_diff; // 색상 변경 되기 시작한 이후 스크롤 길이
    let color_w; // 단일 색상 변경 스크롤 비율
    let color_count; // 색상 변경 스크롤 비율

    let scrolling; // 현재 스크롤된 값

    // 3번째 strong의 span 태그 width: 50%; 설정
    // color_obj.eq(2).find(color_resizer).width('50%');
    function color_change() {
        scrolling = $(window).scrollTop();
        color_header = $('.header').height();
        color_win_h = $(window).height();

        color_start = color_area.offset().top - color_header;
        color_end = color_area.offset().top + color_area.height() - color_win_h;

        // console.log(color_header, color_start, scrolling, color_end);
        // if (scrolling > color_end) {
        //     color_obj.find(color_resizer).width('100%');
        // } else if (scrolling < color_start) {
        //     color_obj.find(color_resizer).width('0');
        // } else {
        //     color_total = color_end - color_start;
        //     color_diff = scrolling - color_start;
        //     color_count = color_diff / color_total * 100;
        //     console.log(color_count);

        //     for (i=0; i<color_line; i++) {
        //         color_w = (color_count - (100 / color_line) * i) * color_line;
        //         if (color_w > 100) {
        //             color_w = 100;
        //         } else if (color_w < 0) {
        //             color_w = 0;
        //         }
        //         color_obj.eq(i).find(color_resizer).width(color_w + '%');
        //     }
        //     // color_count = (color_diff / color_total * 100) / (100 / color_line);
        //     // console.log('L O A D I N G . . .', color_count);
        //     // color_obj.each(function(index){

        //     //     let progress = color_count - index;
        //     //     let width = 0;

        //     //     if(progress >= 1){
        //     //         width = '100%';
        //     //     }else if(progress > 0){
        //     //         width = (progress * 100) + '%';
        //     //     }else{
        //     //         width = '0%';
        //     //     }

        //     //     $(this).find(color_resizer).width(width);

        //     // });
        // }
        color_total = color_end - color_start;
        color_diff = scrolling - color_start;
        color_count = color_diff / color_total * 100;

        for (i=0; i<color_line; i++) {
            color_w = (color_count - (100 / color_line) * i) * color_line;
            if (color_w > 100) {
                color_w = 100;
            } else if (color_w < 0) {
                color_w = 0;
            }
            color_obj.eq(i).find(color_resizer).width(color_w + '%');
        }
    }

    color_change();

    $(window).scroll(function() {
        color_change();
    });
})