/* Objeto sujeto */
class Subject {

    /* Cosntructor que va a tener a todos los observadores */
    constructor(){

        this.observers = [];

    }

    /* Metodo que sirve para agregar un observador al arreglo de observadores */
    subscribe(o){

        this.observers.push(o);

    }

    /* Forma de eliminar un observador de mi arreglo de observadores */
    unsubscribe(e){

        this.observers = this.observers.filter(e => e!=0);

    }

    notify(object){

        this.observers.forEach(observer =>{

            observer.notify(object); 

        });

    }

}

/* Estdados de mi sujeto */
class MovimientoSubject extends Subject {

    constructor(){

        super();
        this.value = "";

    }

    notify(value){

        this.value = value;
        super.notify(this);

    }

}

/* Objeto observador */
class Aspiradora{

    notify(subject){

        document.getElementById('sujeto').innerText = subject.value
    }

}

/* Creamos subjeto */
var subject = new MovimientoSubject();

/* Creamos observador */
var observador = new Aspiradora();

subject.subscribe(observador);

observador.notify(document.getElementById('tabla'));



function nueva(){

    var docto = document.getElementById('tabla').value;

    document.getElementById('tabla').addEventListener('change', (event)=>{
    
        if(docto== 1){
    
            observador.notify(event.target)
            console.log(document.getElementById('tabla').value)
    
            /*document.getElementById('tabla').disabled = true
            document.getElementById('tabla2').disabled = true
            document.getElementById('tabla3').disabled = true
            document.getElementById('tabla4').disabled = true*/
        
            /*setTimeout(() =>{
        
                document.getElementById('tabla4').disabled = false
                document.getElementById('tabla').value = 0
    
            },2000)*/
    
        }
    
        
    });

}

setInterval('nueva()',1000);


document.getElementById('tabla2').addEventListener('change', (event)=>{

    observador.notify(event.target)

});

document.getElementById('tabla3').addEventListener('change', (event)=>{

    observador.notify(event.target)

});

document.getElementById('tabla4').addEventListener('change', (event)=>{

    observador.notify(event.target)

});