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
    }

    pop(){
        const lastItem = this.data[this.length -1]
        delete this.data[this.length -1]
        this.length--
        console.log(`El elemento borrado es: ${lastItem.toUpperCase()}`)
    }
    
    shif(){
        const index = 0
        this.shiftIndex(index)
    }

    unshif(item){
        this.unshifIndex()
        this.data[0] = item
        console.log(item)
    }

    delete(index){
        const item = this.data[index]
        this.shiftIndex(index)
        console.log(item)
    }

    shiftIndex(index){
        for(let i = index;i < this.length -1; i++){
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length -1]
        this.length--
    }

    unshifIndex(){
        for(let i = this.length; i > 0;i--){
            this.data[i] = this.data[i - 1]
        }

        this.length++
    }

    indexOf(item){
        var key = ''
        for(let i = 0;i<this.length;i++){
            if(this.data[i] == item){
                key = i
                break
            }else{
                key = -1
            }
        }
        console.log(key)
    }
}

const myarray = new myArray()
module.exports = myarray
