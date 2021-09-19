var express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

router.get('/message', function(req, res){
    console.log(req.headers)
    res.header({
        "custon-header":"Nuestro header personalizado",
        "otro-header":"otro header"
    })
    res.send('Lista de mensajes')
})

router.delete('/message', function(req, res){
    console.log(req.query)
    console.log(req.body)
    res.send('Mensaje ' + req.body.text +' eliminado.')
})

router.post('/message', function(req, res){
    //res.status(201)
    res.status(201).send( [{"error":"","body":"creado Correctamente" }])
})
/*app.use('/', function(req, res){
    res.send('hola que tal')
})
*/
app.listen(3000)
console.log('Conexion en http://localhost:3000/')
