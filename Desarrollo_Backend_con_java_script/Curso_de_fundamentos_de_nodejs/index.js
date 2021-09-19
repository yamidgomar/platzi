/*

## Variables de entorno:
En lugar de definir la variable podemos adceder a nuestro proceso
 - Buena practica: Utilizar las variables de entorno en mayuscula.
let nombre = process.env.NOMBRE 
let web = process.env.MI_WEB || 'http://localhost:8080/'

console.log('Hola ' + nombre)
console.log('Bienvenidos a mi web: ' + web)
_----------------------------

function soyAsincrona(micallback){
    setTimeout(function(){
        console.log('Estoy siendo asincrona')
        micallback()
    }, 1000)
}

console.log('Iniciando proceso')
soyAsincrona(function(){
    console.log('terminando procesos')
})

## Callback
function hola(nombre, micallback){
    setTimeout(function(){
        console.log('Hola ' + nombre)
        micallback()
    }, 1500)
}

function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ' + nombre)
        otroCallback()
    }, 1000)
}
console.log('Iniciando proceso')
hola('Carlos', function(){
    adios('Carlos', function(){
        console.log('terminando procesos')
    })
})

-------asincronico

hola('Carlos', function(){})
adios('Carlos', function(){})

## Callback hell:refactorizar o sufrir.


## Buffers:


//let buffer = Buffer.alloc(4)
//informacion que voy guardando automaticamente en el buffer.
//let buffer = Buffer.from([1,2,5])
let buffer = Buffer.from('hola')
// │<Buffer 68 6f 6c 61>  traduccion de hola a datos binarios hexagecimal.
console.log(buffer.toString())


Que nod permite trabajar con buffers?

nos permite trabajar con el dato en la version mas cruda que hay, quien envia datos sabe que tipos son y quien lo recibe tambien.

Ejemplo abecedario
*/

let abc = Buffer.alloc(26)

for(let i = 0; i < 26;i++){
    abc[i] = i + 97  //97 letra a decimalmente
}

console.log(abc.toString())
