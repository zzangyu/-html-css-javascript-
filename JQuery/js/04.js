$(function () {
   // 텍스트 박스의 입력값 변경 상태를 감지
    $("input[name='user_name']").change(function () { 
        $("#result").html("이름의 입력값이 변경되었습니다.");
        
    });

   // 체크박스의 상태 변경 감지
   $("input[name='hobby']").change(function () { 
    $("#result").html("취미의 입력값이 변경되었습니다.");
    
});

// 라디오 버튼의 체크 상태 감지
$("input[name='gender']").change(function () { 
 $("#result").html("성별의 입력값이 변경되었습니다.");
 
});

// 드롭다운 선택 상태 변경 감지
$("select[name='job']").change(function () { 
 $("#result").html("직업이 변경되었습니다.");
 
});

});