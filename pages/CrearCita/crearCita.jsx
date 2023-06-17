import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { crearCita } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import './crearCita.css';

const CrearCita = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nombre: '',
    fecha: '',
    hora: '',
    duracion: '',
    ubicacion: '',
    detalles: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      crearCita({
        nombre: formValues.nombre,
        fecha: formValues.fecha,
        hora: formValues.hora,
        duracion: formValues.duracion,
        ubicacion: formValues.ubicacion,
        detalles: formValues.detalles,
        completada: false,
      })
    );
    setFormValues({
      nombre: '',
      fecha: '',
      hora: '',
      duracion: '',
      ubicacion:'',
      detalles: '',
    });
    navigate('/detalle');
  };

  const handleMenuClick = () => {
    navigate('/menu');
  };

  const handleDetalleClick = () => {
    navigate('/detalle');
  };

  const handleExitClick = () => {
    navigate('/');
  };

  const { nombre, fecha, hora, duracion, ubicacion, detalles } = formValues;


  return (
    <div className="crearCita">
      <form onSubmit={handleSubmit} className="form">
        <h1>CitaSync</h1>
        <h2>Añadir cita</h2>
        <div className="input-container">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="fecha">Fecha:</label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            value={fecha}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="hora">Hora:</label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={hora}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="duracion">Duración:</label>
          <input
            type="number"
            id="duracion"
            name="duracion"
            value={duracion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="ubicacion">Ubicación:</label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            value={ubicacion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="detalles">Detalles:</label>
          <textarea
            id="detalles"
            name="detalles"
            value={detalles}
            onChange={handleChange}
            required
          ></textarea>
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
          className={handleDetalleClick ? 'button-clicked' : ''}
          onClick={handleDetalleClick}>
          Detail
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
      </form>
    </div>
  );
};

export default CrearCita;
