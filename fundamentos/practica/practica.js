class Persona{
    constructor(nombre, apellido, edad, esMayor){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.esMenor = () => this.edad < 18
    }

    saludar(fn){
        var {nombre, apellido, edad, esMenor} = this
        console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`)
        if(fn){
            fn(nombre, apellido, esMenor())
        }
    }
}

function devolverSaludo(nombre, apellido, esMenor){
    console.log(`Hola ${nombre} ${apellido}`)
    if(esMenor){
        console.log(`Ha no sabia que eras menor de edad`)
    }
}

var yamid = new Persona("Yamid", "Gonzalez", 34)
var yago = new Persona("Yago", "Martinez", 17)

yamid.saludar(devolverSaludo)
yago.saludar(devolverSaludo)
