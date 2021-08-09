const http = require('http')
const datos = {
        "id":"1",
        "nombre":"yamid",
        "edad":"34"
}


var start = () => {
    const onRequest = (req, res) => {
        res.writeHead(200, {'Content-type':'text/json'})
        res.write(typeof datos)
        res.end()
    }

    http.createServer(onRequest).listen(8000)
    console.log('Servidor corriendo en puerto 8000')
   
}

exports.start = start
