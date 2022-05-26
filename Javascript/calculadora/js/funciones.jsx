$('#result').on('click',function(){

    var numero_uno = document.getElementById("numero-uno").value;
    var numero_dos = document.getElementById("numero-dos").value;

    document.getElementById("respuesta").value = suma(numero_uno,numero_dos);


});

/* ------ Funcion Suma ------ */
var suma = function(num1,num2){

    var resultado = parseFloat(num1) + parseFloat(num2);
    return resultado;
}
