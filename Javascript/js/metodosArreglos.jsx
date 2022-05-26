var amigos = ["Josue","Daniel","Brayan","Julio"];

/* ----- Metodo Length ------ 
Length nos permite conocer cuantos elementos tiene un arreglo.*/
document.write(amigos.length + "<br></br>");

// ------ Metodo Join ------ 
document.write(amigos.join("-") + "<br></br>");

/* ----- Metodo Pop y Push ------ 
Pop nos permite eliminar el ultimo elemento de un arreglo.
Push nos permite agregar un elemento al final de un arreglo.*/

amigos.pop();
document.write(amigos + "<br></br>");

amigos.push("Rafael");
console.log(amigos + "<br></br>");

/* ----- Metodo shift y unshift ------ 
Shift nos permite eliminar el primer elemento del arreglo.
Unshift nos permite agregar un elemento al inicio del arreglo.*/

amigos.shift();
document.write(amigos + "<br></br>");

amigos.unshift("Jorge");
document.write(amigos + "<br></br>");

/* ----- Metodo Concat ------  */
var amigos2 = ["Felipe","Luis"];
document.write(amigos.concat(amigos2) + "<br></br>");

/* ----- Metodo Sort y Reverse ------ 
Sort nos permite ordenar alfabeticamente un arreglo.
Reverse nos permite cambiar el orden de los elementos.

Nota: sort no funciona para ordenar numeros, solo cadenas de texto.*/

document.write(amigos.sort() + "<br></br>");
document.write(amigos.reverse());