/* ------ Ciclo de numeros en decremento del 5 al 1*/
/*for(var i = 5; i>=1;i--){
    
    document.write(i);
    document.write("<br>");

}*/

var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
/*for(var i = 0; i<meses.length;i++)
{
    document.write(meses[i]);
    document.write("<br>");
}*/


/*------- Ciclo forin --------- */
/*for (mes in meses) {

    document.write(meses[mes]);
    document.write("<br>");
    
}*/

/* --------- Ciclo forEach ---------*/
meses.forEach(mes => {

    document.write(mes);
    document.write("<br>");
    
});