/* ----- Variable local -------
Las variables locales son las que han sido creadas dentro de una funcion o una funcion anidada (una funcion dentro de 
otra).*/

/*function saludo(){
    var texto = "Hola mundo";
    document.write(texto + "<br>");
}

saludo();*/

/* ----- Variable local con funciones anidadas  --------
El scope funciona por niveles, si no encuentra una variable en el mismo nivel subira de nivel hacia afuera y buscara. 
Si no encuentra subira otro nivel y asi sucesivamente.
Si tenemos una funcion anidada (una funcion dentro de otra)
podemos buscar variables desde dentro hacia afuera, pero desde una funcion no podemos buscar variables hacia dentro 
de otra funcion.*/

/*function saludo(){

    var texto = "Hola mundo";

    function mensaje(){

        document.write(texto);

    }

    mensaje();

}

saludo();*/

/* ----- Variable Global --------
Las variables globales pueden ser accedidas desde cualquier parte del codigo, incluyendo cualquier funcion.*/

/*var texto = "Hola mundo";

function saludo(){
    document.write(texto + "<br>");

    texto = "Hola mundo modificado";
    document.write(texto);
}

saludo();*/

/* ----- IMPORTANTE: --------
Si una variable se declara fuera es global. Pero las variables dentro de una funcion pueden ser globales tambien.
Si dentro de la funcion declaramos una variable mediante la palabra "var" sera local. Pero si no le ponemos "var" 
era global.*/

/*function saludo(){

    mensaje = "Hola mundo";
}

saludo();
document.write(mensaje);*/


/* ----- Como proteger nuestras variables de codigo de terceros. --------
Podemos proteger nuestro codigo con una funcion autoinvocada.
Esto gracias a que todo lo que este fuera de esta funcion no va a poder acceder a nuestras variables que esten dentro.*/

(function(){

    var mensaje = "Hola mundo";

}())

document.write(mensaje);