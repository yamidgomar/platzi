
var titulo = "Este es el titulo principal"
var subtitulo = "este es un subtitulo"

function templater(templateStrings, ...subtituciones){
    return {
        cooked:[templateStrings],
        raw:templateStrings.raw,
        subtituciones
    };
}

var plantilla =`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta charset="UTF-8">
    <title></title>
    <link href="">
    <style type="text/css">
        * {
            margin: 0;
            padding: 0;
            box-sizing:border-box;
        }
    </style>
</head>
    <h1>\${titulo}</h1>
    <h2>${subtitulo}</h2>
</body>
</body>
</html>
` 
var htmlTemplater = (data) => templater(`${plantilla}`)

console.log(htmlTemplater(titulo, subtitulo))
