/*---- Forma de acceder a clases, id y tags dentro de mi documento de index.html*/

//var cajas = document.getElementsByTagName('div');
var cajas = document.getElementsByClassName('caja');
var primeraCaja = document.getElementById('primeraCaja');

//cajas[0].textContent = "Hola Mundo";
//cajas[0].innerHTML = '<u>Hola Mundo</u>';

/*for(var i = 0; i<cajas.length; i++){

    cajas[i].innerHTML = '<h3>Hola mundo ' + i + '</h3>';

}*/


/* ------- Incio Creando Nodos -------- */

// 1.- Crear el elemento
var caja = document.createElement('div');

// 1.- Crear el elemento
var u = document.createElement('u');
// 2.- Crear uno nodo de texto
var contenidoU = document.createTextNode('Hola Mundo');
// 3.- Añadir el nodo de texto al elemento
u.appendChild(contenidoU);

// 5.- Agregar el elemento al documento
caja.appendChild(u);

/*var contenido = document.createTextNode('Hola Mundo');
caja.appendChild(contenido);*/

// 4.- Agregar atributos a los caja
caja.setAttribute('class','caja naranja');

// 5.- Agregar el elemento al documento
var contenedor = document.getElementById('content');
contenedor.appendChild(caja);


/* ------- Final Creando Nodos -------- */


/* ----- Modificando la clase o id de un elemento ------ */
caja.id = "primera";
caja.className = "caja naranja";

// ----- Conociendo el elemento padre
var cajaPadre = caja.parentNode;

// ----- Posicionar el elemento antes de otro seleccionado
//cajaPadre.insertBefore(caja,primeraCaja);

// ----- Remplazando Nodos
cajaPadre.replaceChild(caja,cajas[2]);

// ----- Eliminando Nodos
cajaPadre.removeChild(cajas[3]);