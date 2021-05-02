var addresses = [
    {name:'James',last:'<Bond>'},
    {name:'<Lara>',last:'Bond'}
]

const tpl = (addrs) => `
<table>
    ${addrs.map((adr) =>`
    <tr>
        <td>${escapeHtml(adr.name)}</td>
        <td>${escapeHtml(adr.last)}</td>
    </tr>`.trim()
    ).join('')} 
</table>
`.trim()

const escapeHtml = (str) => {
    return str
        .replace(/</g, '&gt;')
        .replace(/>/g, '&lt;')

}

console.log(tpl(addresses))
