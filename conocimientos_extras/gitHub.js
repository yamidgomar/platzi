const {exec} = require('child_process')

function ejecutar(funcion){
    exec(funcion, (error, stdout, stderr) => {
        if(stdout){
            console.log(stdout)
        }
    })
}


ejecutar('git add .')
ejecutar(`git commit -m 'actualizando'`)
