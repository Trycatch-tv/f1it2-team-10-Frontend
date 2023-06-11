import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearCita } from '../../redux/actions/actions';
import './form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [duracion, setDuracion] = useState('');
  const [detalles, setDetalles] = useState('');
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      crearCita({
        nombre,
        fecha,
        hora,
        duracion,
        detalles,
        completada: false,
      })
    );
    setNombre('');
    setFecha('');
    setHora('');
    setDuracion('');
    setDetalles('');
  };

  const handleButtonClick = () => {
    setButtonClicked(!buttonClicked);
  };

  return (
    <div className="form-container form-center">
      <form onSubmit={handleSubmit} className="form">
        <h1>CitaSync</h1>
        <h2>Añadir cita</h2>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="hora">Hora:</label>
          <input
            type="time"
            id="hora"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="duracion">Duración:</label>
          <input
            type="number"
            id="duracion"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="detalles">Detalles:</label>
          <textarea
            id="detalles"
            value={detalles}
            onChange={(e) => setDetalles(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className={buttonClicked ? 'button-clicked' : ''}
          onClick={handleButtonClick}
        >
          Añadir cita
        </button>
      </form>
    </div>
  );
};

export default Form;
