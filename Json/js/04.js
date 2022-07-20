// 게시판 데이터 표현 방식
var bbs = {
    "title": "JavaScript & JQeury 강좌",
    "description": "글로벌인에서 진행중인 강의 자료실 게시판입니다.",
    "total": "4",
    "item": [
        {
            "no": "공지",
            "subject": "JavaScript 강의 자료실",
            "hit": 3,
            "date": "2022.06.22"
        },
        {
            "no": "3",
            "subject": "JavaScript 3일차 강의 자료",
            "hit": 6,
            "date": "2022.07.05"
        },
        {
            "no": "2",
            "subject": "JavaScript 2일차 강의 자료실",
            "hit": 15,
            "date": "2022.07.04"
        },
        {
            "no": "1",
            "subject": "JavaScript 1일차 강의 자료실",
            "hit": 18,
            "date": "2022.07.01"
        }
    ]
};

// bbs 안의 각 독립된 값들에 대한 출력 html 생성
var html = "<h1>"+bbs.title+"</h1>"

html += "<p>"+bbs.description+"</p>";
html += "<p>총 게시글 수: "+bbs.total;+"</p>";
html += "<ul>";
// 배열 형태로 
for (let index = 0; index < bbs.item.length; index++) {
    var item = bbs.item[index];
    html += "<li>("+item.no+")"+item.subject+"(조회수:"+item.hit+" /날짜: "+item.date+")</li>";
}


html += "</ul>";

document.write(html);