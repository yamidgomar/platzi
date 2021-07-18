const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do some thig async.'), 3000)
            :reject(new Error('Test Erorrr'))

    })
}

const doSomething = async () => {
    const something = await doSomethingAsync() 
    console.log(something)
}

console.log('B3fore')
doSomething()
console.log('After')

const anotherFuncion = async () => {
    try{
        const something = await doSomethingAsync()
        console.log(something)
    }catch(error){
        console.error(error)
    }
}
console.log('B3fore')
anotherFuncion()
console.log('After')


