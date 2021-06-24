class myArray{
    constructor(){
        this.length = 0
        this.data = {}
    }

    get(index){
        console.log(this.data[index])
    }

    push(item){
        this.data[this.length] = item
        this.length++
        console.log(this.data)
    }

    pop(){
        const lastItem = this.data[this.length -1]
        delete this.data[this.length - 1]
        this.length--
    }
}

const myarray = new myArray()

myarray.push('maria')
myarray.push('yago')
myarray.push('yamid')
myarray.pop()
console.log(myarray)
