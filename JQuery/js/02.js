function initPage() {
    /*
    initPage에게는 "$"라는 객체(혹은 함수)가 파라미터로 전달됨
    &: jQuery의 모든 기능을 저장하고 있는 jQuery의 최상위의 객체를 의미한다.
    */
    // var h1 = document.getElementById("hello");
    var h1 = $("#hello");
    // h1.innerHTML = "Hello JQuery";
    h1.html("Hello JQuery");

}
jQuery(initPage);

$(function () {
    $("#hello").html("hihi");
    alert($("hi").html())
});



// 함수 이름대신 함수 자체를 파라미터로 전달
jQuery(function ($) {
    var h1 = $("#helloo");
    h1.html("Helloo JQuery");
});