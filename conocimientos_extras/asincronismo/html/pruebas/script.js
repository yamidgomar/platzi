const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id/'
const opcs =  {crossDomain:true}

const obtenerPersonaje = function(id, callback){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL,opcs, function(data){
        console.log(`Hola me llamo ${data.name}`)
        if(callback){
            callback()
        }
    })
}

obtenerPersonaje(1,function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5, function(){
                    obtenerPersonaje(6)
                })
            })
        })
})
})
