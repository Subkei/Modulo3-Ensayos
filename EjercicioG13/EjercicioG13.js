$(function () {
    $('#fecha1').datepicker();
    $('#fecha2').datepicker();

});
//Obtener la fecha desde JQuery Ui datapicker
// https://stackoverflow.com/questions/4919873/how-to-get-the-date-from-jquery-ui-datepicker
function fecha(){

    var jsDate1 = $("#fecha1").datepicker("getDate"); //id de calendario
    var jsDate2 = $("#fecha2").datepicker("getDate");

    if (jsDate1 !== null) { // Si hay alguna fecha seleccionada en datepicker
        jsDate1 instanceof Date; // Si es verdadero
        
        jsDate1.getDate();
        jsDate1.getMonth();
        jsDate1.getFullYear();

    } else {
        alert("No ha marcado una fecha");
    }
    if (jsDate2 !== null) { // Si hay alguna fecha seleccionada en datepicker
        jsDate2 instanceof Date; // Si es verdadero
        
        jsDate2.getDate();
        jsDate2.getMonth();
        jsDate2.getFullYear();

    } else {
        alert("No ha marcado una fecha");
    }

    // Variables para los dias de diferencia
 //   var anoActual = new Date;
    var thisdate = new Date(2020, 11, 31); //Se asigna el fin de año actual

    // Mayor fecha 1
    if (jsDate1>jsDate2) {
        var menos=jsDate1-jsDate2; //De la diferencia saca fecha mayor
        var diasDiferencia=Math.floor(menos / (24 * 60 * 60 * 1000)); //Se convierte la fecha a milisegundos por día
        var menosFinAno=jsDate1-thisdate; //Se resta la fecha 1 con la de fin de año
        var diferenciaFinAno=Math.abs(Math.floor(menosFinAno/(24 * 60 * 60 * 1000)));  //horas*minutos*segundos*milisegundos
        //Mensaje fecha 1
        document.getElementById("compara").innerHTML= "La fecha del primer calendario es mayor, tiene " + diasDiferencia + " días de diferencia. La diferencia con el fin de año " + (new Date).getFullYear() + " es de " + diferenciaFinAno + " días.";

    } else
    // Mayor fecha 2
    if (jsDate1<jsDate2){
        var menos=jsDate2-jsDate1; //De la diferencia saca fecha mayor
        var diasDiferencia=Math.floor(menos / (24 * 60 * 60 * 1000)); //Se convierte la fecha a milisegundos por día
        var menosFinAno=jsDate2-thisdate; //Se resta la fecha 2 con la de fin de año
        var diferenciaFinAno=Math.abs(Math.floor(menosFinAno/(24 * 60 * 60 * 1000))); //horas*minutos*segundos*milisegundos
        //Mensaje fecha 2    
        document.getElementById("compara").innerHTML= "La fecha del segundo calendario es mayor, tiene " + diasDiferencia + " días de diferencia. La diferencia con el fin de año " + (new Date).getFullYear() + " es de " + diferenciaFinAno + " días.";
        
        }else {
        document.getElementById("compara").innerHTML = "Ambas fechas son iguales, no hay diferencia de fechas";
        }   
        
    }

/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional.es = {
	closeText: "Cerrar",
	prevText: "&#x3C;Ant",
	nextText: "Sig&#x3E;",
	currentText: "Hoy",
	monthNames: [ "enero","febrero","marzo","abril","mayo","junio",
	"julio","agosto","septiembre","octubre","noviembre","diciembre" ],
	monthNamesShort: [ "ene","feb","mar","abr","may","jun",
	"jul","ago","sep","oct","nov","dic" ],
	dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
	dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
	dayNamesMin: [ "D","L","M","X","J","V","S" ],
	weekHeader: "Sm",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional.es );

return datepicker.regional.es;

} ) );