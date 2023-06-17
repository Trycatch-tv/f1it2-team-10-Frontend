import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { actualizarCita, eliminarCita } from '../../redux/actions/actions';
import './detalle.css';

const Detalle = ({ cita }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteClick = () => {
    if (cita) {
      dispatch(eliminarCita(cita.id));
    }
    navigate('/menu');
  };

  const handleToggle = () => {
    if (cita) {
      dispatch(
        actualizarCita(cita.id, {
          ...cita,
          agendada: !cita.agendada,
        })
      );
    }
  };

  const handleAddClick = () => {
    navigate('/crearCita');
  };

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleExitClick = () => {
    navigate('/');
  };

  const defaultCita = {
    nombre: '',
    fecha: '',
    hora: '',
    duracion: '',
    ubicacion: '',
    detalles: '',
    estado: false,
  };

  const displayCita = cita || defaultCita;

  return (
    <div>
      <div className="detalle-form">
        <h2 className="title">Detalles de la cita</h2>
        <div>
          <strong className="strong">Nombre:</strong>{displayCita.nombre}
        </div>
        <div>
          <strong>Fecha:</strong> {displayCita.fecha}
        </div>
        <div>
          <strong>Hora:</strong> {displayCita.hora}
        </div>
        <div>
          <strong>Duración:</strong> {displayCita.duracion} minutos
        </div>
        <div>
          <strong>Ubicación:</strong> {displayCita.ubicacion}
        </div>
        <div>
          <strong>Detalles:</strong> {displayCita.detalles}
        </div>
        <div>
          <strong>Estado:</strong> {displayCita.estado ? 'Sí' : 'No'}
        </div>
      </div>
      {!cita ? (
        <div className="cita-detalles">
          <h2>No hay cita creada</h2>
          <p>Por favor, crea una cita para ver sus detalles</p>
        </div>
      ) : (
         <div className="button-detalle">
            <button onClick={handleToggle} type="submit" disabled={!cita}>
              {displayCita.estado
                ? 'Marcar como no agendada'
                : 'Marcar como agendada'}
            </button>
          </div>
           )}
           <div className="button-container">
        <button className="button-add"
          type="button" class={handleAddClick ? 'button-clicked' : ''}
          onClick={handleAddClick}>
          Add
        </button>
        </div>
        <div className="button-container">
        <button className="button-delete"
          type="button" class={handleDeleteClick ? 'button-clicked' : ''}
          onClick={handleDeleteClick}>
          Delete
        </button>
        </div>
        <div className="button-container">
        <button className="button-menu"
          type="button" class={handleMenuClick ? 'button-clicked' : ''}
          onClick={handleMenuClick}>
          Menú
        </button>
        </div>
        <div className="button-container">
        <button className="button-exit"
          type="button" class={handleExitClick ? 'button-clicked' : ''}
          onClick={handleExitClick}>
          Exit
        </button>
        </div>
    </div>
  );
};

export default Detalle;
