//https://youtu.be/0NlsJuwFsrQ
//Lista de reproduccion html, css, javascript, nodejs.

const adversario = 'Hulk';


// ====== Con switch ====== \\


/*

let loki = ''
switch (adversario){
case 'Iron-Man':
    loki = 'Magneto'
    break

case 'Hulk':
    loki = 'Thanos'
    break
case 'Thor':
    loki = 'Odin'
    break
default:
    loki = 'Loki'
}

// ====== Con If ====== \\ 
let loki = ''
if(adversario == 'Iron-Man'){
loki = 'Magneto'
}else if(adversario == 'Hulk'){
loki = 'Thanos'
}else if(adversario == 'Thor'){
loki = 'Odin'
}else{
loki = 'Loki'
}

// ====== Con un Objeto ====== \\

const LOKI_DISFRASES = {
'Iron-man': 'Magneto',
Hulk:'Thanos',
Tor: 'Odin'
}

const LOKI_DEFAULT = 'Loki'
const loki = LOKI_DISFRASES[adversario] || LOKI_DEFAULT

const LOKI_DISFRASES = {
'Iron-man': () => 'Magneto',
Hulk: () => 'Thanos',
Tor: () => 'Odin'
}

const LOKI_DEFAULT = 'Loki'
const loki = LOKI_DISFRASES[adversario]?LOKI_DISFRASES[adversario]():LOKI_DEFAULT

var loki = ''

switch(adversario){
    case 'Thor':
        loki = 'Odin'
        break
    case 'Iron-Man':
        loki = 'Magneto'
        break
    case 'Hulk':
        loki = 'Thanos'
        break
    default:
        loki = 'Loki'
}

*/

const LOKI_DISFRASES = {
    'Iron-Man': () => 'Magneto',
    Hulk: () => 'Thanos',
    Thor:() => 'Odin'
}

const LOKI_DEFAULT = 'Loki'

const loki = LOKI_DISFRASES[adversario]?LOKI_DISFRASES[adversario]():LOKI_DEFAULT

console.log(loki)
