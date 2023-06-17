import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Detalle from '../Detalle/detalle';
import './listarCitas.css';

const ListarCitas = () => {
  const [filtro, setFiltro] = useState('');
  const [selectedCita, setSelectedCita] = useState(null);
  const citas = useSelector((state) => state.citas) ?? {};
  const navigate = useNavigate();

  const citasFiltered = Object.values(citas.byIds?.() ?? [])
    .filter((cita) =>
      cita.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

  const handleDetalleClick = useCallback((selectedCita) => {
    setSelectedCita(selectedCita);
  }, []);

  const handleAddClick = () => {
    navigate('/crearCita');
  };

  const handleDeleteClick = () => {
    navigate('/menu');
  };

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleExitClick = () => {
    navigate('/');
  };

  return (
    <div className="listar-form">
      <h2 className="title">Lista de citas</h2>
      <div className="label-container">
        <label htmlFor="filtro">Filtrar por nombre:</label>
        <input
          type="text"
          id="filtro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>
      {citasFiltered.length === 0 ? (
        <div>No hay citas que coincidan con el filtro.</div>
      ) : (
        <ul>
          {citasFiltered.map((cita) => (
            <li key={cita.id}>
              <div>
                <strong className="strong">Nombre:</strong> {cita.nombre}
              </div>
              <div>
                <strong>Fecha:</strong> {cita.fecha}
              </div>
              <div>
                <strong>Hora:</strong> {cita.hora}
              </div>
              <div className="button-detalles">
                <button onClick={() => handleDetalleClick(cita)}>Ver detalles</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {selectedCita && (
        <Detalle
          cita={selectedCita}
          onClose={() => setSelectedCita(null)}
          key={selectedCita.id}
        />
      )}
        <div className="button-container">
        <button
          type="button"
          className={handleAddClick ? 'button-clicked' : ''}
          onClick={handleAddClick}>
          Add
        </button>
        </div>
        <div className="button-container">
        <button
          type="button"
          className={handleDeleteClick ? 'button-clicked' : ''}
          onClick={handleDeleteClick}>
          Delete
        </button>
        </div>
        <div className="button-container">
        <button
          type="button"
          className={handleMenuClick ? 'button-clicked' : ''}
          onClick={handleMenuClick}>
          Menú
        </button>
        </div>
        <div className="button-container">
        <button
          type="button"
          className={handleExitClick ? 'button-clicked' : ''}
          onClick={handleExitClick}>
          Exit
        </button>
        </div>
    </div>
  );
};

export default ListarCitas;

