var sacha = {
            nombre: 'Sacha',
            apellido: 'Lifszyc',
            edad: 28,
            peso: 75
}

const META = 70;
var dias = 0;
const INCREMENTO_PESO = 0.3;
const aumentaDePeso = persona => persona.peso += INCREMENTO_PESO;
const disminuyeDePeso = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.30;
const haceEjercicio = () => Math.random() < 0.40
console.log(`Al principio ${sacha.nombre} pesaba ${sacha.peso}kg`)

while(sacha.peso > META){
    if(comeMucho()){
        aumentaDePeso(sacha)
    }

    if(haceEjercicio()){
        disminuyeDePeso(sacha)
    }

    dias = dias +1
}
console.log(`y pasaron ${dias} dias para que alcanzara la meta de pesar ${META}kg`)
