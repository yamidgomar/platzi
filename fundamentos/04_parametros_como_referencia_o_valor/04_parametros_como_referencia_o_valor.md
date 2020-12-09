# Parametyros como referencia o como valor:

    var dario = {
        nombre: "dario",
        edad:29
    }

    function cumpleaños(persona){
        persona.edad += 1;
        //persona.edad = persona.edad + 1;
    }

    cumpleaños(dario);


Los objetos que pasamos por parametros se pasan por referencia, es decir, que si lo modificamos dentro del cuerpo de una funcion su valor se va a ver modificado por fuera de la funcion tambien.


