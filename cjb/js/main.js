$(document).ready(function() {
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: false,
        },

        // effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        loopPreventsSliding: false, /* loop 적용 시 딜레이가 추가됨 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
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
    const tab_list = $('.news .contents_box .tab ul li');

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

    tab_list.each(function(idx, element) {
        mut.observe(element, {
            'attributes': true,
            'attributeFilter': ['class']
        });
    });

    const vod_swiper = new Swiper('.vod .swiper', { /* 팝업을 감싼는 요소의 class명 */
        // effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        loopPreventsSliding: false, /* loop 적용 시 딜레이가 추가됨 */
    });
});