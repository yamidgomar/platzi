/*
Las clases en JavaScript son introducidas en el ECMASCRIPT 2015

Aquí hay que resaltar que por más que se ponga la palabra class por detrás de todo esto siempre se tratará de prototipos

En este ejemplo se creará la clase y en la misma irá el constructor, lo que anteriormente estaba en una función personas va de la siguiente manera
*/

class Persona{
    constructor(nombre, apellido, altura) {
          this.nombre = nombre;
          this.apellido = apellido;
          this.altura = altura; 
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    }
    
}

/* Luego se crea la clase Desarrollador que va a heredar de la principal Persona, en este caso se utilizará la palabra extends

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;         
    }
    
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    } 
}

Sin embargo aquí nos generará un error y es que para heredar de forma correcta se debe utilizar la palabra super quedando así
*/

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar() {      
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}
var sacha = new Persona("Sacha", "Licksyp", 1.80)
var yago = new Desarrollador("yamid", "gonzalez", 1.85)
sacha.saludar()
yago.saludar()

/*No es necesario agregar el constructor a la clase Desarrollador para utilizar el constructor de la clase Persona, el constructor de la clase Persona también se hereda y puedes ejecutar sus atributos en la clase Desarrollador como si estuvieras en la clase Persona.
 *
 * EJEMPLO:
 
class Desarrollador extends Persona{
    saludar(){
        console.log(`Me llamo ${this.nombre} ${this.apellido}, mido ${this.altura}, y soy Desarrollador`)
    }
}

Otro ejemplo mas agregando edad y si es alto:

class Desarrollador extends Persona{
    constructor(nombre,apellido,altura, edad){
        super(nombre, apellido, altura)
        this.edad = edad
        this.alto = function(){
            return this.altura > 1.82?"soy alto":"soy bajo"
        }
    }

    saludar(){
        console.log(`Me llamo ${this.nombre} ${this.apellido}, tengo ${this.edad} años , mido ${this.altura} , por lo tanto ${this.alto} y soy Desarrollador`)
    }
}
var sacha = new Persona("Sacha", "Licksyp", 1.80)
var yago = new Desarrollador("yamid", "gonzalez", 1.85, 34)
sacha.saludar()
yago.saludar()
*/
