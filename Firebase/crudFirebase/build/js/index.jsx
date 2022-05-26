/* IMPORTANTE: Este codigo sirve para poder tener los datos de firebase en mi aplicacion web*/

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
      
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBP5zZXepz6PELk3Hmvl_azniA4njNqrjg",
    authDomain: "crud-frb.firebaseapp.com",
    projectId: "crud-frb",
    storageBucket: "crud-frb.appspot.com",
    messagingSenderId: "390435213006",
    appId: "1:390435213006:web:f10b7456f6c0c0e0a2ca9f"
};
        
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* Variable que nos sirve para poder obtener,ingresar,eliminar y modificar en firestone*/
const db = firebase.firestore();

const taskForm = document.getElementById('task-form');
const taskContainer = document.getElementById('task-container');

/* Variable que me srive para saber si mi aplicacion va a ingresar una tarea o modificarla, por defecto false para ingresar, true para 
modificar*/
let editStatus = false;

/* Variable que nos va a servir para almacenar el id de nuestras tareas para poder modificar */
let id = "";

/* Funcion que devuelve una promesa , es como decir que que una promesa es una funcion asincrona osea que envia y devuelve resultados
al mismo tiempo*/
const guardarTarea = (titulo,descripcion) =>{

    /* Forma de crear una nueva coleccion en Firebase es como crear una nueva tabla en mysql, esto es una
    peticion asincrona*/
    db.collection('tasks').doc().set({

        title : titulo,
        desc : descripcion

    });

}

/* Funcion que nos sirve para obtener todos los datos de una coleccion llamada tasks, para que funciones tiene que estar en una sola linea 
como este escrito aqui */
const obtenerTarea = () => db.collection('tasks').orderBy('title','asc').get();

/* Funcion que nos sirve para poder actualizar mis tareas cada vez que se agregue, elimine o actulice una tarea , esta es una funcion
dada por firebase, con un parametro de callback*/
const onGetTasks = (callback) => db.collection('tasks').orderBy('title','asc').onSnapshot(callback);

/* Funcion para poder obtener una tarea en especifico conforme su id*/
const getTask = (id) => db.collection('tasks').doc(id).get();

/* Funcion para eliminar una tarea de mi coleccion, tiene que estar escrita como tal, para que funcione*/
const deleteTask = (id) => db.collection('tasks').doc(id).delete();

/* Funcion para poder actualizar una tarea en mi colleccion, se le tiene que enviar un objeto con todos los datos, por ejemplo
una tarea e este caso tiene que tener una titulo y una descripcion, por lo que el objeto tiene que tener estos dos atributos como
lo vas a ver adelante*/
const updateTask = (id,updatedTask) => db.collection('tasks').doc(id).update(updatedTask);



/* Evento que sirve para ejecutar algo cuando cargue nuestra pagina, en este caso obtenemos todos los datos de una coleccion llamada tasks*/
window.addEventListener('DOMContentLoaded', async (e) => {

    /* Obtenemos todos las tareas que hay en firebase cada vez que se agregue,cambio o se eleminen datos */
    onGetTasks((tasks) =>{
        /* Vaciamos el contenedor para que este quede en blanco*/
        taskContainer.innerHTML = '';

        /* Por cada tarea que alla reliazalos el codigo */
        tasks.forEach(task =>{

            /* Obtenemos el id de cada tarea que tengamos en firebase esto para poder identificar cada tarea, es por eso que al boton
            de eliminar se le agregar una nuevo elemento llamado data-id, que tambien se puede agregar mas como data-nombre, etc,
            que este contiene el id de cada tarea*/
            const taskId = task.id;
    
            /* Agregando tareas a nuestros contenedor task-Container ver en el index.html */
            taskContainer.innerHTML += `<div class="card card-body mt-2 border-primary">
            
                <h3 class="h5">${task.data().title}</h3>
                <p>${task.data().desc}</p>
    
                <div>
                
                    <button class="btn btn-primary btn-delete" data-id="${taskId}" data-nombre="Josue">Delete</button>
                    <button class="btn btn-secondary btn-edit" data-id="${taskId}">Edit</button>
    
                </div>
    
            </div>`;

            /* Eliminamos una tarea */
            const btns = document.querySelectorAll('.btn-delete');
            
            btns.forEach((btn) =>{

                btn.addEventListener('click', async (e)=>{

                    /* dataset nos srive para que nos muestre todos los datas que tiene nuestro boton */
                    await deleteTask(e.target.dataset.id);

                });

            });

            /* Modificamos una tarea */
            const btnsEdit = document.querySelectorAll('.btn-edit');
            btnsEdit.forEach((btn) =>{

                btn.addEventListener('click', async (e) =>{

                    const task = await getTask(e.target.dataset.id);

                    taskForm["task-title"].value = task.data().title; 
                    taskForm["task-description"].value = task.data().desc; 

                    editStatus = true;
                    id = e.target.dataset.id;

                    taskForm['btn-task-form'].innerText = "Update";

                });

            });
    
        })

    });

});

/*async y await es para decir que el codigo que tiene el await va a tomar tiempo para la respuesta */
taskForm.addEventListener('submit', async (e) =>{

    e.preventDefault();

    const titulo = taskForm['task-title'];
    const descripcion = taskForm['task-description'];

    if(!editStatus){

        await guardarTarea(titulo.value,descripcion.value);

    }else{

        /* Objeto que me va a servir para actualizar mi tarea*/
        const newData = {

            title : titulo.value,
            desc : descripcion.value
        }

        await updateTask(id,newData);

        taskForm['btn-task-form'].innerText = "Save";
        editStatus = false;
        id="";

    }


    taskForm.reset();
    titulo.focus();

});