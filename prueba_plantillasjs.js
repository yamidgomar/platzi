/*
 PLANTILLAS DE CADENA O TEMPLATE ESTRING:

 - Cadenas con variables dentro (interpolación).
 - Generar cadenas multilínea.
 - Ejecutar expresiones, funciones y etiquetados.

//https://ed.team/blog/template-strings-en-javascript

var estaciones = ["verano", "otoño", "invierno", "prmavera"]

var cadena = `
<ul>
${estaciones.map((estacion) => `\t<li class="lista"> ${estacion} </li>\n`).join('')}
</ul>
`
console.log(cadena)

const etiqueta = function(cadena, nombre){
    //console.log(cadena)
    //console.log(nombre)
    var estado = ""
    if(nombre === "yamid"){
        estado = "bienbenido"
    }else{
        estado = "no eres bienbenido"
    }
    console.log(cadena[0] + nombre + ' ' + estado)
}

var nombre = "yamid"

etiqueta`hola como estas ${nombre}`

*/

//https://www.arquitecturajava.com/utilizando-javascript-template-string/
    
var alumnos=[
    {
        nombre:"pedro", 
        nota:3
    },
    {
        nombre:"angel", 
        nota:7
    }
];

var plantilla =`
   ${alumnos.map(
    alumno => (`${alumno.nombre} a sido: ${alumno.nota == 7?"aprobado":"reprobado"}`
  )).join('')}
`
console.log(plantilla)

/* https://www.arquitecturajava.com/javascript-high-order-functions-y-su-manejo/
var sumar = function(a,b){
    return a + b
}

var restar = function(a,b){
    return a - b
}


var ejecutarOperacion = function(a,b,operacion){
var plantilla = `******************
${operacion(a,b)}
******************`
    console.log(plantilla)
}

ejecutarOperacion(1,1,sumar)
ejecutarOperacion(1,1,restar)
ejecutarOperacion(0,1,sumar)
*/

