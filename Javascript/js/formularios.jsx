//var formulario = document.getElementsByName('formulario');
var formulario = document.getElementById('formulario');

/* Obtener datos de un formulario con el name */
var nombre = formulario.nombre;
var sexo = formulario.sexo;
var terminos = formulario.terminos;

function validar(e){

    if(nombre.value > 18){

        alert('Maximo de Caracteres permitidos');
    }
    else if(nombre.value == ""){

        alert("Por favor ingresa un Nombre");

    }

    if(sexo[0].checked == false && sexo[1].checked == false ){

        alert("Por favor selecciona un sexo!");

    }


    if(!terminos.checked){

        alert("Por favor acepta los terminos y condiciones!");

    }

    e.preventDefault();

}

formulario.addEventListener('submit',validar);