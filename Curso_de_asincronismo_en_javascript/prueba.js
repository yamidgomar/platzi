/*function suma(num1, num2){
    return num1 + num2
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}
function resta(num1, num2){
    return num1 - num2
}
console.log(calc(9,9, suma))
console.log(calc(6,2, resta))
*/

/*function date(callback){
    console.log(new Date)
    setTimeout(function(){
        let date = new Date
        callback(date)
    }, 3000)
}
function dateNow(dateNew){
    console.log(dateNew)
}
date(dateNow)

function date(callback){
    console.log(new Date)
    setTimeout(function(){
        let date = new Date
        callback(date)
    }, 8000)
}

function dateNow(dateNew){
    console.log(dateNew)
}

date(dateNow)

*/

var xmlHttpRequest = require('xmlhttprequest').XMLHttpRequest
let API = 'https://rickandmortyapi.com/api/character'
function fechData(url_api, callback){
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', url_api, true)
    xhttp.onreadystatechange = function(event){
        if(xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText))
            }else{
                const error = new Error('Error' + url_api)
                return callback(error, null)
            }
        }
    }
    xhttp.send()
}
