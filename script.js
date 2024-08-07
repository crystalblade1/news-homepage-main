$(document).ready(() =>{
    $('#menu').click(function(){
        $('nav').show();
        $('#backdrop').show();
        $('#menu').hide();
    })

    $('#close').click(function(){
        $('nav').hide();
        $('#backdrop').hide();
        $('#menu').show();
    })

    $(window).resize(function(){
        if($(window).width()>=1100){
            $('nav').show();
        }
    })
});