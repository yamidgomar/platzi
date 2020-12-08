# Objetos:

* Se definen con llaves **{}**.
* Se asigna a una variable. **var variable = {}**.
* Se componen de claves, keys o propiedades y valores. La coma se utiliza para separar cada propiedad.
* Pueden recibir como valor cadenas de texto,(strings), numeros(int) y boleanos. Ademas de poder hacer operaciones dentro de sus valores.
   
   var objeto = {
        string:"Hola soy una cadena",
        int: 123,
        booltrue: true,
        boolfalse: false,
        suma: 5 + 5,
        mayuscula: "Este texto en parte esta en minuscula".toUpperCase()
    }
    
    
* Los objetos se pueden enviar por parametro a alguna funcion de esta manera:


    function suma({n1, n2}){
        var operacion = n1 + n2;
        console.log(operacion);
    }

    var misuma = {n1:25, n2:10 }
    suma(misuma)   // 35
    suma({n1:20, n2:10})    // 30
    suma({n1: 10 + 20, n2:(20 -10)})    // 40

## ADICIONAL:

* Las propiedades en los objetos pueden recibir objetos:

var chat = {
    info: {
            mensaje: "algun mensaje",
            fechamensaje: "08/12/2020",
            deUsuario: "Victor",
            aUsuario: "yagomar"
          }
}

PAra acceder al mensaje:

    console.log(chat.info.mensaje);

* otras formas de agregarles atributos a los objetos:

var yo = {};
yo.nombre = "yamid";
yo.apellido = "gonzalez";
yo.sobrenombre = "mompirry";
yo.edad = 34;

yo["ocupacion"] = "estudiante";

delete yo.sobrenombre  // Borramos sobrenombre.


# Destructor de objetos:

    var dario = {
        nombre:"Dario",
        apellido:"linzick",
        edad:30
    }
