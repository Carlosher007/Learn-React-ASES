import { useState } from "react"
import confetti from 'canvas-confetti'


export function Boton() {
  const [estado, cambiarEstado] = useState(false)

  function handleClick() {
    if (estado) { 
      cambiarEstado(false)
    } else { 
      cambiarEstado(true)
    }
    confetti()
  }

  /*
  OPERADOR TERNARIO
  SicondicionSeCumple ? Verdad : Falso
  */

  return (
    <button onClick={handleClick}>
      {
        estado===true ? "Me gusto" : "No me gusto"
      }
    </button>
  )
}