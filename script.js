$(document).ready(function(){

    $("#about-button").click(function(){
        $('html, body').animate({
            scrollTop:$("#about").offset().top},500)
        })
    })
