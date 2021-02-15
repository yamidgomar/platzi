const primerafecha = new Date();
const segundafecha = new Date(1986,12,10);

function modificarFecha(fecha1,fecha2){
    const undia = 1000 * 60 * 60 * 24;
    const diferencia = Math.abs(fecha1 - fecha2)
    return Math.floor(diferencia/undia/365)
}

console.log(modificarFecha(primerafecha,segundafecha))

