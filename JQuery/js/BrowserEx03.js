$(function () {
    $(window).scroll(function () { 
        $("#console").html("스크롤이 이동되었습니다.");
        setTimeout(function () {
            // 1.5초후에 div 아이디가 console의 내용을 지우도록 한다.
            $("#console").html("");
        }, 1500);
    });
})