function heredade(prototypePadre, prototypeHijo){
    var fn = function(){}
    fn.prototype = prototypePadre.prototype
    prototypeHijo.prototype = new fn()
    prototypeHijo.prototype.constructor = prototypeHijo
}

function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    console.log(`Hola ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function(){
    return this.altura > 1.80
}

function Desarrollador(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

heredade(Persona, Desarrollador)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y soy desarrollador.`)
}


var yago = new Persona("yago", "martinez", 1.85) 
yago.saludar()
console.log(yago.soyAlto())

var yamid = new Desarrollador("yamid", "gonzalez", 1.90)
yamid.saludar()
console.log(yamid.soyAlto())
