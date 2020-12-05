var sacha = {
    nombre:"sacha",
    apelido:"linzick",
    edad:36,
    ingeniero:false,
    arquitecto:false,
    transportador:false,
    drone:true
}

var jose = {
    nombre:"jose",
    apellido:"gomez",
    edad:13
}

function imprime(persona){
    console.log(`${persona.nombre} es :`)
    if(persona.ingeniero){
        console.log(`Ingeniero`)
    }else{
        console.log(`No es ingeniero`)
    }
    if(persona.arquitecto){
        console.log(`Arquitecto`)
    }
    if(persona.drone){
        console.log(`Vuela Drones`)
    }
}

const mayoriaEdad = 18
/*function esMayorDeEdad(persona){
    return persona.edad >= mayoriaEdad
}*/

const ES_MAYOR_DE_EDAD = ({edad})=> edad >= mayoriaEdad

//const esMayorDeEdad = ({edad}) => edad >= mayoriaEdad

/*function mayoria(persona){
    if(esMayorDeEdad(persona)){
        console.log(`Y es mayor de edad, tiene ${persona.edad}`)
    }else{
        console.log("Lo siento no eres mayor de edad")
    }
}*/


const mayoria = persona => ES_MAYOR_DE_EDAD(persona)?console.log(`Y es mayor de edad, tiene ${persona.edad}`):console.log("Lo siento no eres mayor de edad")

const permitirAcceso = (persona) => !ES_MAYOR_DE_EDAD(persona)?console.log(`ACCESO DENEGADO.`):console.log(`APROBADO`)
//imprime(sacha);
mayoria(sacha);
mayoria(jose)
permitirAcceso(sacha)
