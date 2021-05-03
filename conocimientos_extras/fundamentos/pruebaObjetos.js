var sacha = {
    nombre:"sacha",
    apellido:'Linsyck',
    edad:28
}

var yago = {
    nombre:"yago",
    apellido:'Martinez',
    edad:30
}

function imprimirNombreEnMayuscula(persona){
    //var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad({nombre, apellido, edad}){
    //var {nombre, apellido, edad} = persona;
    console.log(`Hola me llamo ${nombre} ${apellido} y tengo ${edad} años.`)
}

imprimirNombreEnMayuscula(yago)
imprimirNombreEnMayuscula({nombre:'yamid'})
imprimirNombreYEdad(yago)
imprimirNombreYEdad(sacha)

function cumpleanos(persona){
    //persona.edad += 1
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

console.log(yago)
console.log(cumpleanos(yago))
