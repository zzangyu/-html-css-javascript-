$(function () {
    $("#comment_form").submit(function () {
        if (!$("#user_name").val()) {
            alert("이름을 입력하세요.");
            $("#user_name").focus();
            return false;
        };
        if (!$("#comment").val()) {
            alert("내용을 입력하세요.");
            $("#comment").focus();
            return false;
        };
        var date = new Date();
        var yy = date.getFullYear();
        var mm = date.getMonth() + 1;
        var dd = date.getDate();
        var hh = date.getHours();
        var mi = date.getMinutes();
        var ss = date.getSeconds();

        // 자리 보정
        if (mm < 10) {
            mm = "0" + mm;
        };
        if (dd < 10) {
            dd = "0" + dd;
        };
        if (hh < 10) {
            hh = "0" + hh;
        };
        if (mi < 10) {
            mi = "0" + mi;
        };
        if (ss < 10) {
            ss = "0" + ss;
        };

        // 오늘 날짜 생성
        var today = yy + "-" + mm + "-" + dd + " " + hh + ":" + mi + ":" + ss;

        // 새로운 글이 추가될 li 태그 객체 생성
        var new_li = $("<li>");
        new_li.addClass("comment_item");

        // 작성자 정보가 지정될 <p>태그
        var writer_p = $("<p>");
        writer_p.addClass("writer");

        // 작성자 정보의 이름
        var name_span = $("<span>");
        name_span.addClass("name");
        name_span.html($("#user_name").val() + "님");

        // 작성날짜
        var date_span = $("<span>");
        date_span.html(" / " + today + " ");

        // 삭제 버튼
        var del_input = $("<input>");
        del_input.attr({ // 속성부여
            "type" : "button",
            "value" : "삭제하기"
        });
        del_input.addClass("delete_btn");

        // 내용
        var content_p = $("<p>");
        content_p.html($("#comment").val());

        // 위의 모든 내용을 하나로 합치기
        writer_p.append(name_span).append(date_span).append(del_input);
        new_li.append(writer_p).append(content_p);

        $("#comment_list").append(new_li);

        // 입력 내용 초기화(지우기)
        $("#user_name").val("");
        $("#comment").val("");
        return false;
    });

    // 삭제버튼 클릭시의 동작을 미리 지정
    $(document).on("click",".delete_btn",function(){
        if(confirm("정말로 선택하신 항목을 삭제 하시겠습니까?")){
        $(this).parents(".comment_item").remove();
      };
    });

});