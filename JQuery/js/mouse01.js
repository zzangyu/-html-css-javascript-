$(function () {
    //마우스 버튼을 누른 경우
    $("#input").mousedown(function () {
        $("#result").html("Mouse Down Event ~~~~");
    });
});
$(function () {
    //마우스 버튼을 뗀 경우
    $("#input").mouseup(function () {
        $("#result").html("Mouse Up Event ~~~~");
    });
});

// 마우스가 영역 위에 있을 때
$(function () {

    $("#input").hover(function () {
        $("#result").html("Mouse Enter Event");
    },
        // 마우스가 영역에서 벗어났을 때
        function () {
            $("#result").html("Mouse leave Event");
        });
});
// 위 function이랑 밑이랑 같은거임
// $(function () {
//     $("#input").mouseenter(function () {
//         $("#result").html("Mouse Enter Event");
//     });
// });
// $(function () {
//     $("#input").mouseleave(function () {
//         $("#result").html("Mouse leave Event");
//     });
// });
