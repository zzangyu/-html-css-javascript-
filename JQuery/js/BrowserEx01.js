$(function () {
    $(window).resize(function () { 
        $("#result").html("<p>"+$(window).width()+" x "+$(window).height()+"</p>");
    });
});