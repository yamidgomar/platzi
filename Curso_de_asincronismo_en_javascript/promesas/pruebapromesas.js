const somewillHappen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey True')
        }else{
            reject('ooooops')
        }
    })
}

const somewillHappenDos = () => {
    return new Promise(
        (resolve, reject) => {
            if(true){
                setTimeout(() => resolve('True set time out'), 3000)
            } else {
                const error = new Error('oops')
                reject(error)
            }
        }
    )
}
/*somewillHappen()
    .then(result => console.log(result))
    .then(() => setTimeout(() => console.log('promesa encadenada con set time out'), 1000))
    .catch(err => console.log(err))

somewillHappenDos()
    .then(result => console.log(result))
    .catch(error => console.log(error))
*/
Promise.all([somewillHappen(), somewillHappenDos()])
    .then(results => console.log(`Array of resultados: ${results}`))
