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

    const first_class_museum_txt_swiper = new Swiper('#first_class_museum .txt_box .swiper', {
        parallax: true,
        effect: "fade", /* fade 효과 */
        loop: true,
    });

    const first_class_museum_img_swiper = new Swiper('#first_class_museum .img_box .swiper', { /* 팝업을 감싼는 요소의 class명 */
        parallax: true,
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
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
        
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '#second_class_museum .next',  /* 다음 버튼의 클래스명 */
            prevEl: '#second_class_museum .prev',  
        },
    });

    second_class_museum_img_swiper.controller.control = second_class_museum_txt_swiper;
    second_class_museum_txt_swiper.controller.control = second_class_museum_img_swiper;

});