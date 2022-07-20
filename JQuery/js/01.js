function initPage() {
    var h1 = document.getElementById("hello");
    h1.style.color = "#0000ff";
    h1.style.backgroundClip = "#d5d5d5";
    h1.style.fontSize = "50px";
    h1.style.padding = "15px";
    h1.style.margin = "0";
    h1.innerHTML = "Hello JQuery";
}

function sayHello() {
    alert("안녕하세요. 제이쿼리입니다.")
}
// javascript의 onload이벤트 효과와 동일하다.
jQuery(sayHello);
jQuery(initPage);