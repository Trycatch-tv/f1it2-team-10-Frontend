import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAppointment } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';
import './createForm.css';

const CreateForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    nombre: '',
    fecha: '',
    hora: '',
    duracion: '',
    detalles: '',
  });
  const [submitClicked, setSubmitClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createAppointment({
        nombre: formValues.nombre,
        fecha: formValues.fecha,
        hora: formValues.hora,
        duracion: formValues.duracion,
        detalles: formValues.detalles,
        completada: false,
      })
    );
    setFormValues({
      nombre: '',
      fecha: '',
      hora: '',
      duracion: '',
      detalles: '',
    });
    setSubmitClicked(true);
  };

  const { nombre, fecha, hora, duracion, detalles } = formValues;

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
    <div className="createForm">
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
          type="submit"
          className={handleAddClick ? 'button-clicked' : ''}
        >
          Add
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
        </form>
    </div>
  );
};

export default CreateForm;