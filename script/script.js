$(document).ready(function(){

    // Go to the about section from the home page
    $("#about-button").click(function(){
        $('html, body').animate({
            scrollTop:$("#about").offset().top},500)
        })

    // Control the active link in the navbar
    $(".navbar .nav-link").click(function(){
        $(".navbar").find(".active").removeClass("active")
        $(this).addClass("active")
    })
})
