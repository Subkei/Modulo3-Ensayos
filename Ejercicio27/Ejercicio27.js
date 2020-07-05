// Función redimencionar titulo
$( function() {
    $( "#titulo" ).resizable();
  } );
  
  //Inicializar dialog
  $("#dialog").dialog({
      autoOpen: false
  });
  
  //Se abre cuando #opener es clickeado
  $("#abrir").click(function () {
      $("#dialog").dialog("open");
  });