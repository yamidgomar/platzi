var contador = 0;

var llovia = () => Math.random() < 0.25;

do{
    contador++
}while(!llovia())

var devuelve = () => contador ===1?'vez':'veces'

console.log(`estaba lloviendo ${contador} ${devuelve()}`)



