/*El prototipo es un objeto más de JS , a partir de que lo modifiquemos, éste va a quedar modificado.

    Es de mucha importancia donde colocamos las funciones que va a tener el prototipo . Estos se deben de colocar juntos, ya que con ellos se va creando el prototipo del objeto, y deseamos que tenga juntas todas sus funciones.

    Por ello definimos los prototipos arriba, y los utilizamos a lo largo del código.

    NOTA: Cuando tenemos un error en JS, éste no se sigue ejecutando, se corta ahí la ejecución del código.*/

function persona(nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

persona.prototype.saludar = function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}.`)
    
}

persona.prototype.esmayor = function(){
    return this.edad >= 18
}

var sacha = new persona("sacha", "lipsys", 24)
var erika = new persona("erika", "gomez", 13)

console.log(erika.esmayor())
console.log(sacha.esmayor())
