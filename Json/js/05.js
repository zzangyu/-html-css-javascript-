var sayHello = {
    "name" : "JavaScript",
    "eng" : function () {
        var console = document.getElementById("console");
        console.innerHTML = "Hello "+this.name;
        console.style.color= "#ff0000";
    },
    "kor" : function () {
        var console = document.getElementById("console");
        console.innerHTML = "안녕하세요 "+this.name;
        console.style.color= "#ff0000";
    }
    
}