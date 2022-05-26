/* Obtenemos todo el formulario*/
const formulario = document.getElementById('formulario');

/* Obtenemsos todos los inputs de mi formulario */
const inputs = document.querySelectorAll('#formulario input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {

    usuario : false,
    nombre : false,
    password : false,
    correo : false,
    telefono : false,
    terminos : false
}

const validarFormulario = (e) => {

    /* e.target.name nos sirve para poder saber el name de nuestro input */
    switch(e.target.name){

        case 'usuario': {

            validarCampos(expresiones.usuario,e.target,'usuario');
            break;
        }

        case 'nombre' :{

            validarCampos(expresiones.nombre,e.target,'nombre');
            break;

        }

        case 'password' :{

            validarCampos(expresiones.password,e.target,'password');
            validarPassword('password2');
            break;

        }

        case 'password2' :{

            validarPassword('password2');
            break;

        }

        case 'telefono' :{

            validarCampos(expresiones.telefono,e.target,'telefono');
            break;

        }

        case 'correo' :{

            validarCampos(expresiones.correo,e.target,'correo');
            break;

        }

    }

};
 
/* Funcion dinamica para validar cada uno de mis inputs*/
const validarCampos = (expresion,input,campo) =>{

    /* e.taget.value obtiene el lo que este escrito en nuestro input */
    if(expresion.test(input.value)){

        /* Eliminamos la clase de estilos de formulario incorrecto */
        /* grupo__${campo} forma de agregar campos sin concatenar si no, con un templeate */
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');

        /* Agregamos la clase de estilos de formulario correcto */
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');

        /* Eliminamos el icono de equis */
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');

        /* Agregamos el icono de cheque */
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');

        /* Eliminamos la estilos para que ahora se oculte el mensaje de error */
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

        campos[campo] = true;

    }
    else{

        /* Eliminamos el icono del cheque */
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');

        /* Agregamos el icono de la equis */
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');

        /* Eliminamos los estilos de mi formulario correcto*/
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');

        /* Agregamos los estilos de mi formulario incorrecto*/
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');

        /* Agregamos la estilos para que ahora se muestre el mensaje de error */
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');

        campos[campo] = false;

    }

}


const validarPassword = (campo) =>{

    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    if(password != password2){

        /* Eliminamos el icono del cheque */
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');

        /* Agregamos el icono de la equis */
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');

        /* Eliminamos los estilos de mi formulario correcto*/
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');

        /* Agregamos los estilos de mi formulario incorrecto*/
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');

        /* Agregamos la estilos para que ahora se muestre el mensaje de error */
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        

        campos[password] = false;
    }
    else{


        /* Eliminamos la clase de estilos de formulario incorrecto */
        /* grupo__${campo} forma de agregar campos sin concatenar si no, con un templeate */
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');

        /* Agregamos la clase de estilos de formulario correcto */
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');

        /* Eliminamos el icono de equis */
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');

        /* Agregamos el icono de cheque */
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');

        /* Eliminamos la estilos para que ahora se oculte el mensaje de error */
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

        campos[password] = false;
    }

};

/* Ciclo foreach para que por cada input que tenga mi arreglo de inputs ejecute dos funciones*/
inputs.forEach((input) => {

    /* Evento para cuando pulsamos una tecla */
    input.addEventListener('keyup',validarFormulario);

    /* Evento para cuando damos un click afuera de un input */
    input.addEventListener('blur',validarFormulario);

});

/* Enviamos formulario */
formulario.addEventListener('submit', (e)=>{

    e.preventDefault();

    const terminos = document.getElementById('terminos');

    /* Validamos si todos mis campos estan correctos*/
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){

        /* Agregamos estilos para mostrar mensaje de exito*/
        document.querySelector('.formulario__btn-enviar .formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        
        /* Vacia inputs formulario */
        formulario.reset();

        /* Reinicia datos de mi formularip despues de 5s */
        setTimeout(() =>{

            /* Elinamos despues de 5s estilos para mostrar mensaje de exito*/
            document.querySelector('.formulario__btn-enviar .formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');

        },5000);

        /* Elimina todos los iconos de cheuque que teniamos activos*/
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {

            icono.classList.remove('formulario__grupo-correcto');

        });

        /* Eliminamos el mensaje de error */
        document.querySelector('.formulario__mensaje').classList.remove('formulario__mensaje-activo');


    }
    else{

        /* Mostramos el mensaje de error */
        document.querySelector('.formulario__mensaje').classList.add('formulario__mensaje-activo');

    }

});