const {exec} = require('child_process')

/*class Ejecutar {
    constructor(){
        this.ejecutar()
    }

    ejecutar(funcion){
        exec(funcion, (error, stdout, stderr) => {
            if(stdout){
                console.log(`Actualizando...... `)
            }
        }
        )
    }
}

const gitCommand = new Ejecutar()

Ejecutar.ejecutar('git add .')
*/

class gitCommand{
    constructor(){

    }

    push(funcion){
        exec(funcion, (error, stdout, stderr) => {
            if(stdout){
                console.log(stdout)
            }
        })
    }
}

const commadGit = new gitCommand() 
commadGit.push('ls -la')
