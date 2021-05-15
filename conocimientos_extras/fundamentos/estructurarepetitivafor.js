//Para repetir una o mas intrucciones un determinado numero de veces.

//for(){}

/*for(let i = 1; i < 365;i++){
    console.log(i)
}

En el siguiente ejemplo se imprime el peso de la persona (objeto) al iniciar el año y luego del for (365 días) se imprime el peso de esa misma persona después del año.
*/ 


var sacha = {
            nombre: 'Sacha',
            apellido: 'Lifszyc',
            edad: 28,
            peso: 75
        
}

console.log(`Al principio del año ${sacha.nombre} pesa ${sacha.peso}kg`)

const VARIACION_DE_PESO = 0.2;

const aumentaDePeso = persona => persona.peso += VARIACION_DE_PESO
const disminuyeDePeso = persona => persona.peso -= VARIACION_DE_PESO

for(let i = 1; i <= 365; i++){
    var random = Math.random();
    if(random < 0.25){
        //Aumenta de peso
        aumentaDePeso(sacha)
    }else if(random < 0.50){
        //Disminuye de peso
        disminuyeDePeso(sacha)
    }
}

console.log(`Al final del año ${sacha.nombre} pesa ${sacha.peso.toFixed(1)}`)

