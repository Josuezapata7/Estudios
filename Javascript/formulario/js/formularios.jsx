var formulario = document.getElementById('formulario');

var nombre = formulario.nombre;
var correo = formulario.correo;
var sexo = formulario.sexo;
var terminos = formulario.terminos;
var error = document.getElementById('error');
var validar = false;

function validarNombre(e){

    if(nombre.value == "" || nombre.value == null){

        var errorNombre = document.createElement('li');
        var textErrorNombre = document.createTextNode('Error ingrese un Nombre!');
        errorNombre.appendChild(textErrorNombre);

        error.appendChild(errorNombre);

        /* Otra forma de Hacerlo */
        /*error.innerHTML += '<li>Error ingrese un Nombre!</li>';*/

        error.style.display = "block";

        e.preventDefault();
    }

}


function validarCorreo(e){

    if(correo.value == "" || correo.value == null){

        var errorCorreo = document.createElement('li');
        var textErrorCorreo = document.createTextNode('Error ingrese un Correo!');
        errorCorreo.appendChild(textErrorCorreo);

        error.appendChild(errorCorreo);

        /* Otra forma de Hacerlo */
        /*error.innerHTML += '<li>Error ingrese un Nombre!</li>';*/

        error.style.display = "block";

        e.preventDefault();
    }

}


function validarSexo(e){

    if(sexo[0].checked == false && sexo[1].checked == false){

        var errorSexo = document.createElement('li');
        var textErrorSexo = document.createTextNode('Error elija un Sexo!');
        errorSexo.appendChild(textErrorSexo);

        error.appendChild(errorSexo);

        /* Otra forma de Hacerlo */
        /*error.innerHTML += '<li>Error ingrese un Nombre!</li>';*/

        error.style.display = "block";

        e.preventDefault();

    }

    /* Otro forma de Hacerlo*/
    /*if(sexo.value == "" || sexo.value == null){

        var errorSexo = document.createElement('li');
        var textErrorSexo = document.createTextNode('Error elija un Sexo!');
        errorSexo.appendChild(textErrorSexo);

        error.appendChild(errorSexo);

        error.style.display = "block";

        e.preventDefault();

    }else{

        error.style.display = "none";

    }*/

}

function validarTerminos(e){

    if(terminos.checked == false){

        var errorTerminos = document.createElement('li');
        var textErrorTerminos = document.createTextNode('Error acepte los terminos!');
        errorTerminos.appendChild(textErrorTerminos);

        error.appendChild(errorTerminos);

        /* Otra forma de Hacerlo */
        /*error.innerHTML += '<li>Error ingrese un Nombre!</li>';*/

        error.style.display = "block";

        e.preventDefault();

    }

}

function validarFormulario(e){

    error.innerHTML = "";

    validarNombre(e);
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e);

}

formulario.addEventListener('submit',validarFormulario);
