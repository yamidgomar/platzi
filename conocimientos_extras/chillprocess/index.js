const {exec} = require('child_process');

exec('ls -la', (error, stdout, sderr) => {
    if(error){
        console.log(`${error.message}`)
        return
    }

    if(stdout){
        console.log(stdout)
    }
})
