// https://exploringjs.com/impatient-js/ch_template-literals.html


/*
 ######################## Template Literals (plantillas etiquetadas): ###################

function tagFunc(...args){
    return args
}

const setings = 'dark mode';
const value = true;

console.log(tagFunc`Settings ${setings} is ${value}!`)
//output:  [ [ 'Settings ', ' is ', '!'  ], 'dark mode', true  ]

La funcion tagfunc antes de la comillas se llama tag funcion(funcion de etiqueta), sus argumentos son:

- Template strings(cadenas de plantillas)Una matriz con los textos que rodean las interpolaciones ${}. ejm: ['Setting ', ' is ', '!'].

Substitutions(argumentos restantes), los valores interpolados ejm: 'dark mode' y true.

########## Cadenas de plantilla cocidas frente a crudas (avanzado) #############

Una interpretacion cocida(cooked interpretation), donde las barras invertidas tienen un significado especial.Por Ejemplo, \t produce una caracter de tabulacion. Se almacenan como una matriz en el primer argumento. 

Una interpretacion cruda(raw interpretation) donde las barras invertidas no tienen un significado estpecial. \t produce dos caracteres: Una barra invertida y un t. Se almacennan en la propiedad .raw del primer argumento(una matriz). 

La interpretacion sin formato permite literales de cadena sin formato atravez de String.raw y aplicaciones similares.

Ejm funcion de etiqueta cookedRaw utiliza ambas interpretaciones:


function cookedRaw(templateStrings, ...subtitucions){
    return {
        cooked:[...templateStrings],
        raw:templateStrings.raw,
        subtitucions,
    };
}

console.log(cookedRaw`\tab${'subst'}\newline\\`)
output: 
 { cooked: [ '\tab', '\newline\\' ],
   raw: [ '\\tab', '\\newline\\\\' ],
   subtitucions: [ 'subst'  ] }' ]' ] }

Tambien podemos usar escapes de punto Unicode \u{1F642}, escapes de unidades Unicode \u03A9 y escapes ASCCI \x52 en plantillas etiquetadas:

console.log(cookedRaw`\u{54}\u0065\x78t`)
output:
{ cooked: [ 'Text'  ],
  raw: [ '\\u{54}\\u0065\\x78t'  ],
    subtitucions: [] }

Si la sintaxis de uno de estos escapes no es correcta, la cadena de plantilla cocida correspondiente es undefined, mientras que la version sin procesar sigue siendo literal.

console.log(cookedRaw`\uu\xx ${1} after`)
output:

{ cooked: [ undefined, ' after'  ],
  raw: [ '\\uu\\xx ', ' after'  ],
    subtitucions: [ 1  ] }
    
Javascript trata las plantillas etiquetadas de manera diferente por que nos permite usar plantillas etiquetadas para texto que no podemos poner dentro de cadenas literales, por ejemplo:

windowsPath`C:\uuu\xxx\111`
latex`\unicode`

#######################   Literales de cadena sin formato ###########################################

Se implementan mediante la funcion de etiqueta String.raw. Son cadenas de literales en que las barras diagonales inversas no hacen nada especial como caracteres de escape, etc.

console.log(String.raw`\back`)

Esto ayuda siempre que los datos contienen barras invertidas, por ejemplo, cadenas con expresiones regulares.

const regex1 = /^\./
output: /^\./

const regex2 = new RegExp('^\\.')
output: /^\./

const regex3 =new RegExp(String.raw`^\.`)
output: /^\./

Las tres expresiones regulares son equivalentes. Con un literal de cadena normal, tenemos que escribir la barra invertida dos veces, para escapar ese literal. Con un literal de cadena sin formato, no tenemos que hacer eso.

Los literales de cadena sin formato tambien son utiles para especificar rutas de nombre de archivo de Windows

const WIN_PATH = String.raw`C:\foo\bar`
output: C:\foo\bar


######################## Literales de plantilla multilinea y sangria ################

Si ponemos texto de varias lineas en literales de plantilla, hay dos objetivos en conflicto: por un lado, el literal de plantilla debe tener sangria para que quepa dentro del codigo fuente.
Por otro lado, las lineas de su contenido deben de comenzar en la columna mas a la izquierda.

EJM:

function div(text){
    return`
    <div>
    ${text}
    </div>
    `
}

console.log(div('HELLO!').replace(/ /g, '.').replace(/\n/g, '#\n'))
output:

#
....HELLO!#
....</div>#
....

Debido a la sangria, la plantilla literal encaja bien en el codigo. Por desgracia tambien tiene sangria.Y no queremos la devolucion al principio y la devolucion mas dos espacios al final. Hay dos soluciones mediante una plantilla etiquetada o recortando el resultado del literla de la plantilla. solo veremos la segunda. 


function deDented(text){
return`
<div>
    ${text}
</div>
`.trim()
    //.replace(/\n/g, '#\n')
}

console.log(deDented('¡HELLO!'))

El metodo trim() elimina los espacios en blanco superfluos al principio y al final, pero el contenido debe comenzar en la columna mas a la izquierda. La desventaja es que se ve feo. La ventaja es que no necesitamos una funcion de etiqueta personalizada

######################## Plantillas simples a traves de literles de plantilla.##########################.
Si bien los literales de plantillas(template liteals) se ven plantillas de texto(text templates), no es inmadiatamente obvio como usarlos para la creacion de plantillas de texto:

Una plantilla de texto obtiene sus datos de un objeto, mientras que un literal de plantilla obtiene sus datos de variables.

La solucion es utilizar un literal de plantilla en el cuerpo de una funcion cuyo parametro reciba los datos de plantilla, por ejemplo:

const tmpl = (data) =>` Hola ${data.name}`
console.log(tmpl({name:'yamid Gonzalez'}))

··············Un ejemplo mas Complejo:

const addresses = [
    {first: '<jane>', last:'Bone'},
    {first:'Lars', last:'<Croft>'}
]


const tmpl = (addrs) =>`
<table>
    ${addrs.map(
    (addr) => `
    <tr>
    <td>${escapeHtml(addr.first)}</td>
    <td>${escapeHtml(addr.last)}</td>
    </tr>
    `.trim()
    ).join('')}
</table>
`.trim();

Este codigo contiene dos funciones de plantillas:

 * El primero(primera linea) toma addrs una matriz con direcciones y devuelve una cadena con una tabla.
 * El segundo( cuarta linea ) toma addr un objeto que contiene una direccion y devuelve una cadena con una fila de la tabla.Tenga .trim en cuenta al final, que elimina los espacios en blanco innecesarios. 
 
La primera funcion de plantilla produce su resultado envolviendo un elemento de tabla alrededor de una matriz que une en una cadena (decima linea). Esa matriz se produce asignando la segunda funcion de plantilla a cada elemento de addrs(tercera linea).Por lo tanto contiene cadenas con filas de tabla.

La funcion auxiliar escapehtml se utiliza para escapar de caracteres HTML epeciales (linea sexta y septima).

function escapeHtml(str) {
    return str
    .replace(/&/g, '&amp;')
    .replace(/>/g, '&gt;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/`/g, '&#96;')
}

Escapamos el texto sin formato para que se muestre literalmente.

console.log(escapeHtml('uno & dos')) uno &amp; dos 
console.log(escapeHtml('uno > dos')) uno &gt; dos
console.log(escapeHtml('uno < dos')) uno &lt; dos
console.log(escapeHtml('uno \" dos')) uno &quot; dos
console.log(escapeHtml('uno \' dos')) uno &#39; dos
console.log(escapeHtml('uno \` dos')) uno &#96; dos
    */
