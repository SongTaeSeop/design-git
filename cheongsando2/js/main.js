$(document).ready(function() {
    // 목표: scroll 값이 0보다 크면 .header에 fixed 클래스 추가
    // 그렇지 않으면 fixed 클래스 제거
    // + 아래로 스크롤 중에는 .header에 hide 클래스 추가, 위로 스크롤 중에는 hide 클래스 삭제
    // 처음 불러왔을 때 scroll 값과 스크롤하는 동안 scroll 값 모두 체크해야 함
    let scrolling // 현재 스크롤된 값
    let prev_scroll = 0 // 이전 스크롤된 값
    let move_scroll // 스크롤 변화값

    function header_fixed() {
        scrolling = $(window).scrollTop();
        console.log(scrolling, prev_scroll, prev_scroll - scrolling);
        if (scrolling > 0) { // scrolling이 0보다 크면
            $('.header').addClass('fixed');
            move_scroll = prev_scroll - scrolling;
            if (move_scroll > 0) { // 위로 스크롤할 때,
                $('.header').removeClass('hide');
            } else {
                $('.header').addClass('hide');
            }
        } else { //scrolling이 0보다 작거나 같으면
            $('.header').removeClass('fixed');
        }
        prev_scroll = scrolling; // 모든 작업이 끝나면 prev_scroll 업데이트
    }

    header_fixed(); // html을 불러온 뒤 한 번
    $(window).scroll(function() {
        header_fixed(); // 브라우저가 스크롤될 때마다
    });

    // 목표: .tour .list의 li에 마우스를 올리면 마우스를 올린 요소만 active 클래스를 추가함
    // 조건 1. 무조건 하나의 li에는 active 클래스가 있어야 함 (초기화는 HTML에서 직접 할당해 둠)
    // 조건 2. 마우스를 이동해 다른 요소에 active 클래스를 추가하는 경우, 이전에 active가 있던 li에는 active 클래스를 제거해야 함
    $('.tour .list ul li').on('mouseenter', function() {
        $('.tour .list ul li').removeClass('active');
        $(this).addClass('active');
    });

});