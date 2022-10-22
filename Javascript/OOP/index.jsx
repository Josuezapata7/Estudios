/* ------- Inicio Casi todo es un objeto ------- */

// const { object } = require("prop-types");

// console.log( typeof "Hola mundo")
// console.log(typeof 100)
// console.log(typeof false )

// console.log(typeof {})
// console.log(typeof [])
// console.log(typeof new Date()) 
// console.log(typeof RegExp("[a-zA-Z0-9]"))

// console.log(typeof new String("Hola mundo"))
// console.log(typeof new Number(100))
// console.log(typeof new Boolean(true));

/* ------- Fin Casi todo es un objeto ------- */

/* ------- Inicio Objeto Literal 🎯 ------- */

// let name = "Josue"
// let lastname = "Zapata"
// let age = 30

// const user = {
//     name: "Josue",
//     lastname: "Zapata",
//     age: 30,
//     hobbies: ["read", "programming", "run"],
//     address: {
//         street: "Some street",
//         city: "London"
//     }
// }

// console.log(user)

/* ------- Fin Objeto Literal ------- */

/* ------- Inicio Propiedades 🥠 ------- */

// const user = {
//     name: "Josue", //Propiedad
//     lastname: "Zapata",
//     age: 23
// }

/* ------- Fin Propiedades ------- */

/* ------- Inicio Metodos 🚇 ------- */

// function showFullName(){
//     return "Josue Zapata"
// }

// const user = {
//     name: "Josue", //Propiedad
//     lastname: "Zapata",
//     age: 23,
//     showFullName: showFullName()
// }

// console.log(user.showFullName)

/* ------- Fin Metodos ------- */


/* ------- Inicio de this 👇 ------- */


// const user = {
//     name: "Gabriel", //Propiedad
//     lastname: "Zapata",
//     age: 23,
//     showFullName(){
//         return this.name + " " + this.lastname
//     }
// }


// console.log(user.showFullName());

// const account = {
//     number: "123456",
//     amount: 1000,
//     deposit(quantity){
//         this.amount += quantity
//         console.log(this.amount);
//     },
//     withdraw(quantity){
//         this.amount -= quantity
//     }
// }

// console.log(account.deposit(100))
// console.log(account.amount)
// console.log(account.withdraw(1000))
// console.log(account.amount)

/* ------- Fin de this ------- */


/* ------- Inicio de contructor 👷‍♂️ ------- */

// const user = {
//     name: "Gabriel", //Propiedad
//     lastname: "Zapata",
//     age: 23,
//     showFullName(){
//         return `${this.name} ${this.lastname}`
//     }
// }

// //Constructor
// function Person(){
//     this.name = ""
//     this.lastname = ""
//     this.age = 0
//     this.showFullName = function(){
//         return `${this.name} ${this.lastname}`
//     }
// }

// //Creando nuevo Objeto basado en el constructor
// const user2 = new Person()
// user2.name = "Josue"
// user2.lastname = "Azañon"
// user2.age = 23
// console.log(user2.showFullName())

/* ------- Final de contructor ------- */

/* ------- Inicio de Object contructor 🎯👷‍♂️ ------- */

// //Constructor de VSC
// const str = new Object("Hello world")
// //Agregando al objeto propiedades nuevas
// str.name = "Special String"
// //Agregando al objeto funciones nuevas
// str.test = function(){
//     return `${this} test`
// }
// console.log(str.name);

// //Constructor literal
// const person2 = {}

// const user = {
//     name: "Gabriel", //Propiedad
//     lastname: "Zapata",
//     age: 23,
//     showFullName(){
//         return `${this.name} ${this.lastname}`
//     }
// }

// //Forma de mostrar los atributos y funciones que tiene un objeto
// console.log(Object.keys(user));

// //Forma de mostrar los valores de los atributos y funciones que tiene un objeto
// console.log(Object.values(user));


/* ------- Fin de Object contructor ------- */



/* ------- Inicio de New 🆕 ------- */

// function Person(){
//     this.name = ""
//     this.lastname = ""
// }

// const person = new Person()
// console.log(person)

// const mankind = {
//     Person: function(){
//         "use strict";
//         this.name = "";
//         this.lastname = "";
//     }
// }

// const person2 = new mankind.Person()
// console.log(person2);
// console.log(mankind)


/* ------- Fin de New ------- */


/* ------- Inicio de Prototype 📽 ------- */
// function Person(name, lastname){
//     this.name = name
//     this.lastname = lastname
//     this.displayName = function(){
//         return `${this.name} ${this.lastname}`
//     }
// }

// const john = new Person("John","Mcmillan");
// console.log(john.displayName())

// //Agregando nuevo atributo de funcion con prototype al constructor de Person
// Person.prototype.greet = function(){
//     return `Hello I'am ${this.name}`
// }

// const mario = new Person("Mario","Rossi")
// const maria = new Person("Maria","Perez")
// const jose = new Person("Jose","Perez")
// console.log(mario.displayName());

// console.log(john.greet());
// console.log(mario.greet());
// console.log(maria.greet());
// console.log(jose.greet());


/* ------- Fin de Prototype ------- */


/* ------- Inicio de Class 🎬 ------- */

// Creando clase con su constructor en js
// class Person{ //Sintactic Sugar
//     //Constructor de la clase
//     constructor(name,lastname){
//         this.name = name
//         this.lastname = lastname
//     }

//     //Agregando funcion a la clase
//     greet(){
//         return `Hello I'am ${this.name} ${this.lastname}`
//     }
// }

// const user = new Person("Josue","Zapata")
// const user2 = new Person("Daniel","Azañon")

// console.log(user.greet())
// console.log(user2.greet())
// console.log(typeof Person);


/* ------- Fin de Class  ------- */


/* ------- Inicio de Asociacion 😲 ------- */

// class Person{ //Sintactic Sugar
//     //Constructor de la clase
//     constructor(name,lastname){
//         this.name = name
//         this.lastname = lastname
//     }

// }

// const john = new Person("John","Ray")
// const maria = new Person("Maria","Perez")

// //Asociacion de padre John a Maria
// maria.parent = john

// console.log(maria)
// console.log(john)

/* ------- Fin de Asociacion  ------- */



/* ------- Inicio de Agregacion 🤝 ------- */
// const company = {
//     name : "Josue code",
//     empleoyees : []
// }

// class Person{ //Sintactic Sugar
//     //Constructor de la clase
//     constructor(name,lastname){
//         this.name = name
//         this.lastname = lastname
//     }

// }

// const john = new Person("John","Ray")
// const maria = new Person("Maria","Perez")

// // La agregacion es llenar por ejemplo un arreglo con objetos de otra clase 
// company.empleoyees.push(john)
// company.empleoyees.push(maria)

// console.log(company);

/* ------- Fin de Agregacion  ------- */


/* ------- Inicio de Composicion 💿 ------- */

/*La composicion se da cuando tenemos un objeto que contiene otro objeto, pero este no fue declarado
afuera como una clase normal, sino que se crea el objeto(address) adentro de el objeto(Person) */
// const Person = {
//     name : "Josue",
//     lastname: "Zapata",
//     address: {
//         street: "123 baker street",
//         city: "London",
//         country: "United kingdom"
//     }
// }

/* ------- Fin de Composicion 💿 ------- */



/* ------- Inicio de Composicion 💿 ------- */

/* ------- Inicio de Encapsulacion 🧢 ------- */

/* Encapsulacion funciones dentro del contructor con variables dentro del constructor, de esta forma podemos 
alterar valores que estan dentro del constructor*/
// function Company(name){
//     let employees = []
//     this.name = name

//     this.getEmployees = function(){
//         return employees
//     }

//     this.addEmployee = function(employee){
//         employees.push(employee)
//     }
// }

// const company = new Company("Coca cola")
// const company2 = new Company("Pepsi")

// company.addEmployee({name: "Josue"})
// company2.addEmployee({name: "Daniel"})

// console.log(company.getEmployees());
// console.log(company2.getEmployees());

/* ------- Fin de Encapsulacion 🧢 ------- */



/* ------- Inicio de Herencia 🈁 ------- */

// Constructor Person
// class Person {
//     constructor(name,lastname){
//         this.name = name
//         this.lastname = lastname
//         this.activo = 1
//     }
// }

// // Constructor Programmer que hereda de Person
// class Programmer extends Person{
//     constructor(languaje, name, lastname){
//         //Para heredar atributos de Person
//         super(name,lastname);
//         this.languaje = languaje
//     }
// }

// const person = new Person("Josue","Zapata")
// console.log(person)

// const programmer = new Programmer("Javascript","Zapata","Daniel")
// console.log(programmer);

/* ------- Fin de Herencia 🈁 ------- */


/* ------- Inicio de Polimorfismo 👮‍♀️ ------- */

//En js no aplica tanto lo que es el polimorfismo

// function CountItems(x){
//     return x.toString().length
// }

// console.log(CountItems(10000))
// console.log(CountItems("Hola Mundo"))

// function sum(x = 0,y = 0,z= 0){
//     return x+y+z
// }

// console.log(sum(20,10));
// console.log(sum(20,10,30));

/* ------- Fin de Polimorfismo 👮‍♀️ ------- */


/* ------- Inicio de Polimorfismo Parametrico 🚇 ------- */

/* El polimorfismo parametrico es un constructor que acepte varios parametros de cualquier tipo en una
solo funcion */
// function Stack(){
//     this.items = []

//     this.push = function(item){
//         this.items.push(item)
//     }
// }

// const stack = new Stack()
// stack.push("Hola mundo")

// const stack2 = new Stack()
// stack2.push(222)

// console.log(stack.items)
// console.log(stack2.items)

/* ------- Fin de Polimorfismo Parametrico 🚇 ------- */


/* ------- Inicio de Subtype Polimorfismo 🚇 ------- */

class Person {
    constructor(name,lastname){
        this.name = name
        this.lastname = lastname
    }
}


class Programmer extends Person{
    constructor(languaje,name,lastname){
        super(name,lastname);
        this.languaje = languaje
    }
}


const josue = new Person("Josue","Zapata")
const daniel = new Programmer("javascript","Daniel","Azanion")

function writeFullName(p){
    console.log(`${p.name} ${p.lastname}`);
}

writeFullName(josue)
writeFullName(daniel)


/* ------- Fin de Subtype Polimorfismo 🚇 ------- */