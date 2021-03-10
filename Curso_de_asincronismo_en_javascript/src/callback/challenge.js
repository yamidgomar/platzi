//1)
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
let URL_API = 'https://rickandmortyapi.com/api/character/'


function fetchData(URL_API, callback){
    //2)
    let xhttp = new XMLHttpRequest()
    //3)
    xhttp.open('GET', URL_API, true)
    //4)
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            //5)
            if(xhttp.status === 200){
              //6) 
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error' + URL_API)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}

//7
fetchData(URL_API, function(error1, data1){
    if(error1) return console.error(error1)
    fetchData(URL_API + data1.results[0].id, function(error2, data2){
        if(error2) return console.error(error2)
        fetchData(data2.origin.url, function(error3, data3){
            if(error3) return console.error(error3)
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension)

            //Rutas 
             console.log(URL_API);
             console.log(URL_API + data1.results[0].id); 
             console.log(data2.origin.url);
        })
    })
})

//1) XMLHttpRequest es el valor o propiedad que hacemos para hacer llamados a una api
//intanciamos

//2) generar la referencia al objeto que necesito

//3) El primer referente hacer el llamado a una url.
    //con XMLHttpRequest.open('GET', URL_API, true). GET es la peticion que queremos hacer, la URL_API es la url, al final que se maneje de forma asincrona true.

//4) ya que tengo esta apertura hay que generar o escuchar lo que va ha hacer esa conexion.
    //el evento no siempre lo vamos a usar es buena practica.
    //evaluamos o validamos el estado, hay 5 estados, esre es el 5 readyState. los estados se cuantan desde el 0 al 4.

//5) evaluamos el status de la peticion, se completo pero no sabemos el status.

//6) Dentro de nodejs normalmente el callback el primer valor es el error y el segundo es la informacion que se desencadema. 

//7) dentro de fetchdata recibe la URL_API y una funcion que toma el error y el data.
//como hacemos multiples llamados hay varios errores y varias datas o rasultados.
//hacemos una validacion por lo que manejamos errores.
// en dado caso que no halla error uzamos fetchdata nuevamente le pasamos a url_api y usamos el resultado results y al arreglo que recibimos voy sobre el valor 0 que es el primer personaje y obtenemos el id; como esta estructurada nuestra funcion estructuramos una nueva funcion tengo que estructurar una nueva funcion recibe error2 data 2, validamos y usamos nuevamente fetchdata para traer el origen de nuestro personaje, establecemos nuevamente la funcion recibe error3 data3, validamos e imprimimos la informacion.
