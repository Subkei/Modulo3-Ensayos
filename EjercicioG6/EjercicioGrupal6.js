var item1 = "";
var item2 = "";

function agregarlista(){

    var texto = document.getElementById("txtvalor").value;
    var lista1 = document.getElementById("rbtlista1").checked;
    var lista2 = document.getElementById("rbtlista2").checked;

    if(texto == ""){
        alert("Debe agregar un texto");
    }
    else{
        if (lista1 == true || lista2 == true) {
            //  alert("OK");
                
            if (lista1 == true) {
                item1 = item1 + "<li>" + texto + "</li>";
                document.getElementById("contlista1").innerHTML = "<ul >" + item1 + "</ul>";
                alert("Agregado a la lista 1");
            }
            
            if (lista2 == true) {
                item2 = item2 + "<li>" + texto + "</li>";
                document.getElementById("contlista2").innerHTML = "<ol>" + item2 + "</ul>";
                alert("Agregado a la lista 2");
            }
        }
        else{
            alert("Debe seleccionar una lista");
        }
    }
}