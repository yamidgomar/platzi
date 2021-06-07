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

*/

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('!!Hey')
        }else{
            reject('!!Opss')
        }
    })
} 

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola como estas'))
    .catch(error => console.log(error))
