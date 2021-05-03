var yamid = {
    nombre:"Yamid",
    signo:"pegaso"
}

var devuelve;
const horoscopo = ({signo}) => {
    switch (signo){
        default:
            devuelve = "Lo siento no es un signo valido"
            break
        case 'aries':
            devuelve = 'Aries empezara un año con'
            break
        case 'sagitario':
            devuelve = 'Sagitario empezara un poco tenso'
            break
    }

    return devuelve
}

console.log(horoscopo(yamid))
