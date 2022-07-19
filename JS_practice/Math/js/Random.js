// 두 수 사이의 난수를 발생시켜 리턴해주는 함수 선언
function random(n1, n2) {
    return parseInt(Math.random()* (n2 - n1 + 1)) + n1;
}

var num = random(0, 9);
document.write("<h1> 0~9 사이의 난수 : "+num+"</h1>");

var auth = "";
for(var i = 0; i < 6; i++) {
    if(i != 5) {
        auth += random(0, 45)+", ";
    } else {
        auth += random(0, 45);
    }
}
document.write("<h1>로또번호 : "+auth+"</h1>");
