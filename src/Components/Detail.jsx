import React from 'react';
import { useDispatch } from 'react-redux';
import { eliminarCita, actualizarCita } from '../redux/actions/actions';

const Detail = ({ cita }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(eliminarCita(cita.id));
  };

  const handleToggle = () => {
    dispatch(actualizarCita(cita.id, { ...cita, completada: !cita.completada }));
  };

  return (
    <div className="detail">
      <h2>Detalles de la cita</h2>
      <div>
        <strong>Nombre:</strong> {cita.nombre}
      </div>
      <div>
        <strong>Fecha:</strong> {cita.fecha}
      </div>
      <div>
        <strong>Hora:</strong> {cita.hora}
      </div>
      <div>
        <strong>Duración:</strong> {cita.duracion} minutos
      </div>
      <div>
        <strong>Detalles:</strong> {cita.detalles}
      </div>
      <div>
        <strong>Completada:</strong>{' '}
        {cita.completada ? 'Sí' : 'No'}
      </div>
      <button onClick={handleToggle}>
        {cita.completada ? 'Marcar como no completada' : 'Marcar como completada'}
      </button>
      <button onClick={handleDelete}>Eliminar cita</button>
    </div>
  );
};

export default Detail;
