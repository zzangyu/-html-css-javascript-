function open1() {
    // 새 창만 띄운다
    window.open('Open.html');
}
function open2() {
    // 클릭할 때마다 창이 열린다 ==> 팝업
    window.open('Open.html','','width=300, height=500, scrollbars=no, toolbar=no, menubar=yes, location=no');

}
function open3(url) {

    window.open(url,'mywin','width=300, height=500, scrollbars=no, toolbar=no, menubar=yes, status=no, location=no');

}

document.write("<p>문서의 url주소: "+location.href+"</p>")
document.write("<p>호스트 이름과 포트: "+location.host+"</p>")
document.write("<p>컴퓨터 이름: "+location.hostname+"</p>")