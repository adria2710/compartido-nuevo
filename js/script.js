

const btnpierda = document.getElementById("piedra");
const btnpapel = document.getElementById("papel");
const btntijera = document.getElementById("tijera");
const contador_usuario = document.getElementById("contador-usuario");
const contador_ordenador = document.getElementById("contador-ordenador");
let puntuacionUsuario = 0;
let puntuacionOrdenador = 0;


function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
      if (jugadaUsuario === jugadaOrdenador) {
        return 'Empate';
      } else if (
         (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
        (jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
        (jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
      ) {
        return '¡Ganaste!';
      } else {
        return '¡Perdiste!';
      }
    console.log(jugadaOrdenador)
}

console.log(obtenerResultado("papel","piedra"))
    btnpierda.addEventListener("click",function(){
        obtenerResultado("piedra","papel")
    })
    btnpapel.addEventListener("click",function(){
        obtenerResultado("papel","papel")
    })
    btntijera.addEventListener("click",function(){
        obtenerResultado("tijera","papel")
    })

    console.log(contador_ordenador,contador_usuario)