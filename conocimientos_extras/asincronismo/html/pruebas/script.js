const API_URL = 'https://jsonplaceholder.typicode.com/'
const USER_URL = 'users/:id'

const opcs = {crossDomain:true}

const obtenerPersonaje = (id, callback) => {
    const URL = `${API_URL}${USER_URL.replace(':id', id)}`
    $.get(URL, opcs, callback).fail(function(){
        console.log(`EROOOOOOOOOOOOOOOOOOOOORrrrrrrrrrrrrrrrrrrr No de pudo obtener el personaje ${id}`)
    })
}

obtenerPersonaje(1, function(personaje){
    console.log(personaje.name)
    
    obtenerPersonaje(2, function(personaje){
        console.log(personaje.name)

        obtenerPersonaje(3, function(personaje){
            console.log(personaje.name)
        })
    })
})

