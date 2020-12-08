# Funciones:

Son pedezos de codigo reutilizables.Para declarar una funcion se emplea la palabra reservada function();
    
    function nombreFuncion(parametros){
        //Cuerpo de la funcion,
          codigo reutilizable.
    }

**Ejemplo:**

    var nombre = "sacha",
        edad = 28;
    
    function imprimirEdad(){
        console.log(`${nombre} tiene ${edad} años`)
    }
    
    function imprimirEdad2(n,e){
        console.log(`${n} tiene ${e} años`)
    }
    
    imprimirEdad()    //sacha tiene 28 años
    imprimirEdad2(nombre, edad)    //sacha tiene 28 años
    imprimirEdad2("Marta", 15)    // Marta tiene 15 años

## Alcance de las funciones:

Hace referencia a cuales variables puede acceder una funcion y el valor que tienen al momento de invocar la funcion.

### Variable global:

Valor definido por fuera de una funcion.

Al hacer referencia directa a una variable global dentro de una funcion podemos modificar su valor, se le denomina sideEfect y 
esto lo vamos a querer evitar.

Para acceder a la variable global, hacemos referencia al odjeto global, en este caso por estar en el browser accedemos con window.nombre.


