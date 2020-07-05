function calculo() {
    // variable para mostrar vacia
    var mensaje = "";
    // se recupera el valor de la caja de texto
    var txt = document.getElementById('texto').value;

    // al valor se le calcula el largo del texto
    var cantc = txt.length;

    // se asigna en un mensaje al div contenedor
    mensaje = mensaje + "<b>Cantidad de letras ingresadas: </b>" + cantc + "<br/>";
    document.getElementById('contenedor').innerHTML = mensaje;

    // con split se divide el texto y genera un arreglo 'palabras'.
    var palabras = txt.split(" ");

    mensaje = mensaje + "<b>Cantidad de palabras: </b>" + palabras.length + "<br/>";
    document.getElementById('contenedor').innerHTML = mensaje;

    if (palabras.length > 0) {
        mensaje = mensaje + "<b>Primera palabra: </b>" + palabras[0] + "<br/>";

        mensaje = mensaje + "<b>Última palabra: </b>" + palabras[palabras.length - 1] + "<br/>";
    }
    document.getElementById('contenedor').innerHTML = mensaje;

    // texto ingresado con sus palabras en orden inverso
    var cantcp = txt.length;
    var cadenaInvertida = "";

    while (cantcp >= 0) {
        cadenaInvertida = cadenaInvertida + txt.charAt(cantcp);
        cantcp--;
    }
    mensaje = mensaje + "<b>Texto ingresado con sus palabras en orden inverso: </b>" + cadenaInvertida + "<br/>";
    document.getElementById('contenedor').innerHTML = mensaje;

    // texto ingresado con sus palabras en orden inverso y sin espacios 
    var cantcp = txt.length;
    var cadenaInvertida = "";

    while (cantcp >= 0) {
        if (txt.charAt(cantcp) == " ") {
            cantcp--;
        } else {
            cadenaInvertida = cadenaInvertida + txt.charAt(cantcp);
            cantcp--;
        }
    }

    mensaje = mensaje + "<b>Texto completo invertido, descartando espacios: </b>" + cadenaInvertida + "<br/>";
    document.getElementById('contenedor').innerHTML = mensaje;

}