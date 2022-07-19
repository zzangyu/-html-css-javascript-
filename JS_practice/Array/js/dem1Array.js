// 배열 생성
var myArray1 = new Array("홍길동", "활빈당", "보스"); // 방법 1
var myArray2 = ["홍길동", "활빈당", "보스"]; // 방법 2

// 배열에 저장된 값 읽기
document.write("<h1 style='color: pink'>"+myArray1+"</h1>");
document.write("<h1 style='color: pink'>"+myArray1[0]+"</h1>");
document.write("<h1 style='color: pink'>"+myArray1[1]+"</h1>");
document.write("<h1 style='color: pink'>"+myArray1[2]+"</h1>");

myArray1[0] = "강감찬";
myArray1[1] = "고려시대";
myArray1[2] = "귀주대첩";

document.write("<h2 style='color: green'>"+myArray1+"</h2>");
document.write("<h2 style='color: green'>"+myArray1[0]+"</h2>");
document.write("<h2 style='color: green'>"+myArray1[1]+"</h2>");
document.write("<h2 style='color: green'>"+myArray1[2]+"</h2>");

for(var i = 0; i < myArray1.length; i++) {
    document.write("<h3 style='color: blue'>"+myArray1[i]+"</h3>");
}

myArray1.forEach(element => {
    document.write("<h4 style='color: red'>"+element+"</h4>");
});