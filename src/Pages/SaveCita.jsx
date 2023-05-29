import React, { useState } from 'react';
import { useGlobalState } from '../context/GlobalState';
import { DateField, TimeField, DateTimePicker } from '@mui/lab';

const SaveCita = () => {
  const { agregarCita, eliminarCita, citas } = useGlobalState();
  const [cita, setCita] = useState({ nombre: '', fecha: '', hora: '', duracion: '', ubicacion: '', detalles: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCita({ ...cita, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = citas.length + 1;
    await agregarCita({ nombre, fecha, hora, duracion, ubicacion, detalles, id });
    setCita({ nombre, fecha, hora, duracion, ubicacion, detalles });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="nombre" value={cita.nombre} onChange={handleInputChange} />
        </label>
        <label>
          Fecha:
          <DateField
            label="Fecha"
            value={cita.fecha}
            onChange={(newValue) => setCita({ ...cita, fecha: newValue })}
          />
        </label>
        <label>
          Hora:
          <TimeField
            label="Hora"
            value={cita.hora}
            onChange={(newValue) => setCita({ ...cita, hora: newValue })}
          />
        </label>
        <label>
          Ubicación:
          <DateField
            label="Ubicación"
            value={cita.ubicacion}
            onChange={(newValue) => setCita({ ...cita, ubicacion: newValue })}
          />
        </label>
        <label>
          Duración:
          <DatePicker
            label="Duración"
            value={cita.duracion}
            onChange={(newValue) => setCita({ ...cita, duracion: newValue })}
          />
        </label>
        <label>
          Detalles:
          <textarea value={cita.detalles} onChange={handleInputChange} />
        </label>
      </form>
      <button type="submit">Guardar cita</button>
    </div>
  );
};

export default SaveCita;
