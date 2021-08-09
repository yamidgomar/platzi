let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const url = `https://rickandmortyapi.com/api/character/`

function fechData(api_url, callback){
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', api_url, true) // tru por defecto esta abierto.

    xhttp.onreadystatechange = function(event){// event no siempre se utiliza pero es buena practica.
        if(this.readyState == 4){
            if(this.status == 200){
                callback(null, JSON.parse(this.responseText))  // El primer valor por estandar del callback es el error, el segundo el informacion  que se desencadena. como el resultado es en texto lo parseamos a json para poder acceder e iterar en el.
                //buena practica pasarle un error con else.
            }else{
                const error = new Error('error' + api_url) //forma correcta de pasar un error y ni pasarle solamente un string.
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}

fechData(url, function(error1, data1){
    if(error1) return console.log(error1)
    fechData(url + data1.results[0].id, function(error2, data2){
        if(error2) return console.log(error2)
        fechData(data2.origin.url, function(error3, data3){
            if(error3) return console.log(error3)
            console.log(data1.info.count)
            console.log(data2.name)
            console.log(data3.dimension)
        })
    })
})
