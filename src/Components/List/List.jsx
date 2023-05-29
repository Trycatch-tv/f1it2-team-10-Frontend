import React from 'react';

function filterCitas(citas, terminoBusqueda) {
  if (!terminoBusqueda) {
    return citas;
  }

  return citas.filter((cita) =>
    cita.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );
}

function List({ citas, eliminarCita, actualizarCita, terminoBusqueda }) {
  const filteredCitas = filterCitas(citas, terminoBusqueda);

  return (
    <div>
      {filteredCitas.map((cita) => (
        <div key={cita.id}>
          <p>Nombre: {cita.nombre}</p>
          <p>Fecha: {cita.fecha}</p>
          <p>Hora: {cita.hora}</p>
          <p>Duración: {cita.duracion}</p>
          <p>Ubicación: {cita.ubicacion}</p>
          <p>Detalles: {cita.detalles}</p>
          <button onClick={() => eliminarCita(cita.id)}>Eliminar</button>
          <button onClick={() => actualizarCita(cita)}>Editar</button>
        </div>
      ))}
    </div>
  );
}

export default List;
