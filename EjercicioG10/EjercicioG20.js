$( "#arriba" ).click(function() {
    $(".cuadrado").animate({ "top": "-=10px" }, "fast" );
});
    
$("#abajo" ).click(function(){
    $(".cuadrado").animate({ "top": "+=10px" }, "fast" );
});

$("#derecha").click(function() {
    $(".cuadrado").animate({ "left": "+=10px" }, "fast" );
});

$("#izquierda").click(function(){
    $(".cuadrado").animate({ "left": "-=10px" }, "fast" );
});

$("#reiniciar").click(function() {
    $(".cuadrado").css({
    top: "",
    left: ""
    });
});