const API_URL = "https://swapi.dev/api/"
const PEOPLE_URL = "people/:id"

const optcs = {crossDomain:true}

function onResponse(id, callback){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, optcs, function(people){
        console.log(people.name)
        if(callback){
            callback()
        }
    })

    
}

onResponse(1, function(){
    onResponse(2, function(){
        onResponse(3, function(){
            onResponse(4, function(){
                onResponse(5)
            })
        })
    })
})

