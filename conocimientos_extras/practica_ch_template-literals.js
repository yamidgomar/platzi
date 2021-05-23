function tagFunc(...args){
    return args
}

const settings = true
const value = 'Dark Mode'

console.log(tagFunc`Settings is ${settings} y value is ${value}`)
