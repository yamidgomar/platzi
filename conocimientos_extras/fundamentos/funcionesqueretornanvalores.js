var sacha = {
            nombre: 'Sacha',
            apellido: 'Lifszyc',
            edad: 28,
            ingeniero: true,
            cocinero: false,
            cantante: false,
            dj: false,
            guitarrista: false,
            drone: true
        
}

const MAYOR_DE_EDAD = 18;

const esMayor = ({edad}) => edad >= MAYOR_DE_EDAD

function imprimeMensaje(persona){
    if(esMayor(persona)){
        console.log(`${persona.nombre} es mayor de edad.`)
    }else{
        console.log(`${persona.nombre} es menor de edad.`)
    }
}

imprimeMensaje(sacha)
