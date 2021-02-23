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
*/

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
