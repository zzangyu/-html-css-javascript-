function doSubmit() {
    document.write("ㅋㅋ");
    // form 객체 선언
    var frm = document.form1;

    // text 필드 입력 여부 검사
    if (!frm.user_name.value) {
        alert("이름 입력. 해.");
        frm.user_name.focus();
        return false;
    }
    // 라디오 버튼의 선택 여부
    if (!frm.gender[0].checked && !frm.gender[1].checked) {
        alert("성별 체크. 해.");
        frm.gender[1].focus();
        return false;
    }
    //select 요소에 대한 선택 위치 검사
    if (frm.job.selectedIndex < 1) {
        alert("직업 선택. 해.");
        frm.job.focus();
        return false;
    }
    // 체크 박스의 선택 여부 검사
    var chk = false;
    for (var i = 0; i < frm.hobby.length; i++) {
        if(frm.hobby[i].checked) {
            chk = true;
            break;
        }
    }

    if(!chk) {
        alert("취미를 선택해 주세요.");
        frm.hobby[0].focus();
        return false;
    }
    // 입력 확인
    if(confirm("입력하신 내용이 맞습니까 ?")) {
        frm.submit(); // 전송
    }

}