import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [duracion, setDuracion] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [detalles, setDetalles] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nombre, fecha, hora, duracion, ubicacion, detalles });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      </label>
      <label>
        Fecha:
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      </label>
      <label>
        Hora:
        <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />
      </label>
      <label>
        Duración:
        <input
          type="text"
          value={duracion}
          onChange={(e) => setDuracion(e.target.value)}
        />
      </label>
      <label>
        Ubicación:
        <input
          type="text"
          value={ubicacion}
          onChange={(e) => setUbicacion(e.target.value)}
        />
      </label>
      <label>
        Detalles:
        <textarea value={detalles} onChange={(e) => setDetalles(e.target.value)} />
      </label>
      <button type="submit">Agregar cita</button>
    </form>
  );
}

export default Form;
