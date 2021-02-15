/* # La verdad oculta sobre las clases en JavaScript:

Los objetos en JavaScript son “contenedores” dinámicos de propiedades. Estos objetos poseen un enlace a un objeto prototipo. Cuando intentamos acceder a la propiedad de un objeto, la propiedad no sólo se busca en el propio objeto sino también en el prototipo del objeto, en el prototipo del prototipo, y así sucesivamente hasta que se encuentre una propiedad que coincida con el nombre o se alcance el final de la cadena de prototipos.

*/
//-------------------------------------------------------------------------------------------------------------------------------------

/*
 Los objetos en JS son como cualquier objeto en otro lenguaje de programación; sin embargo, tienen un approach algo diferente. 
 Primero que nada, un objeto en JS sigue la nomenclatura JSON y la cual está basada en una estructura computacional llamada HashMap que permite el acceso a los datos de manera MUY rápida con solo llamar al atributo, E.g.
*/
 
//var diego = { name: 'Diego'  }

 //diego.name // 'Diego'

 // Esta es una de las estructuras de datos más veloces ya que puedes obtener los datos sin analizar todo el conjunto.
/*
 La cosa es que en JS, los objetos json tienen una característica que los hace especial: su padre es el objeto Prototipo u “Object.__proto __”, eso significa que “heredan” toda cantidad de características de ese prototipo mayor. Esto sucede en todos los lenguajes, siempre hay un objeto mayor del que todos heredan, en el caso de python se llama Object, en JS también, pero lo que se hereda es el atributo __proto __, por lo tanto todos son hijos de “Object.__proto __”.
 Pero… la Programación Orientada a Objetos tiene características como:

 Abstracción
 Encapsulamiento
 Herencia
 Polimorfismo
 En JS no las podemos implementar? La respuesta es sí, pero hasta este punto del curso, no es tan fácil de hacerlo, en la siguiente clase estos problemas parecen ir solucionándose de manera fácil, pero por el momento, hay que entender lo fundamental: los prototipos.
 <h3>¿Cómo solucionamos esto?</h3>
 Primero que nada, necesitamos un constructor diferente para nuestro objeto, porque la nomenclatura json no es del todo cómoda ni bonita para programar, ni tampoco es funcional. Para lograr esas características, utilizaremos una función. Las funciones son objetos de primera-clase (según Mozilla), y si es un objeto, significa que también hereda las funciones de prototipo!! Y si es una función significa que la podemos llamar, por lo tanto es funcional.
*/

function Automovil(color, marca) {
        this.color = color;
        this.marca = marca; 
}



// Igual de rápido que el JSON, porque la función también es un objeto

/*
 Entonces con una función ya tenemos un objeto como un json y con una visualización mucho más cómoda y una mayor funcionalidad. Esto no nos ha solucionado el problema; sin embargo, nos ha abierto las puertas a hacerlo.

 Ahora, teniendo una función, significa que tenemos el constructor de un objeto que hereda de “Object.__proto __”, pero ¿cómo le metemos funciones a nuestro objeto? Para eso utilizamos el atributo prototype dentro del objeto. El atributo prototype es una propiedad dentro de nuestro objeto y dentro le pondremos las funciones que harán especial a ese objeto.
*/

Automovil.prototype.abrirCajuela = function () {
    console.log('abrir atrás');
}

Automovil.prototype.pitar = function () {
    console.log('realizar pitido');
}

/*Aquí podemos ver que ahora el Automovil tiene la funcion abrirCajuela() y que hará las acciones para abrir atrás porque la cajuela siempre está detrás.
 *
 * <h3>Herencia</h3>
 * Ahora sí, después de tanto rollo, podemos llegar a la herencia que es lo que importaba de la clase. Para entender esto habrá que crear un nuevo tipo de auto, e.g. Vocho.*/

function Vocho(color, marca) {
        this.color = color;
        this.marca = marca;    
}


/* Excelente, pero ¿de qué me sirve si volveré a escribir todo el objeto de nuevo? aquí es donde entra la herencia. Lo que haremos será decirle al Vocho (objeto2) que herede todo del Automovil (objeto1) y así desde el objeto2 tendremos acceso a las funciones del objeto1 como abrirCajuela() y pitar(). Ya con esas funciones lo que queremos es modificar la primera porque el Vocho tiene la cajuela en frente y el motor atrás, por lo que la función abrirCajuela() nos abrirá el motor si no la cambiamos.
 * Para esto, usaremos el mismo hack de Sacha. Una función que dentro tenga 3 prototipos: el padre, el hijo y un prototipo que servirá como referencia al prototipo padre.*/


function heredaDe(hijo, padre) {
    var fn = function () {}
    fn.prototype = padre.prototype;
    hijo.prototype = new fn;
    hijo.prototype.constructor = hijo;   
}

/*Aquí lo que estamos haciendo es decirle al hijo que su constructor (la función a la que llamamos cuando hacemos “new”) sea una instancia de todas las funciones que hay dentro del padre. En nuestro ejemplo el padre es Automovil y el hijo es el Vocho.
 */
heredaDe(Vocho, Automovil)
// es importante que esta función la declaremos antes de crear instancias de los objetos (fiesta y herbie) y de modificar las funciones.

var fiesta = new Automovil('Blanco', 'Ford');
var herbie = new Vocho('Blanco', 'Volkswagen');

console.log(fiesta.color) // 'Blanco'
console.log(herbie.color) // 'Blanco'
fiesta.abrirCajuela()
herbie.abrirCajuela()
herbie.pitar()

/*
 Hasta este punto ya tenemos las funciones abrirCajuela() y pitar() en el Vocho. Pero si le hablamos, veremos que el vocho abrirá atrás como cualquier otro auto y lo que queremos es que abra en frente. Para lograr esto, modificaremos la función abrirCajuela().abrirCajuela. 

*/
Vocho.prototype.abrirCajuela = function () {
    console.log('abrir enfrente');
}


herbie.abrirCajuela()
