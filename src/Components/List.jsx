import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Detail from './Detail.jsx';

const List = () => {
  const [filtro, setFiltro] = useState('');
  const citas = useSelector((state) => state.todoItem);

  const citasFiltradas = Object.values(citas.byIds)
    .filter((cita) =>
      cita.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

  return (
    <div className="list">
      <h2>Lista de citas</h2>
      <div>
        <label htmlFor="filtro">Filtrar por nombre:</label>
        <input
          type="text"
          id="filtro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>
      <ul>
        {citasFiltradas.map((cita) => (
          <li key={cita.id}>
            <div>
              <strong>Nombre:</strong> {cita.nombre}
            </div>
            <div>
              <strong>Fecha:</strong> {cita.fecha}
            </div>
            <div>
              <strong>Hora:</strong> {cita.hora}
            </div>
            <button>Ver detalles</button>
          </li>
        ))}
      </ul>
      {citasFiltradas.length === 0 && (
        <div>No hay citas que coincidan con el filtro.</div>
      )}
    </div>
  );
};

export default List;
