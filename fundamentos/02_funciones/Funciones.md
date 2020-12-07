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
