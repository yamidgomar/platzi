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

/*const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'

// Manejo de errores con callbacks:
//Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().
function obtenerPersonaje(id, callback){
    //Si queremos garantizar ese orden debem
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}` 
    $.get(url, {crossDomain:true}, callback).fail(function(){
            console.log(`!!!!!!!!!!!! ERROR No se pudo encontrar el personahe numero ${id}`)
    })
}

obtenerPersonaje(1, function(persona){
        console.log(`Hola yo soy ${persona.name}`)

        obtenerPersonaje(2, function(persona){
            console.log(`Hola yo soy ${persona.name}`)

            obtenerPersonaje(3, function(persona){
                console.log(`Hola yo soy ${persona.name}`)

                obtenerPersonaje(4, function(persona){
                    console.log(`Hola yo soy ${persona.name}`)

                    obtenerPersonaje(5, function(persona){
                        console.log(`Hola yo soy ${persona.name}`)
                    })
                })
            })
        })
})


//MANEJANDO ERRORES CON CALLBACKS.

const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id" 

const opcs = {crossDomain:true}

function onPeopleReponse(id, callback){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(URL, opcs, callback).fail(() => {console.log(`!Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrr no se puede mostrar el id ${id}`)})
}

onPeopleReponse(1, function(data){
    console.log(data.name)
    onPeopleReponse(2, function(data){
        console.log(data.name)
        onPeopleReponse(3, function(data){
            console.log(data.name)
            onPeopleReponse(4, function(data){
                console.log(data.name)
                onPeopleReponse(5, function(data){
                    console.log(data.name)
                })
            })
        })
    })
})



//===================  PROMESAS ======================\\


Con los callBacks teníamos un problema al anidarlos. Para este problema existen las ‘promesas’.
Tenemos que pensar las promesas como valores que aún no conocemos. Es la promesa de que ahí va a haber un valor cuando una acción asíncrona suceda y se devuelva.

Las promesas tienen 3 estados y son como cualquier otro objeto de javascript.

El primero de los estados es ‘pending’. Es el estado cuando las creamos. Si se resuelve exitosamente pasa al estado ‘fulfilled’. Si ocurre algún error y no se resuelve pasa al estado de ‘rejected’.

Las promesas pueden no ser asíncronas también.

Para obtener el valor de la resolución de la promesa llamamos a la función _.then(val =>) _a la que le vamos a pasar como parámetro otra función en la que      el primer parámetro será el valor que esperábamos.

Si sucede algún error agregamos el método .catch(err=>) al que se le asigna una función también como parámetro que va a recibir el error.

Las promesas se declaran de la siguiente manera:

    new Promise( function( resolve, reject  ) {
            ...         
    } ).then( valor => {
            ...
    } ).catch( err => {
            ... 
    } )

Se crea el nuevo objeto y se le asigna una función con dos parámetros ‘resolve’ y ‘reject’. Estas son dos funciones que debemos llamar si la promesa se resuelve o no. Si se resuelve exitosamente llamamos a ‘.then(valor =>’ para obtener el valor del promise dentro del arrow function (valor=>). Si sucede algún error podemos llamar al ‘.catch( err =>’ para obtener el tipo de error que sucedió y actuar en consecuencia. ))

Otra cosa más a cerca de las promesas es que luego de llegar al estado de 'fulfilled’ podemos retornar otra promesa dentro del .then y de esa manera ir encadenándolas en sucesivas acciones asíncronas. Cada una de ellas puede ser resuelta o rechazada en una nueva promesa que terminará en el estado de ‘fulfilled’.'

Entonces en nuestro código borramos las invocaciones anidadas y volvemos a modificar obtenerPersonaje().

function obtenerPersonaje() ya no recibirá un callback, directamente va a retornar una promesa.

    function obtenerPersonaje(id) {
            return new Promise( function(resolve, reject){ 
                        ...                            
            } )
    }


Como arrow function:

    function obtenerPersonaje(id) {
            return new Promise((resolve, reject) => { 
                        ...  //Aquí dentro se genera el llamado asíncrono   ...                  
            })            
    }

Dentro de esta función se va a generar el llamado asíncrono. Devolvemos la generación de url y el $.get con el parámetro ‘callback’ reemplazado por una nueva función a modo de callback que se va a ejecutar recién cuando el get haya sido exitoso resolviendo la promesa. Por lo que le pasamos el parámetro ‘data’, a través del cual van a llegar los valores de nuestro personaje, y dentro de la función invocamos, a su vez, a la función resolve. También vamos a vover a insertar el método .fail() invocando el parámetro/función ‘reject’ con parámetro ‘id’.

    function obtenerPersonaje(id) {
        return new Promise((resolve, reject) => {
            const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
            $.
                get(url, opts, function(data){
                    resolve(data)
                })
                .fail(() => reject(id))                                                            
            })
    }

La función se invocaría entonces solamente con el parámetro id.
    obtenerPersonaje(id)

La forma de obtener el valor es llamando al .then() con su respectiva función como parámetro que va a estar trayendo a nuestro personaje a través del parámetro ‘data’ que está en la función invocada en los parámetros del .get si este es exitoso.

    obtenerPersonaje(1)
        .then(function(personaje){
            console.log(personaje.name)
        })

Y si sucede algún error en nuestro callback lo vamos a obtener con el método .catch() que va a recibir el id que viene a través del .fail() de la función.

    function onError(id){
        console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)        
    }

    obtenerPersonaje(1)
        .then(function(personaje){
            console.log(personaje.name)                            
        })
        .catch(function(id){
            onError(id)
        })


O directamente invocamos la función desde el parámetro del .catch:

    function onError(id){
        console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)     
    }

    obtenerPersonaje(1)
            .then(function(personaje){
                console.log(personaje.name)
            })
            .catch(onError)


======================= Codigo final completo ======================

const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const opts = { crossDomain: true }

function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        consturl = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
            .get(url, opts, function(data){
                resolve(data)
            })

            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`ERORRRRRRR!!!!!!!!!!! No se pudo obtener el personaje con id = ${id}.`)
}

obtenerPersonaje(1)
    .then(function(personaje){
        console.log(personaje.name)
    })
    .catch(onError)


// =================== Promesas encadenadas ==================== \\

Encadenar promesas es mucho más limpio que con el método anterior. Primero escribimos la invocación de la promesa con un arrow function:

    obtenerPersonaje(1)
        .then( personaje => {
            console.log(personaje.name)                
        })
        .catch(onError)


Al resolver esta promesa vamos a retornar otra promesa invocando dentro del .then nuevamente la función obtenerPersona() con el id del siguiente personaje:

    obtenerPersonaje(1)
        .then( personaje => {
            console.log(personaje.name)
            return obtenerPersona(2)
        })
        .catch(onError)

Y para obtener los valores de esta promesa encadenamos otro .then y copiamos la función parámetro cambiando el valor del id.

    
        obtenerPersonaje(1)
            .then( personaje1 => {
                console.log(personaje1.name)
                return obtenerPersona(2)                        
            })
            .then( personaje2 => {
                console.log(personaje2.name)
                return obtenerPersona(3)                                
            })
            .then( personaje3 => {
                console.log(personaje3.name)                                                                    
                return obtenerPersona(4)                                        
            })
            .
            .
            .
            .catch(onError)

// ========================  Codigo completo ================ \\

const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id" 

const opcs = {crossDomain:true}

function onPeopleReponse(id){
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $.get(URL, opcs,function(data){
            resolve(data)
        })
        .fail(() => reject(id) )
    })
}

const onError = function(id){
    console.log(`ERRORRRRRRRR no se encontro el id ${id}`)
}

onPeopleReponse(1)
    .then(function(personaje){
        console.log(personaje.name)
        return onPeopleReponse(2)
    })
    .then(function(personaje2){
        console.log(personaje2.name)
        return onPeopleReponse(3)
    })
    .then(function(personaje3){
        console.log(personaje3.name)
        return onPeopleReponse(4)
    })
    .then(function(personaje4){
        console.log(personaje4.name)
        return onPeopleReponse(5)
    })
    .catch(onError)

// ============================== Múltiples promesas en paralelo  =============================== \\

const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id" 

const opcs = {crossDomain:true}

function onPeopleReponse(id){
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $.get(URL, opcs,function(data){
            resolve(data)
        })
        .fail(() => reject(id) )
    })
}

const onError = function(id){
    console.log(`ERRORRRRRRRR no se encontro el id ${id}`)
}

const ids = [];

for(let i = 0; i < 10;i++){
    ids.push(i + 1)
}


var promesas = ids.map(id => onPeopleReponse(id))

Promise.all(promesas)
    .then( 
        personajes => console.table(personajes) 
        personajes => {
            for(var i = 0; i < personajes.length; i++){
                console.log(personajes[i].name)
            }
        }
    )
    .catch(onError)

*/

const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id/"
const opcs = {crossDomain:true}

function obtenerPersonaje(id, callback){
    const URL =`${API_URL}${PEOPLE_URL.replace(':id', id)}` 
    $.get(URL, opcs,callback ).fail(() => console.log(`Errorrrrrrrrrrrrrrrrrrrrrrrrrrrrr`}))
}

obtenerPersonaje(1, function(data){
    console.log(data.name)
    obtenerPersonaje(2, function(data){
        console.log(data.name)
            obtenerPersonaje(3, function(data){
            console.log(data.name)
                obtenerPersonaje(4, function(data){
                console.log(data.name)
            })
        })
    })
})
