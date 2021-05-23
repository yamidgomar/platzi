function responder(nombre, apellido, isdev){
    console.log(`Bienvenido ${nombre} ${apellido}`)
    if(isdev){
        console.log(`Vaya no sabia que eras dev!`)
    }
}

class Persona{
    constructor(nombre, apellido, estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.estatura = estatura
    }
    
    esAlt(estatura){
        return (estatura >= 1.80)?'alto':'bajo';
    }

    saludar(){
        var {nombre, apellido, estatura, esAlt} = this
        console.log(`Hola ${nombre} ${apellido} mides ${estatura}, eres ${esAlt(estatura)}`)
    }

    
}

class Copia extends Persona{
    constructor(nombre, apellido, estatura){
        super(nombre, apellido, estatura)
    }

    saludar(fn){
        var {nombre, apellido, estatura} = this
        console.log(`Hola soy  ${nombre} ${apellido} y soy dev.`)
        if(fn){
            fn(nombre, apellido, false)
        }
    }
}

var yamid = new Persona('Yamid', 'Gonzalez', 1.80)
yamid.saludar()
var yago = new Copia('yago', 'martinez', 1.70)
yago.saludar(responder)
