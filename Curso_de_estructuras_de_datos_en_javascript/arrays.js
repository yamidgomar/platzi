/*Arrays o conicida en otros lenguajes como listas.
Generamos un indice automaticamente para cada elemento.
poseen metodos que nos ayudan a manipular los datos o elementos.
    push:agregar un elemento al final del array.
    pop: Borra el ultimo elemento.
    unshift:agrega un elemento al principio del array.
    shift:borra el primer elemento.
    splice:agregar un elemento en una parte del array.

Existen dos formas de Array: estaticos y dinamicos.
Por default js maneja los Arrays dinamicos.Nosotros no decidimos que tan largo va a ser este Array a diferencia de otros lenguajes como C.
Nosotros no tenemos la dimension exacta, javascript tampoco lo sabe lo wue va a hacer es duplicar la cantidad de elementos que podra tener este Array.

Array numsn = [4,8,5]
Array numsn = [4,8,5,...]

address     || data 
    0           4
    1           8
    2           5
    3
    4
    5

Si nos da los 6 slag?, y tenemos un septimo elemento la computadora nos da los seis slag? si necesitsmos otro tiene que copiar todos estos seis slag buscar estos seis slog disponible y no te devolvere 7 slog si no 12.los seis espacios wue teniamos 6 slog lo libera. son eslog vscios.

========== Construyendo nuestro Array ======

const array = ['diego', 'karen', 'oscar'] 
console.log(array)
array.push('ana')
console.log(array)
*/

const array = ['diego', 'karen', 'oscar'] 
array.pop()
console.log(array)
class myArray{
    constructor(){
        this.length = 0
        this.data = {}  // todos los elementos nuevos se guardad aqui.(propiedad data)
    }

    get(index){
        console.log(this.data[index])
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        console.log(this.data);
    }

    pop(){
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        console.log(lastItem)
    }
}

const myarray = new myArray()
myarray.push('maria')
myarray.push('alejandro')
myarray.push('janet')
myarray.push('yago')
myarray.push('yago')
myarray.pop()
console.log(myarray)
