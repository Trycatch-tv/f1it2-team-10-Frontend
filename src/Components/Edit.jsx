import React, { useState, useEffect } from 'react';

function Edit({ cita, actualizarCita, cancelarEdicion }) {
  const [detalleCita, setDetalleCita] = useState(cita);

  useEffect(() => {
    setDetalleCita(cita);
  }, [cita]);

  const handleChange = (e) => {
    setDetalleCita({ ...detalleCita, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarCita(detalleCita);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Cita</h2>
      <label htmlFor="nombre">Nombre: </label>
      <input
        name="nombre"
        type="text"
        placeholder="Nombre"
        value={detalleCita.nombre}
        onChange={handleChange}
      />
      {/* Agrega más campos según los detalles de la cita */}
      <button type="submit">Actualizar</button>
      <button onClick={cancelarEdicion}>Cancelar</button>
    </form>
  );
}

export default Edit;
