/*
const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

// crossdomain indicamos que la peticion es a otra pagina no local.
const luke = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
//Un callback es una funcion que se ejecutara en algun futuro, no sabemos cuando se va a ejecutar.

//    console.log(arguments) //para ver los parametros o argumentos(todas las funciones tienen argumentos), data en posicion 0.
const onPeopleReponse = function(persona){
    console.log(`Hola yo soy ${persona.name}`) // persona es igual a lukey a  data
}


$.get(luke, {crossDomain:true}, onPeopleReponse)


// Haciendo multiples request

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

const onPeopleReponse = function(persona){
    console.log(`Hola yo soy ${persona.name}`)
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` 
    $.get(url, {crossDomain:true}, onPeopleReponse)
}

//Asincronismo de javascript:basicamente no sabemos el orden en el que nos llegaran las respuestas.

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)


//Manejando el orden y el Asincronismo en JavaScript.

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'


function obtenerPersonaje(id, callback){
    //Si queremos garantizar ese orden debem
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` 
    $.get(url, {crossDomain:true}, function(persona){
        console.log(`Hola yo soy ${persona.name}`)
        if(callback){
            callback()
        }
    })
}

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5)
            })
        })
    })
})
*/

const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

// Manejo de errores con callbacks:
//Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().
function obtenerPersonaje(id, callback){
    //Si queremos garantizar ese orden debem
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` 
    $.get(url, {crossDomain:true}, function(persona){
        console.log(`Hola yo soy ${persona.name}`)
        if(callback){
            callback()
        }
    })
}

obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5)
            })
        })
    })
})

