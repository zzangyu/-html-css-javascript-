// show - hide - toggle
// $(function () {
//     // 첫번째 input 버튼을 누른 경우
//     // :eq(n)은 특정 셀렉터가 여러개의 복수 요소를 지정할 경우
//     // 그 중 하나만 지정하는 경우 사용하는 전용 셀렉터임
//     // n값은 0부터 카운팅 됨
//     $("#sh > input:eq(0)").click(function(){
//         $("#sh > div").show(200);
//     })

//     $("#sh > input:eq(1)").click(function(){
//         $("#sh > div").hide(200);
//     })

//     $("#sh > input:eq(2)").click(function(){
//         $("#sh > div").toggle(200);
//     })
// })

// fadeIn - fadeOut - fadeToggle
// $(function () {
//     $("#sh > input:eq(0)").click(function () {
//         $("#sh > div").fadeIn(1000);
//     })
//     $("#sh > input:eq(1)").click(function () {
//         $("#sh > div").fadeOut(1000);
//     })
//     $("#sh > input:eq(2)").click(function () {
//         $("#sh > div").fadeToggle(1000);
//     })
// });

// slide
$(function () {
    $("#sh > input:eq(0)").click(function () {
       $("#sh > div").slideDown();(1000);
    })
    $("#sh > input:eq(1)").click(function () {
       $("#sh > div").slideUp();(1000);
    })
    $("#sh > input:eq(2)").click(function () {
       $("#sh > div").slideToggle();(1000);
    })
});
