/*

//==========   DEFAULT PARAMEMS Y CONCATENACION. ======== \\

function newFunction(name, age, country){
    var name = name || 'Yamid'
    var age = age || 34
    var country = country || 'Mx'
    console.log(name, age, country)
}

newFunction()

// ====== ES6 ===== 

function newFunction2(name = 'Yago', age = 30, country = 'Col'){
    console.log(name, age, country)
}

newFunction2()
newFunction2('Yadimid', 25, 'Ven')

let hello = 'Hello'
let world = 'World'
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase)

// ====== ES6 ===== 

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

// ====== LET y CONST, Multilínea, Spread Operator y Desestructuración ======== \\

// Multilinea en los strings \\

let lorem = 'Consectetur consequuntur eligendi harum commodi \n' +
    'Esta es otra frase epica';
console.log(lorem)


// ES6

let lorem2 = `Esta es una frase epica que necesitamos,
Esta es otra frase epica necesitada.`

console.log(lorem2)

// Desestructuracion \\

let persona = {
    name: 'Yamid',
    age: 34,
    country: 'CO'
}

console.log(persona.name, persona.age)

// ES6

let {name} = persona;
console.log(name)


// Operador de propagacion.

let team1 = ['oscar', 'julian', 'ricardo']
let team2 = ['valeria', 'yesica', 'camila']
let education = ['david', ...team1, ...team2]

console.log(education)

// Uso de let \\

let solo esta disponible en el scope o bloque de codigo en el que es definido

{
    var globalVar = 'Global Var'
}

{
    let globalLet = 'Global Let'
    console.log(globalLet)
}

console.log(globalVar)
// console.log(globalLet) no podemos acceder a globalLet por su scope.


// CONST es una variable que no cambia su valor.

const a = 'b'
// a = 'a' no se puede reasignar el valor.
console.log(a)

// ==========  Arrow Functions, Promesas y Parámetros en objetos. =================\

// parametros en objetos \\


let name = 'oscar'
let age = 32

let obj = {name:name, age:age}
// console.log(obj)
let obj2 = {name, age}
console.log(obj2)

// Arrow functions.

Vienen a trabajar con dos caracteristicas una sintaxis reducida y un this no vinculable.

const names = [
    {name:'oscar', age:34},
    {name:'valeria', age:20}
]

let listOfName = names.map(function(item){
    console.log(item.name)
})

let listOfName2 = names.map(item => console.log(item.name))

// otra forma

const listofname3 = (name, age, country) => {
    ...
}

cuando vamos a pasar un solo parametro:

const listofname4 = name => {
    ...
}

const square = num => num * num //Estamos entendiendo wue estamos definiendo una funcion la cual recibe unnvalor(num), multiplicamos ese numero por si mismo y al final lo returna.

// ============= LAS PROMESAS ============== \\

javasript no es lenguaje sincronico, que pueda ejecutar muchos elementos al mismo tiempo, sino que va ejecutando elemento por elemento.

Lo que hace una promesa como dice su nombre algo va a pasar que en algun momento va a ocurrir algo que nosotros estamos estableciendo

const helloPromise = () => {
    return new Promise((resolve, reject) =>{ 
        //(resolve, reject) la promesa  contiene la espera de una logica de que va a resolver o rechazar 
        if(true){
            resolve('!Hey')
        }else{
            reject('Upps!')
        }
    })
}

// Como la resolvemos:

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola como estas.'))
    .catch(error => console.log(error))

// ==================== Clases, Módulos y Generadores ============================== \\

class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }

    res(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB

        return this.valueA - this.valueB
    }
}

const calc = new Calculator()

console.log(calc.sum(2,2))
console.log(calc.sum(8,2))
console.log(calc.res(40,30))

Tenemos una clase que tiene un constructor la cual esta asignando dos variables al scope global, despues se tiene un metodo al cual se le va a pasar dos elementos
En este caso los valores a sumar, luego dentro de este metodo asignamos los valores recibidos a las variables que previamente construi en mi clase.

// Modulos : import y export.

Definimos un archivo nuevo module.js, agregamos:

const hello = () => {
    return `!Hello`
}


//export default hello para el navegador

// para nodejs
module.exports = hello

En index.js, agregamos:

//import hello from './module' para el navegador
// o import {hello} from './module' (probar)
// para node.

const hello = require('./module')

console.log(hello())

// Generadores \\

Es una funci9j especial que retorna una serie de valores segun el algoritmo definido.


*/

function* helloWorld(){
    if(true){
        yield 'Hello' // yield me permite devolver algor
                      //y guarda el estado en forma interna
    }

    if(true){
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)

//La ejecutamos generando una constante igualamos al generador y usamos el valor next que me permitira ejecutar la primera logica y obtener ese valor segun sea el caso y cuando vuelva a ejecutar otra vez next recordara por donde estaba para mostrarme el siguiente valor y asi sucesivamente; el tercer llamado como ya no tenemos un tercer valor devuelve undefined.
//Un caso de uso es el fibonacci


// ========= Qué se impleménto en ES7 =========== //

//includes trabaja sonre un arreglo o un string me permite validar si hay un elemento.

const numeros = [2, 7, 5, 9, 20, 39]

if(numeros.includes(5)){
    console.log('Si se encuentra el numero')
}
