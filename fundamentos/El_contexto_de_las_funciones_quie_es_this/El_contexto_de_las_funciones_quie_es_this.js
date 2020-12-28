/*El contexto de las funciones quien es this.

Window es el objeto global dentro del navegador.
Cuando this no es lo que esperamos, este es el principal error en JS.
En las Arrow functions, se asigna la función , pero cambia el this dentro de la función , ya que trata de tomar el this global, es decir, el que está fuera de la Arrow function.
Para comprobarlo en consola:
this === window


function dev(){
    console.log(this)
}

dev()


Las arrow functions tienen el método .bin() implicitamente y el método .bind() devuelve un nuevo objeto con this haciendo referencia al objeto global(objeto window).

Persona.prototype.soyAlto = () => this.altura > 1.8

Es lo mismo de:

Persona.prototype.soyAlto = (function () {
    return this.altura > 1.8
    
}).bind(this)



Pasa que cuando hacemos referencia a “this” en una arrow function, estamos haciendo una referencia a un componente global. Es decir, si definimos una variable altura en un contexto global, la arrow function apuntara a ella.
El el siguiente ejemplo, da verdadero.

function Persona(nombre, apellido, estatura){
  this.nombre = nombre
      this.apellido = apellido
      this.estatura = estatura
    
}

var altura = 2.5
Persona.prototype.esAlta = () => {
      return this.altura > 1.8
    
}

var carlos = new Persona('Carlos', 'Orellana', 1.82)

//Esto retorna true
carlos.esAlta()
*/


