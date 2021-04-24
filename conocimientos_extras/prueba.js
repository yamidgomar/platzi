var div = (text) => {
    return`
<div>
    ${text}
</div>
`.trim().replace(/\n/g, '#\n')
}

console.log(div('Hello'))
