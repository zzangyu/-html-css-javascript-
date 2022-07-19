// 대괄호로 쓴다 !
var myArray = [
    ["홍길동", "활빈당", "활빈당 보스"],
    ["강감찬", "살수대첩", "고려의 장수"]
]

for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
        document.write("<h1>"+myArray[i][j]+"</h1>");
    }
    
}
document.write("<h2>"+myArray+"</h2>");