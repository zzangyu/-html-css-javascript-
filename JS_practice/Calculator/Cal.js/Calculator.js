var calc = {};

// 빈 객체 변수 추가
calc.x = 0;
calc.y = 0;

// 변수에 값을 변경시키기 위한 함수 추가
calc.setValue = function(p1, p2) {
    this.x = p1;
    this.y = p2;
}

// 변수와 변수를 더해서 결과를 리턴한다.
calc.plus = function() {
    return this.x+this.y;
}
calc.minus = function() {
    return this.x-this.y;
}
calc.result = function() {
    var value1 = this.plus();
    var value2 = this.minus();
    document.write("<h1>덧셈결과: "+value1+"</h1>");
    document.write("<h1>뺄셈결과: "+value2+"</h1>");
}
calc.setValue(10,6);
calc.result();

// 사용자 정의 객체, 내장 객체