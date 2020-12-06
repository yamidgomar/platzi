var sacha = {
        nombre: 'Sacha',
        apellido: 'Lifszyc',
        altura: 1.92
    
}

var alan = {
        nombre: 'Alan',
        apellido: 'Perez',
        altura: 1.86
    
}

var martin = {
        nombre: 'Martin',
        apellido: 'Gomez',
        altura: 1.85
    
}

var dario = {
        nombre: 'Dario',
        apellido: 'Juarez',
        altura: 1.71
    
}

var vicky = {
        nombre: 'Vicky',
        apellido: 'Zapata',
        altura: 1.56
    
}

var paula = {
        nombre: 'Paula',
        apellido: 'Barros',
        altura: 1.76
    
}

//filter nos devuelve un Array nuevo.
//No modifica al original.


var personas = [sacha, alan, martin, dario, vicky, paula]

//var esAlta = persona => persona.altura > 1.8
const esAlta = ({altura}) => altura > 1.8;
const esBajo = ({altura}) => altura < 1.8;
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBajo)
/*var personasAltas = personas.filter(function(persona){
    return persona.altura > 1.8;
})*/

console.log(personasBajas)
console.log(personasAltas)

