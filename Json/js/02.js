function initCompany() {
    var company = {
        "name":"(주)글로벌인",
        "since":2022,
        "department": ["기획팀", "영업팀", "디자인팀", "개발팀"],
        "biz": ["소프트웨어", "통신판매업", "위치정보서비스"]
    };
    // 회사 이름 출력
    document.getElementById("name").innerHTML = company.name;
    // 설립년도 출력
    document.getElementById("since").innerHTML = company.since;
    // 사업 부서 출력
    var dept_li = "";
    for (let index = 0; index < company.department.length; index++) {
        dept_li += "<li>"+ company.department[index] +"</li>"
    }
    document.getElementById("department").innerHTML = dept_li;
    // 주요 사업 분야 출력
    var biz_li = "";
    for (let index = 0; index < company.biz.length; index++) {
        biz_li += "<li>"+ company.biz[index] +"</li>"
    }
    document.getElementById("biz").innerHTML = biz_li;
}