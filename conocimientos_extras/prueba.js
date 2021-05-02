var collection = [
    {
        name:"El colibri enjaulado",
        src:"./el_colibri_enjaulado.jpg",
        caption:"ni me acuerdo de que es"
    },
    {
        name:"Rios de aguapurpura",
        src:"<./rios_de_agua_purpura.jpg>",
        caption:"Sobre una secta y una serie de asesinatos",

    },
    {
        name:"<The Matrix>",
        src:"./the_matrix.jpg",
        caption:"<sobre la matrix>"
    }
]

function escapeHtml(src){
    return src
        .replace(/</g, '$gt;')
        .replace(/>/g, '$lt;')
}

var tagFunction = (collecs) =>`
<table>
    ${collecs.map(
        (collec) => `
        <tr>
            <td>${escapeHtml(collec.name)}</td>
            <td>${escapeHtml(collec.src)}</td>
            <td>${collec.caption}</td>
        </tr>
        `.trim()
    ).join('')}
</table>
`.trim()
console.log(tagFunction(collection))

var Template = {}

Template.contactos = [`
<h1>Contacto</h1>
<ul>
    <li>nombre</li>
    <li>Apellido</li>
</ul>
`].join(``)

console.log(Template.contactos)
