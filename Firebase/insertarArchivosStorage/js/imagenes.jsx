// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADk5MKnlZorNGXfPkbYpzAnnQxekAMipA",
    authDomain: "img-prueba-file.firebaseapp.com",
    projectId: "img-prueba-file",
    storageBucket: "img-prueba-file.appspot.com",
    messagingSenderId: "571502115065",
    appId: "1:571502115065:web:055e230468bb462329ca28"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);


const input_imagen =  document.getElementById('input-file');
/* Referencial inicial para firebase storage */
var db = firebase.firestore();


/* Funcion para subir imagenes en firebase storage*/
const subirFile = () =>{

    var nombre_imagen = input_imagen.files[0];

    /*inicializamos una variable con firebase storage con la carpeta que vamos a usar que en este caso son imagenes*/
    var storageRef = firebase.storage().ref();

    /* El nombre_imagen.name puede ser el nombre que uno quiere */
    var uploadTask = storageRef.child('imagenes/' + nombre_imagen.name).put(nombre_imagen);
    
    /* Cuando se detecta una subida que haga este codigo */
    uploadTask.on('state_changed',function(snapshot){

        
    },function(error){

        alert(error);

    },function(){

        /* Funcion para obtener la url de mi imagen subida */
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            
            var url_imagen = downloadURL;

            /* En doc podemos poner el nombre que queramos, si no ponemos nada obtendremos un documento aleatorio*/
            db.collection('orden').doc().set({

                nombre: nombre_imagen.name,
                url: url_imagen
    
            });

        });

    });

}

/* Funcion para obtener imagenes en firebase storage */
const obtenerImagen = () => db.collection('orden').orderBy('nombre','asc').get();

/* Obtener datos de firestone conforme a cambios */
const obteniendoImagenes = (callback) => db.collection('orden').orderBy('nombre','asc').onSnapshot(callback);

/* Eliminar datos en firestone */
const deleteTask = (id) => db.collection('orden').doc(id).delete();

/* Funcion para eliminar imagenes*/
const eliminarImagen = (ruta,nombreImagen) =>{

    var storageRef = firebase.storage().ref();
    var desertRef = storageRef.child(`${ruta}/${nombreImagen}`);

    desertRef.delete().then(()=>{

        alert('Imagen Eliminada');

    }).catch((error) =>{

        alert(error);

    });

}


input_imagen.addEventListener('change', subirFile);

window.addEventListener('DOMContentLoaded', async ()=>{

    obteniendoImagenes((productos) =>{

        contenedor_imagenes = document.getElementById('contenedor-imagenes');
        contenedor_imagenes.innerHTML = '';

        productos.forEach(producto =>{

            contenedor_imagenes.innerHTML += `<img src="${producto.data().url}" width="200px" heigth="200px"/>
            
                <button class="btn-eliminar" data-id="${producto.id}" data-nombreimagen="${producto.data().nombre}">Eliminar</button>

            `;

            /* Obtenemos botones eliminar */
            var btns_eliminar = document.querySelectorAll('.btn-eliminar');

            btns_eliminar.forEach(btn =>{

                btn.addEventListener('click', async (e) =>{

                    await eliminarImagen('imagenes',e.target.dataset.nombreimagen);
                    await deleteTask(e.target.dataset.id);

                });

            });

        });


    });


});

