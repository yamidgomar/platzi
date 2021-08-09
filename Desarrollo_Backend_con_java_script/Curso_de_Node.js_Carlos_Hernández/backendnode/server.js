const express = require('express')
const bodyParser = require('body-parser')
const response = require('./network/response')
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(router);

router.get('/message', function(req, res){
    console.log(req.headers)
    res.header({
        "custom-header":"Nuestro header personalizado",
        "Otro_header":"mas headers"
    })
    //res.send('Lista de mensajes');
    response.success(req, res, 'Lista de mis mensajesss')
})

router.post('/mesage', function(req, res){
    res.send('Mensaje añadido');
})

router.post('/message', function(req, res){
    console.log(req.body)
    console.log(req.query)
    res.status(201).send({error: '', body: "Creado correctamente"});
})

app.listen(3000)
console.log('La aplicacion esta escuchando en http://localhost:3000')
