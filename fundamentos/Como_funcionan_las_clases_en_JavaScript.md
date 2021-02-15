## 23 - Como funcionan las clases en JavaScript

En JavaScript hablar de _objetos_ es más bien referirse a _**Prototipos**_ y no tanto a _clases_. Si bien en las nuevas versiones de JavaScript existen las _clases_ no son clases como tales, como las pordríamos conocer en cualquier otro lenguaje de programación; no existe la _herencia_ como tal.
Pero sí existen los _**Prototipos**_ y vamos a ver que esas llamadas _clases_ terminan siendo _**Prototipos**_.

**Qué son los _prototipos_:**

> ..."comenzaremos diciendo que (en JavaScript) todos los objetos dependen de un prototipo y que _**los prototipos son objetos**_, es más cualquier objeto puede ser un prototipo"… 
> ..."un prototipo es un objeto del que otros objetos heredan propiedades. Los objetos siempre heredan propiedades de algún objeto anterior, de este modo solo el objeto original y primigenio de javascript es el único que no hereda de nadie…

            **Referencia:** http://mialtoweb.es/prototipos-en-javascript/


**Objetos => Prototipos**

Crear un prototipo es muy similar a crear una variable:

• se antepone el keyword _function_;
• la primer letra del nombre va en mayúscula;
• para invocar un nuevo objeto a partir de este _**prototipo**_ se usa el keyword _'new'_.

```javascript

function Persona(){
        console.log('Hola, soy un nuevo objeto.')Este
    
}
    var pablo = new Persona()
```

• se le pueden pasar parámetros;
• para generar nuevos parámetros o atributos dentro de la declaración del objeto se usa el keyword 'this'
• es implícito en javaScript el retornar el objeto que se está creando 


```javascript

function Persona(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    
}
    var pablo = new Persona('Pablo', 'Andrés')
```

• es posible anexar funciones al prototipo usando el apéndice _.prototype_ precedido de el nombre que le asignamos a nuestro nuevo _**prototipo**_ y sucedido del nombre de nuestra nueva función encadenados. Luego este se iguala a una función anónima.

• se pueden usar los mismos atributos que en el objeto (_this.xxx_)


```javascript

function Persona(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    
}

Persona.prototype.saludar = function(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    
}

    var pablo = new Persona('Pablo', 'Andrés')
    var joaquin = new Persona('Joaquín', 'Perez')
    var rosa = new Persona('Rosa', 'Mosqueta')

    rosa.saludar()
    // Hola me llamo Rosa Mosqueta
```
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
