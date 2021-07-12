/*

function newFunction(nombre, apellido, edad){
    var nombre = nombre || 'yamid'
    var apellido = apellido || 'gonzalez'
    var edad = edad || 34

    const nombreCompleto = `Mi nombre completo es ${nombre} ${apellido} y tengo ${edad}`
    return nombreCompleto
}


console.log(newFunction('yago', undefined,24))

function newFunction2(nombre = 'yamid', apellido, edad = 34){
    var apellido = apellido || 'gonzalez'

    const nombreCompleto = `Mi nombre completo es ${nombre} ${apellido} y tengo ${edad}`
    return nombreCompleto
}

console.log(newFunction2('yago', null, 15))
console.log(newFunction2('yago', 'martinez', 15))

const persona = {
    nombre:'yamid',
    apellido: 'gonzalez',
    edad:34
} 

console.log(persona.nombre, persona.apellido)

const {nombre, edad} = persona
console.log(nombre, edad)


var lista1 = ['yamid', 'maria', 'alejandro']
var lista2 = ['leonardo', 'benjamin', 'esteban']
var lista3 = ['karen', 'leonor', 'patricia']

var lista_general = [...lista1, ...lista2, ...lista3]
console.log(lista_general)


// ====== SCOPE ========

{
    var globalVar = 'Global Var'
    console.log(globalVar)
}

{
    let globalLet = 'Global let'
    console.log(globalLet)
}

console.log(globalVar)
console.log(globalLet)

// ==========  Arrow Functions, Promesas y Parámetros en objetos. =================\

// parametros en objetos \\

let name = 'yamid'
let apellido = 'gonzalez'

let obj = {name:name, apellido:apellido}

// ====== ES6
console.log(obj)
let obj2 = {name, apellido} // = let obj2 = {name: name, apellido:apellido}
console.log(obj2)

const personas = [
    {name:'yamid', apellido:'gonzalez'},
    {name:'yago', apellido:'martinez'},
    {name:'maria', apellido:'constante'}
]

const myfunction = personas.map(function(item){
    console.log(item.name)
}) 

const myfunction2 = personas.map(item => console.log(item.apellido))
myfunction
myfunction2

const calc = num => num * num

console.log(calc(25))

// ============= LAS PROMESAS ============== \\

const mypromesa = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('!Hey')
        }else{
            reject('!Oops')
        }
    })
}

mypromesa()
    .then(response => console.log(response))
    .then(() => console.log('Como estas?'))
    .catch(error => console.log(error))


class Calc{ 
    sum(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB

        return this.valueA + valueB
    }
    
    res(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB

        return this.valueA - this.valueB
    }
}

var calc = new Calc()
console.log(calc.sum(4,3))
console.log(calc.res(20,1))

*/

const data = {
    frontend:'yago',
    backend:'Yamid',
    desing:'alejandro'
}

const entries = Object.entries(data)
console.log(entries)
const keys = Object.keys(data)
console.log(keys)
const values = Object.values(data)
console.log(values)

const saludo = '!Hola'
console.log(saludo.padStart(21, ' -->'))
console.log(saludo.padEnd(20, 'hi'))

const numeros = [4, 6 ,9, 10]
const num = numeros.includes(2)

if(num){
    console.log('si incluye el numero')
}else{
    console.log('no incluye el numero')
}

const result = [
    'la matrix',
    'rapidos y furiosos',
    'rapidos y furiosos reto tokio',
    'lo que el viento se llevo',
    'Iron Man'
]

result.forEach(pelicula => console.log(pelicula.padStart(40, ' ')))

const Espacios = function(longitud){
    result.forEach(pelicula => console.log(pelicula.padEnd(40, '    ')))
} 

//result.forEach(pelicula => console.log(pelicula.padEnd(espacios(cantidad), ' ') + '|'))
