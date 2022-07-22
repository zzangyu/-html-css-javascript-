$(function () {
    $("img").error(function () {
        alert("이미지를 찾을 수 없습니다."); // 하나일 때
    }).each(function () {
        alert("이미지를 찾을 수 없습니다."); // 여러개일 때
    });
})
// $(function () {
//     $("img").error().each(function () {
//         alert("이미지를 찾을 수 없습니다."); // 여러개일 때
//     });
// })