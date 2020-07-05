
// Se llama al evento botón enviar
document.querySelector("input[type=submit]").addEventListener("click",enviar);

// definimos la variable que contiene el numero de preguntas
var totalPreguntas=5;

// array con los alternativas de la encuesta
var resultadoEncuesta=[];
  
// Array de los resultados:
 resultadoEncuesta["p1-alt"]=[0,0,0,0]
 resultadoEncuesta["p2-alt"]=[0,0,0,0]
 resultadoEncuesta["p3-alt"]=[0,0,0,0]
 resultadoEncuesta["p4-alt"]=[0,0,0,0]
 resultadoEncuesta["p5-alt"]=[0,0,0,0]

inicializarArrayResultados();
 
// variable con cantidad de encuestas realizadas
var totalEncuestas=0;


 // Funcion al pulsa sobre el boton enviar
function enviar(e) {
 
    // se obtienen los radios marcados
    var preguntas=document.querySelectorAll("input[type=radio]:checked");
 
    // comprueba que estén todos marcados
    if(preguntas.length==totalPreguntas) {
 
        totalEncuestas++;
        document.getElementById("error").innerHTML="";
 
        // se recorre cada una de las alternativas
        preguntas.forEach(function(pregunta) {
 
            // en un array bidimensional se guarda la alternativa
            resultadoEncuesta[pregunta.name][pregunta.value]++;
 
            // se deja el radio desmarcado
            pregunta.checked=false;
        });
        mostrarResultado();
    }else{
        document.getElementById("error").innerHTML="Debe marcar todas las alternativas";
    }
 
    e.preventDefault();
}
 
// Funcion para inicializar el array bidimensional
function inicializarArrayResultados() {
    for(var i=1;i<=totalPreguntas;i++) {
        resultadoEncuesta["p"+i+"-alt"]=[0,0,0,0];
    }
}

//Funcion para mostrar los resultados de la encuesta
function mostrarResultado() {
    resultado="";
    
    if (totalEncuestas == 1) {
        resultado+="<h3>Has realizado "+totalEncuestas+" vez esta encuesta.</h3>";
    }else{
        if (totalEncuestas >= 2) {
            resultado+="<h3>Has realizado "+totalEncuestas+" veces esta encuesta.</h3>";
        }
        if(totalEncuestas > 3){
           resultado+="<h3>Ha superado la cantidad máxima de 3 intentos.</h3>";

        }
    }

    for(var i=1;i<=totalPreguntas;i++) {        
        resultado+="<div>Puntaje en pregunta "+i+" : "+resultadoEncuesta["p"+i+"-alt"][0]+"</div>";
        
    }
    resultado+="<div>Puntaje total obtenido: "+resultadoEncuesta+[i][0]+ "</div>";
    document.getElementById("resultado").innerHTML=resultado;
}

// puntajes obtenidos por pregunta
