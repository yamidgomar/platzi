const somethimewillhapen = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hiii')
        }else{
            reject('ooooops')
        }
    })
}

somethimewillhapen()
    .then(results => console.log(results))
    .catch(error => console.log(error))


const somethimewillhapen2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True')
            }, 2000)
        }else{
            const error = new Error('ooops')
            reject(error)
        }
    })
}

somethimewillhapen2()
    .then(results => console.log(results))
    //.then(() => console.log('then anidado'))
    .catch(err => console.log(err))

Promise.all([somethimewillhapen(), somethimewillhapen2()])
    .then(results => console.log('Array de resultados: ' , results))
