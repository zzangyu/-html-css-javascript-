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
document.write("<h3>"+result+"</h3>");

// 내가 지정한 날짜
myDate.setFullYear(2023);
myDate.setMonth(5);
myDate.setDate(25);
myDate.setHours(12);
myDate.setMinutes(20);
myDate.setSeconds(00);  

var yy = myDate.getFullYear();
var mm = myDate.getMonth()+1; // index 0부터 시작
var dd = myDate.getDate();

var i = myDate.getDay();
var day = days[i];

var hh = myDate.getHours();
var mi = myDate.getMinutes();
var ss = myDate.getSeconds();

var result = yy+"-"+mm+"-"+dd+" "+day+"요일 "+hh+":"+mi+":"+ss;
document.write("<h3>"+result+"</h3>");

// 두 날짜의 차이
var theday = new Date(2022, 0, 1);
var today = new Date();

var cnt = today.getTime() - theday.getTime();

var dday = Math.floor(cnt / (24*60*60*1000));

document.write("<h3>"+dday+"일 경과 !</h3>");
