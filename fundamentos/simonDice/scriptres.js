const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const ULTIMO_NIVEL = 10

class Juego {
    constructor(){
        //6
        //Ejecutamos el inicio con una demora corta
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 500)
    }

    inicializar(){
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        btnEmpezar.classList.add('hide')
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }

        this.nivel = 1 
    }

    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4)) 
    }

    siguienteNivel(){
        /*
         * Agregamos un subnivel, cada vez que pasamos de nivel el nivel se va incrementado cuando hace la secuencia correcta el usuario
         *
         Nota: cada vez que queremos declarar atributos podemos hacerlos sin estar declarados en algun otro lado
            this.nombreAtributo = 'valor'*/
        this.subnivel = 0;
        this.iluminarSecuenacia()
        this.agregasrEventosClick()
    }

    transformarNumeroAColor(numero){
        switch(numero){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }

    transformarColorANumero(color){
        switch(color){
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }

    iluminarSecuenacia(){
        for(let i = 0; i < this.nivel; i++){
            const color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }

    agregasrEventosClick(){
        /* 1)

         Agregamos el evento a cada color,
         hacemos referencia al this del objeto no del browser.
         this.elegircolor = this.elegircolor.bind(this), del metodo inicializar.
         */
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
    }

    eliminarEventosClick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)

    } 

    elegirColor(ev){
        /* 2)

         Recibe el evento, recibimos el atributo dataset y dentro tendremos el color que clickeo el usuario viene del data-color atributo html.
         Despues vemos el numero del color que eligio el usuario. trnsformamos el color a numero para ver si conside con la secuencia,
        const numeroColor = this.transformarColorANumero(nombreColor)
        Lo primero que podemos hacer es iluminarlos, const nombreColor = ev.target.dataset.color
        */
        const nombreColor = ev.target.dataset.color 
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subnivel]){

            /*
             Si el usuario elige bien incrementamos el subnivel.
            */
            this.subnivel++

            //comparamos subnivel y nivel si son iguales incrementamos el nivel

            if(this.subnivel === this.nivel){
                this.nivel++
                this.eliminarEventosClick
                if(this.nivel == (ULTIMO_NIVEL + 1)){
                    //GANO
                }else {
                    // La secuencia se ilumina muy rapido en el siguiente nivel,le damos un tiempo de 2 seg., 
                    // Hacemos referncia a la funcion ,no la estamos invocando pero diciendole la funcion que debe llamar
                    // settimeout delega en el navegador la funcion que le pasamos, convirtiendo a this en wimdow añadimos bind(this) en inicializa this.siguientenivel = this.siguientenivel.bind(this) siempre this del siguienteNivel va estar atado al juego.
                    setTimeout(this.siguienteNivel, 1500)
                }
            }
        }else{
            //PERDIO
        }
    }
}

function empezarJuego(){
    window.juego = new Juego()
}
