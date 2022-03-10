$(document).ready(function(){

$("#titulo").click(function(){
    $(this).hide();
    })
$("#boton").click(function(){
    $("#e1").fadeToggle("slow");
    $("#e2").fadeTo("6000");
    $("#e3").fadeToggle();

    $("#e1").fadeTo("slow",0.30);
    $("#e2").fadeTo("slow",0.8);
    $("#e3").fadeTo("slow",0.6);
});
    $("#lista").click(function(){
        $("#contenido").slideToggle("slow");
    });

});