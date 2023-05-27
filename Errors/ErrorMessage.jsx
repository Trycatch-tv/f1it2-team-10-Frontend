import React from 'react';

function ErrorMessage({ error }) {
  return (
    <>
      {error && <h3 className="error">{error}</h3>}
    </>
  );
}

export default ErrorMessage;

// Este componente ErrorMessage verifica si la propiedad error tiene algún contenido
//  y, si es así, muestra el mensaje de error en un elemento <h3> con la clase error.