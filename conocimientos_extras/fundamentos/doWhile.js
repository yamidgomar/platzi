//A diferencia de while, do while se ejecuta al menos una vez antes de se ejecute
//la exopresion condicional.
var contador = 0;

const llueve = () => Math.random() < 0.25

do{
    contador++
}while(!llueve())

console.log(`Fui a ver si llueve ${contador} ${contador === 1?'ves':'veces'}`)
