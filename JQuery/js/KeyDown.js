$(function () {
    // 키가 눌러졌을 때 카운트 변수 선언 
    var down_count = 0;
    // 키가 떼어졌을 때 카운트 변수 선언 
    var up_count = 0;

    $("#input > input[type='text']").keydown(
        function () {
            // down_count 변수 증가
            down_count++;
            $("#result").html("down_count : " + down_count + " / up_count : " + up_count);
        });
        $("#input > input[type='text']").keyup(
            function () {
                // down_count 변수 증가
                up_count++;
                $("#result").html("down_count : " + down_count + " / up_count : " + up_count);
            });
});