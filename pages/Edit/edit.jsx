import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createAppointment, editAppointment, deleteAppointment } from '../../redux/reducer/reducers';
import CreateForm from '../CreateForm/createForm';

function Edit() {
  const appointments = useSelector((state) => state.appointments);
  const dispatch = useDispatch();

  const handleEditAppointment = (appointment) => {
    dispatch(editAppointment(appointment));
  };

  const handleDeleteAppointment = (id) => {
    dispatch(deleteAppointment(id));
  };

  const [appointmentSelectId, setAppointmentSelectId] = useState(null);

  const appointmentSelect = useSelector((state) => state.appointments.find((appointment) => appointment.id === appointmentSelectId));

  const navigate = useNavigate();
  const [appointment, setAppointment] = useState({ nombre: '', fecha: '', hora: '', duracion: '', ubicacion: '', detalles: '' });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAppointment(appointment));
    navigate('/createForm');
  };

  return (
    <div className="container">
      {appointmentSelect ? (
        <>
          <CreateForm appointment={appointmentSelect} onSubmit={handleEditAppointment} />
          <button className="eliminar" onClick={() => handleDeleteAppointment(appointmentSelect.id)}>
            Eliminar cita
          </button>
        </>
      ) : (
        <button className="seleccionar" onClick={() => setAppointmentSelectId(appointments[0].id)}>
          Seleccionar cita
        </button>
      )}
      <form onSubmit={handleSubmit} className="cita-form">
        <label className="cita-label">
          Nombre:
          <input type="text" name="nombre" value={appointment.nombre} onChange={handleInputChange} className="cita-input" />
        </label>
        <label className="cita-label">
          Fecha:
          <input
            type="date"
            value={appointment.fecha}
            onChange={handleInputChange}
            name="fecha"
            className="cita-input"
          />
        </label>
        <label className="cita-label">
          Hora:
          <input
            type="time"
            value={appointment.hora}
            onChange={handleInputChange}
            name="hora"
            className="cita-input"
          />
        </label>
        <label className="cita-label">
          Ubicación:
          <input type="text" name="ubicacion" value={appointment.ubicacion} onChange={handleInputChange} className="cita-input" />
        </label>
        <label className="cita-label">
          Duración:
          <input type="text" name="duracion" value={appointment.duracion} onChange={handleInputChange} className="cita-input" />
        </label>
        <label className="cita-label">
          Detalles:
          <textarea
            name="detalles"
            value={appointment.detalles}
            onChange={handleInputChange}
            className="cita-input cita-textarea"
          />
        </label>
        <button type="submit" className="cita-button">Guardar cita</button>
      </form>
    
      <h1>Editar cita</h1>
      <ul className="citas-list">
        {appointments.map((appointment, index) => (
          <li key={index} className="cita">
            <h3>{appointment.nombre}</h3>
            <p>{appointment.fecha}</p>
            <button className="seleccionar" onClick={() => setAppointmentSelectId(appointment.id)}>
              Seleccionar cita
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Edit;
