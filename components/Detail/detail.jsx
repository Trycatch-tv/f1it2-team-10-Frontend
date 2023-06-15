import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { deleteAppointment, editAppointment } from '../../redux/actions/actions';
import styles from './detail.module.css';

const Detail = ({ appointment, onClose = () => {} }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [buttonClicked, setButtonClicked] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteAppointment(appointment.id));
  };

  const handleToggle = () => {
    dispatch(editAppointment(appointment.id, { ...appointment, completada: !appointment.completada }));
  };

  const handleClick = () => {
    setButtonClicked(true);
    onClose();
  };

  useEffect(() => {
    if (buttonClicked) {
      navigate('/login');
    }
  }, [buttonClicked, navigate]);

  const handleMenuClick = () => {
    navigate('/menu');
  };

  if (!appointment) {
    return (
      <div>
        <p>Loading...</p>
        <button className={styles.buttonBack}
         onClick={() => navigate('/menu')}>Back to Menu</button>
      </div>
    );
  }
  
  return (
    <div className="formDetail">
      <form className={styles.inputContainer}>
        <h2>Detalles de la cita</h2>
        <div>
          <strong>Nombre:</strong> {appointment.nombre}
        </div>
        <div>
          <strong>Fecha:</strong> {appointment.fecha}
        </div>
        <div>
          <strong>Hora:</strong> {appointment.hora}
        </div>
        <div>
          <strong>Duración:</strong> {appointment.duracion} minutos
        </div>
        <div>
          <strong>Detalles:</strong> {appointment.detalles}
        </div>
        <div>
          <strong>Completada:</strong> {appointment.completada ? 'Sí' : 'No'}
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handleToggle} className={styles.button}>
            {appointment.completada ? 'Marcar como no completada' : 'Marcar como completada'}
          </button>
          <button onClick={handleDelete} className={styles.button}>Delete</button>
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="button"
            className={buttonClicked ? styles.buttonClicked : ''}
            onClick={handleMenuClick}
          >
            Menú
          </button>
        </div>
        <div className={styles.buttonContainer}>
          <button
            type="submit"
            className={buttonClicked ? styles.buttonClicked : ''}
            onClick={handleClick}>
            Exit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Detail;
