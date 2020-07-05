function fecha() {

    var mes = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    
    var dias = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

    var f = new Date();

    document.write("Hoy es "+dias[f.getDay()] + ", " + f.getDate() + " de " + mes[f.getMonth()] + " de " + f.getFullYear(),', y son las '+f.getHours(),' horas, '+f.getMinutes(),' minutos con '+f.getSeconds(),' segundos.');
}

