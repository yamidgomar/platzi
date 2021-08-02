const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const response = require('./network/response');

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/', function(req, res){
    console.log(req.headers)
    res.header({
        "custom-header":"Nuestro header personbalizado",
        "Otro_header":"mas header"
    })
    response.sucess(req, res, 'Este es la lista de mensages.')
})

router.post('/message', function(req,res){
    console.log(req.body)
    console.log(req.query)
    res.status(201).send({error: '', body: "Creado correctamente"});
})

app.listen(3000)
console.log('La aplicacion esta escuchando en http://localhost:3000')
