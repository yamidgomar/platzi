var sacha = {
            nombre: 'Sacha',
            apellido: 'Lifszyc',
            altura: 1.72
        
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

var personas = [sacha, alan, martin, dario, vicky, paula]

function imprime(persona){
    console.log(persona)
}

imprime(personas[0])
imprime(personas[personas.length -1])
imprime(personas[1].nombre)
imprime(personas[1]['apellido'])

for(let i = 0; i < personas.length; i++){
    var persona = personas[i];
    console.log(`La estatura de ${persona.nombre} es ${persona.altura}`)
}
