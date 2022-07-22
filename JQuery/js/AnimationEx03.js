$(function () {
    
    // 첫번째 항목이 펼쳐져 있도록 처리함
    // 탭의 내용은 첫번째 항목 안의 a태그가 가리키는 txt file을 읽어와서 처리한다.
    $(".collapsible:eq(0) > .content").load($(".collapsible:eq(0) .title a").attr("href"));
    
    // 첫번째 항복의 a태그에게 selected 클래스를 적용함
    $(".collapsible:eq(0) a").addClass("selected");
    
    // 첫번째 항목을 제외한 나머지 항목들에 대한 내용을 숨긴다.
    $(".collapsible").not(":eq(0)").find(".content").hide();

    // 링크에 대한 클릭 이벤트 처리
    $(".collapsible .title a").click(function () {
        $(this).toggleClass("selected");
        $(".collapsible .title a").not(this).removeClass("selected");

        // 펼칠 대상을 검색
        var target = $(this).parents(".collapsible").find(".content");

        // 나머지 대상 검색
        var other = $(".collapsible .title a").not(this).parents(".collapsible").find(".content");
        
        // 애니메이션 열고 닫고 처리함
        target.slideToggle(300);
        other.slideUp(300);

        if(target.css("display") != "none") {
            target.load($(this).attr("href"));
        };

        // 링크의 페이지 이동 중지
        return false;
    
    });
})