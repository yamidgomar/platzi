const {exec} = require('child_process')

function ejecutar(funcion){
    exec(funcion, (error, stdout, stderr) => {
        if(stdout){
            console.log(`Actualizando...... `)
        }
    })
}


ejecutar('git add .')
ejecutar(`git commit -m 'actualizando'`)
ejecutar(`git push origin master`)
