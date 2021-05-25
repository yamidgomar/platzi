/*Una de las cosas con la wue nos enfrentamos es que debamos utilizar un valor por defecto, como cuando no conoces el valor, para ello igualamos el parametro al valor y en la ejecucion de la funcion donde va el parametro colocamos undefined.

function createGodzilla(color, peso = 200, poderes){
    console.log(`Godzilla es de color ${color} pesa ${peso} kilos y sus poderes son ${poderes}`)
}

createGodzilla('verde', undefined, ['ligthting', 'nuclear'])

Otro problema wue podemos encontrar:
añadir un parametro mas con lo cual el metodo yanno funci9na como esperabamos pues estamos rompiendo el contrato de la funcion no es muy extensible la funcion.

PARAMETROS NOMBRADOS:

Lo que hacemos es pasarle a la funcion un objeto parametro.Utilizamos la sintaxis de la desestructuracion en los propios parametros de la funcion.

Estamos haciendo que tengs un contrato atravez del nombre.
    // Un contrato donde los nombres del objeto, las propiedades o keys son las wue le llegaran como parametro a nuestra funcion.
    // Si uno de los parametros es opci9nal, es decir tiene un valor por defecto, podemos eliminarlo de la ejecucion de la funcion.

*/

function createGodzilla({color, peso, sonidos, poderes}){
    console.log(`${color} ${peso}`)
}

createGodzilla({color:'blue'}, 200)
