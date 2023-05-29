import React from 'react';
import { useGlobalState } from '../context/GlobalState';
import Form from './Form';

function NewCita() {
  const { citas, agregarCita, eliminarCita } = useGlobalState();

  const handleAddCita = (nuevaCita) => {
    agregarCita(nuevaCita);
  };

  const handleEliminarCita = (id) => {
    eliminarCita(id);
  };

  return (
    <div>
      <h1>Agregar cita</h1>
      <Form onSubmit={handleAddCita} />
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            <h3>{cita.nombre}</h3>
            <p>{cita.fecha}</p>
            <button onClick={() => handleEliminarCita(cita.id)}>
              Eliminar cita
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewCita;
