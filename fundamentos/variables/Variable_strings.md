# Variables: Strins.

**str.toUpperCase():** Cambia el string a Mayuscula.

**str.toLowerCase():** Cambia el string a Minuscula.

**str.chartAt():** Trae el caracter en la posicion que se requiere

    var str = `Este es el String a Modificar`
    console.log(`Traemos el caracter 8: ${str.charAt(8)}.`)
    //Traemos el caracter 8: e .

> **Nota:** El primer caracter en todo string se encuentra en la posicion 0,
> str.length, entrega la cantidad de letras en el string.


## Interpolacion de variables: ${var1} ${var2}

Dentro de las llaves se puede colocar codigo JS Ejm:
    ${str.toUpperCase()} 
