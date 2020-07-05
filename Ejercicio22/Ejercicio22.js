function cambiarcolor(){
    var cantrojo = $("#clrrojo").val();
    var cantverde = $("#clrverde").val();
    var cantazul = $("#clrazul").val();

    var colores = "rgb(" + cantrojo + "," + cantverde + "," + cantazul +")";

    $("#cambiacolor").css("background-color",colores);        
}

$("#clrrojo").change(function(){
    var cantrojo = $("#clrrojo").val();
    $("#txtrojo").val(cantrojo);
    cambiarcolor();
});

$("#clrazul").change(function(){
    var cantazul = $("#clrazul").val();
    $("#txtazul").val(cantazul);
    cambiarcolor();
});

$("#clrverde").change(function(){
    var cantverde = $("#clrverde").val();
    $("#txtverde").val(cantverde);
    cambiarcolor();
});
