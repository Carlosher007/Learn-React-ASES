import { useState } from "react"

export function Contador(){

  const [contador, setContador] = useState(0)

  function handleClick() {
    setContador(contador+1)
  }

  return(
    <button onClick={handleClick}>
      {contador}
    </button>
  )
}