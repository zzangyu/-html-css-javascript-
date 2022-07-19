function printTime() {
    var days = ["일", "월", "화", "수", "목", "금", "토"];

    var myDate = new Date();
    
    var yy = myDate.getFullYear();
    var mm = myDate.getMonth()+1; // index 0부터 시작
    var dd = myDate.getDate();
    
    var i = myDate.getDay();
    var day = days[i];
    
    var hh = myDate.getHours();
    var mi = myDate.getMinutes();
    var ss = myDate.getSeconds();
    
    var result = yy+"-"+mm+"-"+dd+" "+day+"요일 "+hh+":"+mi+":"+ss;

    document.getElementById("timer").innerHTML=result;

}

// printTime() 함수를 1초에 한번씩 자동으로 호출
function startTimer() {
    setInterval(printTime, 1000);
}