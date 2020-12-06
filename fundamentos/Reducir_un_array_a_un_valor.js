//El método reduce() nos permite reducir, mediante una función que se aplica a cada uno de los elemento del array, 
//todos los elementos de dicho array, a un valor único.

var sacha = {
        nombre: 'Sacha',
        apellido: 'Lifszyc',
        altura: 1.72,
        cantidadDeLibros: 111
    
}

var alan = {
        nombre: 'Alan',
        apellido: 'Perez',
        altura: 1.86,
        cantidadDeLibros: 78
    
}

var martin = {
        nombre: 'Martin',
        apellido: 'Gomez',
        altura: 1.85,
        cantidadDeLibros: 132
    
}

var dario = {
        nombre: 'Dario',
        apellido: 'Juarez',
        altura: 1.71,
        cantidadDeLibros: 90
    
}

var vicky = {
        nombre: 'Vicky',
        apellido: 'Zapata',
        altura: 1.56,
        cantidadDeLibros: 91
    
}

var paula = {
        nombre: 'Paula',
        apellido: 'Barros',
        altura: 1.76,
        cantidadDeLibros: 182
    
}

//Sacar la cuenta de cuantos libros hay en total:
//Podriamos utilizar un ciclo for y un acumulador.
var personas = [sacha, alan, martin, dario, vicky, paula]
/*var acum = 0;

for(var i = 0;i < personas.length; i++){
    acum = acum + personas[i].cantidadDeLibros;
}


console.log(`La cantidad de libros que hay es ${acum}, en total.`)
*/
//Utilizando una forma mas prolija con el reduce() metodo:
//reducir el array de personas a un valor.
//Para ello llamamos a reduce inecesitamos una funcion y el valor inicial del acumulador. que en este caso es 0.

/*La** Función Reduce**, reduce un array a un valor único.
 *
 * Para reducir ** un array se necesitan 2 cosas: Una función y el valor original / valor inicial del acumulador**.
 *
 * La función va pasando el valor acumulado por cada elemento del array.*/
/*
const reducer =(acum, persona) => {
    return acum + persona.cantidadDeLibros
}
*/
//const reducer =(acum, persona) => acum + persona.cantidadDeLibros
const reducer =(acum,{ cantidadDeLibros}) => 
    acum + cantidadDeLibros
var totalDeLibros = personas.reduce(reducer, 0)

//La anterior funcion podemos hacerla mas prolija:

console.log(`La cantidad de libros que hay es ${totalDeLibros}, en total.`)

//Un articulo de Developer Mozilla sobre reduce:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

