
function getkeyName(keyCode) {
    var keyMap = [
        { code: 8, name: "backspace" },
        { code: 9, name: "tab" },
        { code: 13, name: "enter" },
        { code: 16, name: "shift" },
        { code: 17, name: "ctrl" },
        { code: 18, name: "alt" },
        { code: 19, name: "pausebreak" },
        { code: 20, name: "capslock" },
        { code: 25, name: "hanja" },
        { code: 27, name: "esc" }
    ];

    // 반복문을 이용함
    for (let index = 0; index < keyMap.length; index++) {
        if (keyMap[index].code == keyCode) {
            // 값을 바로 리턴하고 종료
            return keyMap[index].name
        }

    }
};
$(function () {

    $("#input > input[type='text']").keydown(
        function (e) {
            // down_count 변수 증가

            $("#result").html(e.which + "번 키 눌러짐 &gt;&gt; "+getkeyName(e.which));
        });
});