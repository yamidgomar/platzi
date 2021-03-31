customers = [
    {
              'id': 001,
              'f_name': 'Abby',
              'l_name': 'Thomas',
              'gender': 'M',
              'married': true,
              'age': 32,
              'expense': 500,
              'purchased': ['Shampoo', 'Toys', 'Books']
           
    },
    {
              'id': 002,
              'f_name': 'Jerry',
              'l_name': 'Tom',
              'gender': 'M',
              'married': true,
              'age': 64,
              'expense': 100,
              'purchased': ['Stick', 'Blade']
           
    },
    {
              'id': 003,
              'f_name': 'Dianna',
              'l_name': 'Cherry',
              'gender': 'F',
              'married': true,
              'age': 22,
              'expense': 1500,
              'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Books']
           
    },
    {
              'id': 004,
              'f_name': 'Devora',
              'l_name': 'Currian',
              'gender': 'M',
              'married': true,
              'age': 82,
              'expense': 90,
              'purchased': ['Books']
           
    },
    {
              'id': 005,
              'f_name': 'Maria',
              'l_name': 'Gomes',
              'gender': 'F',
              'married': false,
              'age': 70,
              'expense': 300,
              'purchased': ['Toys']
           
    }
    
];
/*El filter()método Array toma una función de devolución de llamada que también se llama como función de prueba . El filter()método crea una nueva matriz con todos los elementos que pasan la prueba implementada por la función de devolución de llamada proporcionada.

 toma tres argumentos, el valor actual, el índice actual y la propia matriz de origen:

 const newArray = arr.filter((element, index, array) => {
    // Do Something Here...
     // 
 });

*/

const seniorConsumer = customers.filter(customer => customer.age >= 60)
 
console.log(seniorConsumer)

for(let i = 0; i < seniorConsumer.length; i++){
    console.log(seniorConsumer[i].f_name)
}*/



/*El map()método crea una nueva matriz con los resultados de una función de devolución de llamada en cada elemento de la matriz de llamada.
 toma tres argumentos, el valor actual, el índice actual y la propia matriz de origen.

 const newArray = arr.map(function callback(currentValue, index, array)) {
     // Do Something Here...
     // 
 });

El siguiente código toma un array de objetos y crea un nuevo array que contiene los nuevos objetos formateados.

    var kvArray = [{clave:1, valor:10},
                   {clave:2, valor:20},
                   {clave:3, valor: 30}];

var reformattedArray = kvArray.map(function(obj){
       var rObj = {};
       rObj[obj.clave] = obj.valor;
       return rObj;
    
});

// reformattedArray es ahora [{1:10}, {2:20}, {3:30}],
//
// // kvArray sigue siendo:
// // [{clave:1, valor:10},
// //  {clave:2, valor:20},
// //  {clave:3, valor: 30}]
 */

const customerWithFullName = customers.map(function(customer){
    var title = '';

    if(customer.gender === 'M'){
        title = 'Mr'
    }else if(customer.gender === 'F' && customer.married === true){
       title = 'Mrs' 
    }else{
        title = 'Miss'
    }

    customer['fullName'] = `${title} ${customer.f_name} ${customer.l_name}`
    return customer
})

console.log(customerWithFullName)*/

/*
 El reduce()método usa una función reductora en cada elemento de la matriz, devolviendo un único valor de salida.

 arr.reduce(
    reducer(
          accumulator, 
                currentValue, 
                      index, 
                            array
    ),
       initialValue
 );


 Una función reductora que también se llama como función de devolución de llamada que se llamará en cada elemento de la matriz.
 Un valor inicial opcional . Se utiliza como primer argumento para la primera llamada de la función reductora . Si no se proporciona initialValue , se utilizará y omitirá el primer elemento de la matriz.

 Nota: Llamar al reduce()método en una matriz vacía sin un initialValue arrojará un TypeError.

 Como sabemos sobre el reduce()método ahora, profundicemos en la función reductora . La función reductora toma cuatro argumentos:

 Un acumulador: acumula los valores de retorno del reductor. Es el valor acumulado devuelto por la última invocación del reductor , o initialValue , si se proporciona.
 Valor actual: el elemento actual de la matriz.
 Índice actual: el índice del elemento actual de la matriz.
 Matriz de origen: matriz de origen completa.

 "El valor devuelto de la función reductora se asigna al acumulador, cuyo valor se recuerda en cada iteración en toda la matriz y, en última instancia, se convierte en el valor final único resultante". - de MDN
 */
