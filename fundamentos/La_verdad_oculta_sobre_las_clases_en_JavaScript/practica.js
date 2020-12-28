function Automovil(color, marca){
    this.color = color
    this.marca = marca    
}

Automovil.prototype.abrirCajuela = function(){
   return "detras" 
}

Automovil.prototype.mensaje = function(){
    console.log(`Soy un ${this.marca} color ${this.color} y mi cajuela esta ${this.abrirCajuela()}`)
}

function Vocho(color, marca){
    this.color = color
    this.marca = marca
}

function heredaDe(hijo,padre){
    var fn = function(){}
    fn.prototype = padre.prototype
    hijo.prototype = new fn
    hijo.prototype.constructor = hijo
}

heredaDe(Vocho, Automovil)

Vocho.prototype.abrirCajuela = function(){
   return "delante" 
}

var fiesta = new Automovil('Blanco', 'Mazda')
var herbie = new Vocho('Negro', 'Volskvagen')

console.log(fiesta.mensaje())

console.log(herbie.mensaje())
