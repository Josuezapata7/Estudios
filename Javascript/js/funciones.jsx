var numero1 = 5;
var numero2 = 6;

var resultado = suma(numero1,numero2);
document.write(resultado);

// Primera forma de hacer una funcion
function suma(num1, num2){

    var result = num1 + num2;
    return result;

}

/* -------- Forma de Hacer una funcion con una variable ------- */
/*var suma = function (num1,num2) {

    var result = num1 + num2;
    return result;
}*/

// ----- Funciones autoinvocadas ---------
/* Son funciones que se ejecutan automaticamente.
Muchas veces las vamos a utilizar para proteger nuestro codigo y que codigo de terceros no 
acceda a nuestras variables, funciones, etc.*/

(function(){

    alert("Hola");

}());