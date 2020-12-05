var sacha = {
    nombre:"sacha",
    apellido:"linsyct",
    edad:28,
    peso:75
}

console.log(`Al pricipio del año ${sacha.nombre} pesa ${sacha.peso}Kg`);

/*function incremento(){
    return persona.peso += 200
}*/
//Para no tener magics number colocamos los valores dentro de una constante.

const  META = sacha.peso - 3;
const INCREMENTO_PESO = 0.3
const aumentaPeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.40;
var dias = 0;

while(sacha.peso > META){
    if(comeMucho()){
        //Subio de peso
        aumentaPeso(sacha)
    }

    if(realizaDeporte()){
        //Adelgazo
        adelgazar(sacha)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias, hasta que ${sacha.nombre} adelgazo 3Kg.`)
