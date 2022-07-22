$(function () {
    $("button:eq(0)").click(function () {
        // 새로운 내용으로 교체
        $("#animation-area").html("<div id='box'></div>");

    });

    // 좌측으로부터 250px 이동
    $("button:eq(1)").click(function () {
        // css 속성은 json 형식으로 표현함
        $("#box").animate({
            'left' : '250px'
        }, 1000, 'swing', function () {
            alert("애니메이션이 종료 되었습니다. ");
        });

    });

    // 좌측으로부터 250px 이동하고, 높이와 넓이를 150px로 변환
    $("button:eq(2)").click(function () {
        // css 속성은 json 형식으로 표현함
        $("div").animate({
            left:'250px',
            height:'150px',
            width:'150px'
        });

    });

    // 좌측으로부터 50px 이동하고, 높이와 넓이를 50px로 변환
    $("button:eq(3)").click(function () {
        // css 속성은 json 형식으로 표현함
        $("div").animate({
            left:'+=50px',
            height:'+=50px',
            width:'+=50px'
        });

    });

    $("button:eq(4)").click(function () {
        var div = $("#box");
        // 애니메이션을 연속적으로 사용
        // 여러개의 장면이 순차적으로 실행된다.
        div.animate({
            height:'300px'
        },100);
        div.animate({
            height:'100px'
        },100);
        div.animate({
            width:'300px'
        },100);
        div.animate({
            width:'100px'
        },100);
        div.animate({
            height:'300px'
        },100);
        div.animate({
            height:'100px'
        },100);
        div.animate({
            width:'300px'
        },100);
        div.animate({
            width:'100px'
        },100);

    });

});