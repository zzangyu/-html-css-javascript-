$(function () {
    var index = 1;
    $("img").click(function () { 
        // index가 1~3을 순환하는 계산
        index = (index % 3) + 1;
        // 이미지 파일을 변경시킴
        $(this).attr("src", "img/"+index+".jpg");
        
    });
})