const somethigWillHapend = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hey')
        }else{
            reject('Whooppp!')
        }
    })
}

somethigWillHapend()
    .then(response => console.log(response))
    .catch(err => console.log(err))


const somethigWillHapend2 = () => {
    return new Promise((resolve, reject) => {
        if(true){
            setTimeout(() => {
                resolve('True')
            }, 4000)
        }else{
            const error = new Error('Whooppp!')
            reject(error)
        }
    })
}

somethigWillHapend2()
    .then(response => console.log(response))
    .catch(error => console.log(error))

Promise.all([somethigWillHapend(), somethigWillHapend2()])
    .then(response => console.log('Array of result: ',  response))
    .catch(err => {
        console.log(err)
    })
