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
    
    var objeto = {
        string:"Hola soy una cadena de texto",
        int: 123,
        booltrue: true,
        boolfalse: false,
        sumar: 5 + 5,
        mayuscula: "Este texto en parte en minuscula".toUpperCase()
    }
    console.log(objeto.sumar)

* Los objetos se pueden enviar por parametro a alguna funcion de esta manera:


    function suma({n1, n2}){
        var operacion = n1 + n2;
        console.log(operacion);
    }

    var misuma = {n1:25, n2:10 }
    suma(misuma)   // 35
    suma({n1:20, n2:10})    // 30
    suma({n1: 10 + 20, n2:(20 -10)})    // 40
