//El método map() itera sobre los elementos de un array en el orden de inserción y devuelve array nuevo con los elementos modificados.
//Ejercicio pasar la altura de la personas de metros a centimetros.

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

/*const pasarAlturaACentimetros = persona =>{
    //persona.altura * 100
    //persona.altura *= 100
    //de la manera anterior modificamos el array personas, para no cambiarlo
    //retornamos un nuevo objeto solo cvon la altura modificada asi:
    return {
        ...persona,
        altura: persona.altura * 100
    } 
}*/


//Para hacer la funcion un poco mas prolijo:
//Como vamos a devolver un objeto debemos poner parentesis envolviendolo:
const pasarAlturaACentimetros = persona =>({
    ...persona,
    altura: persona.altura * 100
})


var personasCms = personas.map(pasarAlturaACentimetros)
console.log(personasCms)
console.log(personas)

//son objetos totalmente distintos.
console.log(personas[0] === personasCms[0])
