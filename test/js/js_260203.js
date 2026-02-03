
$(document).ready(function() {
    // 문서 불러올 때 한 번
    // console.log('document ready');///
    // 목표: 호버한 요소 li에만 active가 추가하고 이전에 active가 있었던 li에는 active를 삭제함
    // 편한 방법: 모든 li의 active를 삭제하고, 호버한 요소에만 다시 active를 추가함
    $('.tour .list ul li').on('mouseenter', function() {
        // console.log('mouse entered');
        // 모든 li의 active를 삭제
        $('.tour .list ul li').removeClass('active');
        // 호버한 요소 li에만 active가 추가됨
        $(this).addClass('active');
    }); // $('.tour .list ul li').on()

    $('.culture .list ul li').on('mouseenter', function() {
        $('.culture .list ul li').removeClass('active');
        $(this).addClass('active');
    }); // $('.culture .list ul li').on()

    // 목표: 브라우저가 스크롤 될 때 header에 fixed 클래스를 추가하고 상단에 닿으면 삭제함
    var abc = '123';
    var bcd = 56;
    var bcd = 11;
    var sum = abc + bcd;
    // console.log('sum');
    // console.log(sum);

    let aaa = 11;
    // let aaa = 22; err 재정의 불가능

    aaa = 22; // 재할당 가능
    // console.log(aaa);
    
    let scrolling
    header_fixed();

    function header_fixed() {
        scrolling = $(window).scrollTop(); // 스크롤할 때마다 지금 스크롤 값을 재할당
        console.log(scrolling);
        // scrolling이 0보다 크면, header에 fixed 클래스를 줌
        // 반대로 0보다 작거나 같으면 fixed 클래스를 삭제함
        if (scrolling > 0) {
            $('.header').addClass('fixed');
        } else {
            $('.header').removeClass('fixed');
        }
    };

    $(window).scroll(function() {
        // 스크롤 할 때 마다
        // console.log('scrolled');
        header_fixed();
    });

}); // $(document).ready()
// console.log('document is done');

