$(function () {
    // id속성이 join인 <form>태그 안의 submit 버튼을 누르는 경우

    $("#join").submit(function () { 
        // 아이디 검사
        if(!$("input[name='user_id']").val()) {
            alert("아이디를 입력해 주세요.");
            $("input[name='user_id']").focus();
            return false;
        }
        
        // 비밀번호 검사
        if(!$("input[name='user_pw']").val()) {
            alert("비밀번호를 입력해 주세요.");
            $("input[name='user_pw']").focus();
            return false;
        }

        // 주민번호 검사
        if(!$("input[name='juminno']").val()) {    
            alert("주민번호를 입력해 주세요.");
            $("input[name='juminno']").focus();
            return false;
        }
        
        // 라디오버튼 선택여부 검사
        // !$("라디오버튼").is(":checked") ==> 체크가 되었을 경우 true 반환        
        if(!$("input[name='gender']").is(":checked")) {
            alert("성별을 체크해 주세요.");
            $("input[name='gender']:eq(0)").focus();
            return false;
        }

        // 이메일 검사
        if(!$("input[name='email']").val()) {    
            alert("이메일을 입력해 주세요.");
            $("input[name='email']").focus();
            return false;
        }

        // 홈페이지 검사
        if(!$("input[name='url']").val()) {    
            alert("홈페이지 주소를 입력해 주세요.");
            $("input[name='url']").focus();
            return false;
        }

        // 스마트폰 검사
        if(!$("input[name='tel']").val()) {    
            alert("스마트폰 번호를 입력해 주세요.");
            $("input[name='tel']").focus();
            return false;
        }

        // 체크박스(취미) 검사
        if(!$("input[name='hobby']").is(":checked")) {
            alert("취미를 체크해 주세요.");
            $("input[name='hobby']:eq(0)").focus();
            return false;
        }

        // 직업 검사
        if($("select[name='job'] > option:selected").index() < 1) {
            alert("직업을 선택해 주세요.");
            $("select[name='job']").focus();
            return false;
        }

        // $(input요소).val(); => input tag안에 사용자가 입력한 값을 리턴
        var user_id = $("input[name='user_id']").val(); // val 입력 되었는지 안되었는지 확인
        var user_pw = $("input[name='user_pw']").val();
        var juminno = $("input[name='juminno']").val();
        var gender = $("input[name='gender']:checked").val();
        var email = $("input[name='email']").val();
        var url = $("input[name='url']").val();
        var tel = $("input[name='tel']").val();
        var hobby = $("input[name='hobby']:checked");
        var job = $("select[name='job'] > option:selected").val();
        // 추출된 값을 누적하여 저장할 문자열 변수 선언
        // hoby의 개체 수 만큼 반복적으로 function() 실행됨
        var select_hobby = "";
        hobby.each(function(){
        //     // 각각 반복되는 처리 안에서 $(this)는 hobby안에 포함된 개체임
        //     // 체크된 n번째 체크박스
        //     // 추출된 값을 누적변수에 저장함
            select_hobby += $(this).val()+", "
        })
        
        var result = "<ul>";
        result += "<li>아이디: "+user_id+"</li>";
        result += "<li>비밀번호: "+user_pw+"</li>";
        result += "<li>주민번호: "+juminno+"</li>";
        result += "<li>성별: "+gender+"</li>";
        result += "<li>이메일: "+email+"</li>";
        result += "<li>홈페이지 주소: "+url+"</li>";
        result += "<li>전화번호: "+tel+"</li>";
        result += "<li>취미: "+select_hobby+"</li>";
        result += "<li>직업: "+job+"</li>";
        result += "</ul>";

        $("body").html(result);
        return false;

    });
});