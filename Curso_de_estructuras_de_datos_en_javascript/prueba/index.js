/*vclass myArray{
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
*/

class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }

    get(index){
        console.log(this.data[index])
    }

    push(item){
        this.data[this.length] = item
        console.log(this.data)
        this.length++
    }

    pop(){
        const lastItem = this.data[this.length -1 ]
        delete this.data[this.length -1 ]
        this.length--
        return lastItem
    }

    unshif(){
        const firtItem = this.data[0]
        delete this.data[0]
        return firtItem
    }
}

var myarray = new MyArray()

myarray.push('yago')
myarray.push('yamid')
myarray.push('maria')
myarray.get(0)
console.log(myarray.pop())
console.log(myarray.unshif())
console.log(myarray)
console.log(miarray.data)
