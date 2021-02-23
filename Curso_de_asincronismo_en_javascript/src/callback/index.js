//CALNLBACK: funcion que recibe como argumento otra funcion.
function sum(num1, num2){
    return num1 + num2
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calc(6,2,sum))

function date(callback){
    console.log(new Date)
    setTimeout(function(){
        let date = new Date
        callback(date)
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}

date(printDate)


// RETO:
//Consumir una api, hacer una peticion de los elementos que tiene esta api, cinsultar su primer personaje y kuego la dimensiin a la que pertenece.

//Instalar XmlHttpRequest es un objeto que nos permite realizar una peticion a algun servicio en la nube, en este caso una api pero tambien a una url, ftp o con archivos
// npm install xmlhttprequest --save

