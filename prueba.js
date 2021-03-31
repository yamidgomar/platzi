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


//const adultoMayor = customers.filter{}(customer => customer.age >= 60)

//console.log(adultoMayor)


/*const nombreCompleto = customers.map(function(customer){
    var title = '';

    if(customer.gender === 'M'){
        title = "Señor"
    }

    customer['fullName'] = `${title} ${customer.f_name} ${customer.l_name}`
    return customer
}) 

console.log(nombreCompleto)
*/


/*const personasMayores = customers.filter(function(customer){
    return (customer.age >= 65)

})

console.log(personasMayores)
*/

/*class musculosJavascript{
    imprime(customer){
        console.log(customers)
    }
}

console.log(musculosJavascript.imprime)
const nombreCompleto = customers.map(function(customer){
    var title = ''

    if(customer.gender === 'M'){
        title = 'Mr'
    }else if(customer.gender === 'F' && customer.married === true){
        title = 'Mrs'
    }else{
        title = 'Miss'
    }
    
    customer['fullName'] = `${title} ${customer.f_name} ${customer.l_name}`

    return customers
})
*/

class musculosJavascript {
    
    filtra(){
        const filtrado = customers.filter(customer => customer.age >= 50)

        console.log(filtrado)
    }

    mapea(){
        const nombreCompleto = customers.map(function(customer){
            var title = ''

            if(customer.gender === 'M'){
                title = 'Mr'
            }else if(customer.gender = 'F' && customer.married === true){
                title = 'Mrs'
            }else{
                title = 'Miss'
            }

            customer['nombre_completo'] = `${title} ${customer.f_name} ${customer.l_name}`

            return customers
        }
        
        )
        console.log(nombreCompleto)
    }

    promedioEdadLibros(){
        var conteo = 0

        const acumulado = customers.reduce(function(acum, customer){
            if(customer.purchased.includes('Books')){
                acum = acum + customer.age
                conteo = conteo + 1
            }

            return (acum)
        },0)

        return (Math.floor(acumulado/conteo))
    }
} 

const musculos = new musculosJavascript()

console.log(`La Edad Promedio es de: ${musculos.promedioEdadLibros()}`)
