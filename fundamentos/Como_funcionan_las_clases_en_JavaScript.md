Este es el prototipo.
    function persona(nombre, apellido, edad){
        //Para guardar los parametros del objeto que se esta contruyendo
        //podemos hacer referencia a ese objeto con la palabra this. 
        //this.nombre es un atributo del  obj. que se esta creando,
        //nombre es la variable nombre que recibimos por parametro.
        
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.marori = () => this.edad >= 18?`Soy mayor de edad y tengo ${this.edad}`:`Soy menor de edad y tengo ${this.edad}`
}

    const mayor = persona.prototype.mayoria = function(){
        return this.edad > 18?`Es mayor de edad, tiene ${this.edad}`:`Lo siento es menor de edad, tiene ${this.edad}`
    }

    persona.prototype.saludar = function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}, ${this.marori()}.`)
    }

    var sacha = new persona("sacha", "lipsys", 24)
    var erika = new persona("erika", "gomez", 13)
    // new es una palabra reservada, se usa para crear nuevos objetos
    // dado un prototipo. Podemos pasarle parametros a nuestro prototipo o constructor

    console.log(sacha)
    console.log(erika)
    //persona { nombre: 'sacha', apellido: 'lipsys'  }

    sacha.saludar();
    erika.saludar();
