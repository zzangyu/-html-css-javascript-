$(function(){
    // id 값에 의한 접근
    $("#title").html("제이쿼리..");

    // 자식 셀렉터의 사용 접근
    $("div#container > h1#title").html("참 재밌당");

    // 자손 셀렉터의 사용 접근
    $("div#container div.box").html("메챠쿠챠 잼당");

    // 자손 셀렉터를 사용해 모든 li 태그를 지정함
    $("ul > li").html("목록들입니다.");

    // li 태그의 첫번째 목록, 마지막 목록에 적용
    $("ul > li:first-child").html("저는 첫번째 목록입니다.");
    $("ul > li:last-child").html("저는 마지막 목록입니다.");
    
    // 두번째 li태그에 적용
    // li:eq(n) n: index 표기하는 첫번째 0부터 시작함
    $("ul > li:eq(1)").html("저는 둘째!");

    // 다중요소 적용 방법
    $("p, pre").html("여러가지 요소를 적용");
    $("pre[name='source'").html("선택자를 이용한 지정방법");
    
});