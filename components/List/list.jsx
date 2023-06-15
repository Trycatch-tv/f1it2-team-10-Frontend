import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Detail from '../Detail/detail';
import './list.css';

const List = () => {
  const [filtro, setFiltro] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const appointments = useSelector((state) => state.todoItem);
  const navigate = useNavigate();

  const appointmentsFiltered = Object.values(appointments.byIds)
    .filter((appointment) =>
      appointment.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

  const handleDetailClick = useCallback((appointment) => {
    setSelectedAppointment(appointment);
  }, []);

  const handleAddClick = () => {
    navigate('/add');
  };

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleExitClick = () => {
    navigate('/');
  };

  return (
    <div className="form">
      <h2>Lista de citas</h2>
      <div className="input-container">
        <label htmlFor="filtro">Filtrar por nombre:</label>
        <input
          type="text"
          id="filtro"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
        />
      </div>
      <ul>
        {appointmentsFiltered.map((appointment) => (
          <li key={appointment.id}>
            <div>
              <strong>Nombre:</strong> {appointment.nombre}
            </div>
            <div>
              <strong>Fecha:</strong> {appointment.fecha}
            </div>
            <div>
              <strong>Hora:</strong> {appointment.hora}
            </div>
            <div className="button-container">
              <button onClick={() => handleDetailClick(appointment)}>Ver detalles</button>
            </div>
          </li>
        ))}
      </ul>
      {appointmentsFiltered.length === 0 && (
        <div>No hay citas que coincidan con el filtro.</div>
      )}
      {selectedAppointment && <Detail appointment={selectedAppointment} onClose={() => setSelectedAppointment(null)} key={selectedAppointment.id} />}
      <div className="button-container">
        <button onClick={handleAddClick}>Add</button>
      </div>
      <div className="button-container">
        <button onClick={handleMenuClick}>Menú</button>
      </div>
      <div className="button-container">
        <button onClick={handleExitClick}>Exit</button>
      </div>
    </div>
  );
};

export default List;
