$(document).ready(function() {
    const visual_text_list = ['사용자의 Needs를 만족하는', '고객의 요구 사항을 들어주는', '모두를 위한'];
    const visual_text_delay = 1500;
    const visual_text_intervalType = 30;
    let visual_text_idx = 0;


    const visual_text = $('.visual .tit_box .visual_text')[0];
    visual_text.addEventListener('th.endType', function (e) {
        setTimeout(() => {
            visual_text_idx = (visual_text_idx + 1);
            TypeHangul.type('.visual .tit_box .visual_text', {text: visual_text_list[visual_text_idx % 3], intervalType: visual_text_intervalType});
        }, visual_text_delay); // 밀리초 (1초)
    });

    TypeHangul.type('.visual .tit_box .visual_text', {text: visual_text_list[visual_text_idx % 3], intervalType: visual_text_intervalType});


    /*** 
    * .showcase color_list 버튼색
    ***/
    const showcase_color_list_btn = $('.showcase .showcase_item .color_list button');

    $.each(showcase_color_list_btn, function(_, el) {
        el.style.backgroundColor = el.dataset.color;
    });
});