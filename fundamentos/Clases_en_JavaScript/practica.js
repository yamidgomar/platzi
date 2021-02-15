/*class Persona{
    constructor(nombre, apellido , edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    saludar(){
        console.log(`Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    }
}

class Desarrollador extends Persona{
    constructor(nombre,apellido,edad,altura){
        super(nombre,apellido,edad)
        this.altura = altura
        this.mayoria = function(){
            return this.edad >= 18?"mayor de edad":"menor de edad"
        }
    }
    saludar(){
        console.log(`Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años, por lo tanto soy ${this.mayoria()} y mido ${this.altura}mts`)
    }
}
var sacha = new Persona("sacha", "linsyck", 15)
var yamid = new Desarrollador("yamid", "gonzalez", 34, 1.80)
sacha.saludar()
yamid.saludar()
*/

class Automovil{
    constructor(color, marca){
        this.color = color
        this.marca = marca
        //this.abrirCajuela = () => "detras"
    }
    
    abrirCajuela(){
        return "detras"
    }

    mensaje(){
        console.log(`Soy un vehivulo marca ${this.marca} y mi color es ${this.color} y mi cajuela esta ${this.abrirCajuela()}`)
    }
}

class Vocho extends Automovil{
    constructor(color,marca,velocidad){
        super(color, marca)
        this.velocidad = velocidad
        //this.abrirCajuela = () => "delante"
        this.rapido = () => this.velocidad >= 181?"soy rapido":"soy lento"
    }

    abrirCajuela(){
        return "delante"
    }

    mensaje(){
        console.log(`Soy un vehiculo marca ${this.marca}, mi color es ${this.color}, mi velocidad es de ${this.velocidad}kh (${this.rapido()})y mi cajuela esta ${this.abrirCajuela()}`)
    }
}

var fiesta = new Automovil("Blanco", "Mazda")
var herbie = new Vocho("Negro", "Volvaguen", 181)  
fiesta.mensaje()
herbie.mensaje()
