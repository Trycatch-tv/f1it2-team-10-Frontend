import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './save.css';

const SaveCita = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [cita, setCita] = useState({ nombre: '', fecha: null, hora: null, duracion: null, ubicacion: '', detalles: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCita({ ...cita, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCita(cita));
    navigate('/citas');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="cita-form">
        <label className="cita-label">
          Nombre:
          <input type="text" name="nombre" value={cita.nombre} onChange={handleInputChange} className="cita-input" />
        </label>
        <label className="cita-label">
          Fecha:
          <DatePicker
            label="Fecha"
            value={cita.fecha}
            onChange={(newValue) => setCita({ ...cita, fecha: newValue })}
            className="cita-input"
          />
        </label>
        <label className="cita-label">
          Hora:
          <TimePicker
            label="Hora"
            value={cita.hora}
            onChange={(newValue) => setCita({ ...cita, hora: newValue })}
            className="cita-input"
          />
        </label>
        <label className="cita-label">
          Ubicación:
          <input type="text" name="ubicacion" value={cita.ubicacion} onChange={handleInputChange} className="cita-input" />
        </label>
        <label className="cita-label">
          Duración:
          <input type="text" name="duracion" value={cita.duracion} onChange={handleInputChange} className="cita-input" />
        </label>
        <label className="cita-label">
          Detalles:
          <textarea
            value={cita.detalles}
            onChange={handleInputChange}
            className="cita-input cita-textarea"
          />
        </label>
        <button type="submit" className="cita-button">Guardar cita</button>
      </form>
    </div>
  );
};

export default SaveCita;
