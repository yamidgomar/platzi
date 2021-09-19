## Qué son y cómo se usan las peticiones HTTP?

Un lenguaje comun para todas las comunicaciones.

Como es una peticiones
- GET /index.html HTTP/1.1  - >  Lo que queremos hacer, para cojer la cabecera o el archivo principal, por ultimo el protocolo
- Host: www.example.com
- Referer: www.google.com
- User- Agent: Mozilla/5.0
- Connection:keep- alive

Como es una respuesta:

- HTTP/1.1 200 ok
- Date: Fri, 31 jun 2021 23:59:59 GMT 
- Content- Type:text/html
- Content- Length:1221
<html>...</html>


###Puntos Claves

*Metodos*
Que quieres hacer.

*Estado*
Como ha ido la operacion.

*Cuerpo*
Lo que el servidor devuelve.

## Metodos, cabeceras y estados.

*Metodos*

El verbo que dice lo que queremos hacer al servidor.

Verbos principales o metodos http:

GET: Recoger información del servidor.
- informacion de un producto
- listado de elementos.
- ver una pagina html o css.

POST: Añadir información al servidor.
- añadir un producto.
- enviar un formulario.
- crear un nuevo chat.

PUT: Reemplazar información en el servidor.
- Cambiar el contenido de una pagina.
- Reemplazar un producto por otro.
- Editar un mensaje.

PATCH: Actualizar parte de la información.
- Cambiar la foto de un usuario.
- Modificar el precio de un producto.

DELETE: Eliminar información del servidor.
- Eliminar un mensaje.
- Quitar un producto del carrito.


OPTIONS: Pedir información sobre métodos (saber si podemos ejecutar alguno de los métodos anteriores).

## Cabeceras:
Informacion contextual de la peticion.
> "No es lo que quiero hacer sino como lo quiero hacer"

Las cabeceras serán el envío al servidor de cómo queremos hacer la petición.

*En la request*
POST, PUT, PATCH, Podemos tener cabeceras de :
- Autentificacion.
Asegurate de que puedes pedir cosas al servidor.
    - Authorization.

- Cache.
- Indicaciones.
- Condiciones.
- *Cors - "Cross Origin Resource Sharing"*.Simplemente se pueda pedir desde ciertas URL's.
Manejar informacion desde fuera de nuestro servicio.
Desde donde se puede consumir la informacion.
Acces-Control-Allow-Origin.

- **Cookies:**
Compartir informacion entre peticiones.
ejm: Soy este usuario y lo guarda en una cookie.
Soy este usuario y lo guarda en una cookie.

Gestionar durante cuanto tiempo la respuesta sera la misma.
- Cache-Control
- Expires


- **Accept**
Define el tipo de contenido que acepta.
en json o html....
- Accept 
- Accept-Charset
- Accept-Encoding


Los estados son números que indica el estado de la petición:

2XX: Todo ha ido bien.
>   200: Ok
>   201: Created

3XX: La petición se ha redirigido.
>   301: Moved Permanently
>   304: Not modified.

4XX: Errores del cliente.
>   400: Bad request
>   401: Unauthorized
>   404: Not found

5XX: Ha habido un error al procesar la petición.
> 500: Internal server error.


## Cuerpo y Query de la petición:

El cuerpo de la petición es la información en sí que queremos enviar, editar o que el servidor nos devuelva.

**Que tienen y cómo viene?**
Depende de las cabeceras:

- Content-Type:

Exactamente el tipo de contenido que tengo:
- text/html
- text/css
- application/javascript -> traer un archivo javascript que quiero que lo ejecutes.
- image/jpg

------- Datos en crudo ------------
- application/json
- application/xml

En la request enviamos

[POST]
http://api.com/user
-> Content-Type: application/json

{
    "name": "Carlos",
    "username": "CodingCarlos"
}

En la Respuesta:

- En cualquier metodo.
- Un archivo html, css, js...
- Los datos de un producto.

[POST]
http://api.com/user
-> Content-Type: application/json
{
    "id": "4u59d7xsao0xr1",
    "name": "Carlos",
    "username": "CodingCarlos"
}

PEticion directa a platzi.com

[GET]
http://platzi.com
content-type:text/html
```<html>
        <head>...</head>
        <body>...</body>
    </html>
```

- Content-Length:

Las queries van a permitirte añadir información extra a los datos que queramos enviarle al servidor.

- Orden en el que quiero que vuelvan los datos.
- Parametros que quieres medir.
EJm:

- youtube.com/watch?v=ZKFwCFBwQFU
- api.com/person?orderBy=name&age=25

**Una Forma de compartir datos con el frontend**

Ojo: El usuario lo vera, asi que cuidado con lo que compartes.

Estructura de una query:

- Añadir ? al final de la URL.
- nombre=valor
- Separacion con &.


## Crear un servidor HTTP desde NodeJS

const express = require('express')
// import express form 'express'

var app = express();

app.use('/', function(req, res){
    res.send('Hola');
});

app.listen(3000)
console.log('La aplicacion esta escuchando en http://localhost:3000')


## ¿Cómo pueden venir las peticiones?

const express = require('express')
const router = express.Router();

var app = express();

app.use(router);


router.get('/', function(req, res){
res.send('hola desde get')
})

router.post('/', function(req, res){
res.send('hola desde post')
})

app.listen(3000)
console.log('La aplicacion esta escuchando en http://localhost:3000')

## Recibir información desde el cliente: Body y Query

instalamos body-parser es un modulo de express(extension).

    conts bodyParser = require('body-parser')
    app.use(bodyParser.json())

- Encontramos el body siempre en el req.

console.log(req.body)
- desde server: app.use(bodyParser.json())
- Content-Type:application/json desde usuario.

body: del request 
{
    "text":"hola"
}

router.post('/message', function(req, res){
    res.send('Mensaje ' + req.body.text+' añadido.')
})

- Podemos añadir cualquier content-type ejm urlunlercode:
- desde server: app.use(bodyParser.urlencoded(extended: false))

### Trabajar desde querys (parametros por url)

Simplemente en vez de usar req.body usar req.query.

/message?orderby=id --> {orderby: 'id'} 
 /message?orderby=id&age=15 --> { orderBy: 'id', age: '15'  }

## Informacion contextual : Leer las Cabeceras http</h3>
Las cabeceras (en inglés headers) HTTP permiten al cliente y al servidor enviar información adicional junto a una petición o respuesta.

Una cabecera de petición esta compuesta por su nombre (no sensible a las mayusculas) seguido de dos puntos ‘:’, y a continuación su valor (sin saltos de línea). Los espacios en blanco a la izquierda del valor son ignorados

router.get('/message', function(req, res){
    console.log(req.headers)
    res.header({
        "custom-header":"Nuestro header personalizado",
        "Otro_header":"mas headers"
    })
    res.send('Lista de mensajes');
})


## Tipos de respuesta: Vacía, plana, con datos y estructurada

    res.send();
demos debolver una respuesta vacia res.send(), no tiene mucho sentido, por lo que podemos debolver un estado 201: Created, res.status(201).send().
Podemos debolver lo que sea un objeto, un array o coleccion de objetos, etc.
[POST]
- EJM: res.status(201).send({error: '', body: "Creado correctamente"});

[POST]
http://localhost:3000/message/
HTTP/1.1 201 Created
{
    error:'',
    body:'Creado Correctamente'
}


