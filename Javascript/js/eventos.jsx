/* Exixten 3 modelos de eventos diferentes:
	- Modelo basico de eventos.
		Caracteristicas limitadas.
		Pero Funciona en todos los navegadores.

	- Modelo de eventos estandar.
		Podemos hacer mas cosas con el
		Todos los navegadores lo soportan.

		Las versiones anteriores de Internet explorer como IE7 no lo soportan.

	- Modelo de eventos de Internet Explorer.
		Modelo creado por Microsoft exclusivamente para IE.
        
*/

var btnSaludo = document.getElementById('btn-saludar');

// ----- Agregando Eventos ------
btnSaludo.addEventListener('click',function(){

    alert("Hola");

});

/* Algunos de los eventos mas usados:			
	click
	focus
	blur
	change
	onload
	mouseover
	mouseout
	resize 
	submit
*/

btnSaludo.addEventListener('mouseenter',saludo);

// ----- Eliminando Eventos ------
btnSaludo.removeEventListener('mouseenter',saludo);

function saludo(){

    alert("Hola");

}

function crearCaja(){

    var contenedor = document.getElementById('contenedor'); 
    var caja = document.createElement('div');
    caja.setAttribute('class','caja');

    contenedor.appendChild(caja);

}

btnCaja = document.getElementById('btn-Caja');
btnCaja.addEventListener('click',crearCaja);
