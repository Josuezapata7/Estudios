/* ----- length ------
Nos permite conocer el numero de caracteres que tiene una cadena.*/

var nombre = "Josue Zapata";
var numeroCaracteres = nombre.length;
document.write(numeroCaracteres + "<br>");

/* ----- substring -----
Nos permite extraer una parte de la cadena de texto.
Recibe 2 valores, el primero es la posicion inicial, y el segundo la posicion final.*/

/*var segundoNombre = nombre.substring(6,12);
document.write(segundoNombre + "<br>");*/

/* ----- substr -----
Similar a substring, nos permite extraer una parte de la cadena de texto.
Pero en el segundo valor loe ponemos cuantos caracteres extraera.*/

var segundoNombre = nombre.substr(0,2)
document.write(segundoNombre + "<br>");

/* ----- replace -----
Nos permite remplazar una parte de una cadena de texto por otro.*/

var nuevoNombre = nombre.replace("Zapata","Daniel");
document.write(nuevoNombre + "<br>");

/* ----- toUpperCase -----
Convertimos una cadena a Mayusculas*/

nombre = nombre.toUpperCase();
document.write(nombre + "<br>");

/* ----- toLowerCase -----
Convertimos una cadena a Minusculas*/

nombre = nombre.toLowerCase();
document.write(nombre + "<br>");

/* ----- indexOf ----
Nos permite buscar la PRIMERA ocurrencia de una letra.
Metodo sencible a mayusculas, 'c' es diferente a 'C'.*/

var posicion = nombre.indexOf("z");
document.write(posicion + "<br>");

/* ----- lastIndexOf ----- */
var ultimaPosicion = nombre.lastIndexOf("a");
document.write(ultimaPosicion + "<br>");