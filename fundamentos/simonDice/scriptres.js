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

//1) Definimos la funcion empezar el juego, inicializamos el Juego()
// 2) construimos la clase Juego, no le pasamos ningun parametro, pero inicializamos el juego, tendra la logica del juego.
//3) Primero añadira la clase hide al elemento con id btnEmpezar.

// 4) Las obtenemos de manera global.Estas funciones recibiran un string con el id del elemento a obtener btnempezar, celest,violeta,naranja,verde.
    /*5) 
     Luego de llamar inicializar llamamos a generarsecuenci.
     Difiniremos la secuencia en un atributo nuevo this.secuencia, 
     lo definimos aunque no exista y se guardara internamente en el objeto del juego.
     Generamos un Array de numeros random 
        new Array(10).fill(0).map(Math.floor(Math.random() * 4))

        Array(10) 10 elementos, es importante .fill, 
        por que al llamar a map los valores del array deben estar definidos y tener algun valor 
        aunque ese valor sea 0. Retornamos un map.random multiplicado por 4(obtenemos valores decimales desde cero a 4 sin llegar a ser 4), nos quedamos con la parte entera con Math.floor(redondeamos hacia abajo).

6) Ponemos la variable en el objeto window, para debuggerarla y ver lo que esta ppasando por consola

______________________________Como iluminar la secuencia hasta el nivel actual_________________________________________________

7) Escrinbimos this.siguienteNivel en el constructor de nuestro objeto, luego escribimos la funcion siguientenivel 
que va a llamar this.iluminar secuerncia.
luego escribimos el metodo o la funcion iluminarSecuencia, a medida que valla pasando los niveles this.nivel se va incrementando.

    siguienteNivel(){
        this.iluminarSecuencia()
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

    iluminarSecuencia(){
        for(let  i = 0;i < this.nivel;i++){
            //en los ciclos for es donde mas vamos a  ver bacthes. 
            //utilizar let antes de var y const antes de let

                un metodo que trasformara numero a color
            const color = this.transformarNumeroAColor(this.secuencia[i])

            //Debemos hacer que se ejecute iluminarColor, cada cierto tiempo (1 segundo entre ejecucion)
            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }
    }

    
    
    iluminarColor(color){
        this.colores[color].classList.add('light')
        //Le sacamos la funcion. Que dure cierto tiempo.
        
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')
    }

    */
