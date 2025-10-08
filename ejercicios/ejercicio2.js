// Ejercicio 2

/*Crea un prompt para que Copilot genere un componente en React que:
- Muestre un contador.
- Permita incrementarlo con un botón.
*/
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

export default Contador;    
