var sacha = {
            nombre: 'Sacha',
            cantidadDeLibros: 111
        
}
var alan = {
            nombre: 'Alan',
            cantidadDeLibros: 78
        
}
var martin = {
            nombre: 'Martin',
            cantidadDeLibros: 132
        
}
var dario = {
            nombre: 'Dario',
            cantidadDeLibros: 90
        
}
var vicky = {
            nombre: 'Vicky',
            cantidadDeLibros: 91
        
}
var paula = {
            nombre: 'Paula',
            cantidadDeLibros: 182
        
}

var personas = [sacha, alan, martin, dario, vicky, paula]

//Con el ciclo for:

/*var acum = 0;

for(let i = 0; i < personas.length; i++){
    acum = acum + personas[i].cantidadDeLibros
}

*/ 

// con el metodo reduce:

const cuentaLibros = (acum, persona) => acum + persona.cantidadDeLibros

var totalDeLibros = personas.reduce(cuentaLibros, 0)

console.log(`La cantidad total de libros es ${totalDeLibros}`)
