$(document).ready(function(){
    /*När muspekaren hovrar över drowdown så sker en animation*/
    $("#Sub").mouseenter(function(){
            $(".dropdown").stop().slideDown(500);
    });
    $("#Sub").mouseleave(function(){
            $(".dropdown").stop().slideUp(500);
    }); 
});
