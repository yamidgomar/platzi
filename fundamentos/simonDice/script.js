const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById("celeste")
const violeta = document.getElementById("violeta")
const naranja = document.getElementById("naranja")
const verde = document.getElementById("verde")

class Juego {
    constructor(){
        this.inicializar()    
        this.generarSecuencia()
        this.siguienteNivel()
    }
    
    inicializar(){
        btnEmpezar.classList.add("hide")
        this.nivel = 5 
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(n=> Math.floor(Math.random() * 4))
    }

    siguienteNivel(){
        this.iluminarSecuencia()
    }
    
    transformarNumeroAColor(numero){
        switch (numero){
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
        for(let i = 0; i < this.nivel; i++){
            //en los ciclos for es donde mas vamos a  ver bacthes. 
            //utilizar let antes de var y const antes de let

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
