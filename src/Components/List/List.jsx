import React, { useState } from 'react';
import Edit from './Edit';

function filterCitas(citas, terminoBusqueda) {
  if (!terminoBusqueda) {
    return citas;
  }

  return citas.filter((cita) =>
    cita.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );
}

function List({ citas, eliminarCita, terminoBusqueda }) {
  const filteredCitas = filterCitas(citas, terminoBusqueda);
  const [citaEnEdicion, setCitaEnEdicion] = useState(null);

  const cancelarEdicion = () => {
    setCitaEnEdicion(null);
  };

  const handleActualizarCita = (citaActualizada) => {
    // Actualiza la cita en el array de citas
    // Puedes utilizar el ID de la cita para encontrarla y actualizarla
  };

  return (
    <div>
      {filteredCitas.map((cita) => (
        <div key={cita.id}>
          {citaEnEdicion && citaEnEdicion.id === cita.id ? (
            <Edit
              cita={citaEnEdicion}
              actualizarCita={handleActualizarCita}
              cancelarEdicion={cancelarEdicion}
            />
          ) : (
            <>
              <p>Nombre: {cita.nombre}</p>
              <p>Fecha: {cita.fecha}</p>
              <p>Hora: {cita.hora}</p>
              <p>Duración: {cita.duracion}</p>
              <p>Ubicación: {cita.ubicacion}</p>
              <p>Detalles: {cita.detalles}</p>
              <button onClick={() => eliminarCita(cita.id)}>Eliminar</button>
              <button onClick={() => setCitaEnEdicion(cita)}>Editar</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default List;

