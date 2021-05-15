var sacha = {
            nombre: 'Sacha',
            apellido: 'Lifszyc',
            altura: 1.72,        
            sexo:'m',
            cantidadDeLibros:111 
}

var alan = {
            nombre: 'Alan',
            apellido: 'Perez',
            altura: 1.86,
            sexo:'m',
            cantidadDeLibros:78
}

var martin = {
            nombre: 'Martin',
            apellido: 'Gomez',
            altura: 1.85,
            sexo:'m',
            cantidadDeLibros:132
        
}

var dario = {
            nombre: 'Dario',
            apellido: 'Juarez',
            altura: 1.71,
            sexo:'m',
            cantidadDeLibros:90
}

var vicky = {
            nombre: 'Vicky',
            apellido: 'Zapata',
            altura: 1.56,
            sexo:'f',
            cantidadDeLibros:91
}

var paula = {
            nombre: 'Paula',
            apellido: 'Barros',
            sexo:'f',
            altura: 1.76,
            cantidadDeLibros:182        
}

var personas = [sacha, alan, martin, dario, vicky, paula]

const sexo = 'f'
const clasifican = personas.filter(persona => persona.sexo === sexo)

const reducer = (acum, persona) => acum = acum + persona.cantidadDeLibros
const conteoClasificados = clasifican.reduce(reducer, 0)

console.log(conteoClasificados)

