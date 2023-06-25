import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { crearCita, actualizarCita, recuperarCita, eliminarCita } from '../../redux/actions/actions';
import CrearCita from '../CrearCita/crearCita';
import './actualizarCita.css';

export default function Actualizar() {
  const citas = useSelector((state) => state.citas);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleActualizarCita = useCallback((cita) => {
    dispatch(actualizarCita(cita));
  }, [dispatch]);

  const handleGuardarCita = useCallback((cita) => {
    dispatch(crearCita(cita));
  }, [dispatch]); 

  const handleRecuperarCita = useCallback((id) => {
    dispatch(recuperarCita(id));
  }, [dispatch]);

  const handleEliminarCita = useCallback((id) => {
    dispatch(eliminarCita(id));
  }, [dispatch]);

  const [citaSelectId, setCitaSelectId] = useState(null);
  const citaSelect = useSelector((state) => state.citas.find((cita) => cita.id === citaSelectId));

  const [cita, setCita] = useState({
    id: '',
    nombre: '',
    fecha: '',
    hora: '',
    duracion: '',
    ubicacion: '',
    detalles: '',
    estado: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCita({ ...cita, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(crearCita(cita));
    navigate('/detalle');
  };

  return (
    <div className="citaForm">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="encabezado">Actualizar cita</h2>
        <div className="input-container">
          <label htmlFor="id" className="label">
            Id:
            <input
              type="number"
              name="id"
              value={cita.id}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="nombre" className="label">
            Nombre:
            <input
              type="text"
              name="nombre"
              value={cita.nombre}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="fecha" className="label">
            Fecha:
            <input
              type="date"
              name="fecha"
              value={cita.fecha}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="hora" className="label">
            Hora:
            <input
              type="time"
              name="hora"
              value={cita.hora}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="ubicacion" className="label">
            Ubicación:
            <input
              type="text"
              name="ubicacion"
              value={cita.ubicacion}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="duracion" className="label">
            Duración:
            <input
              type="text"
              name="duracion"
              value={cita.duracion}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="detalles" className="label">
            Detalles:
            <textarea
              name="detalles"
              value={cita.detalles}
              onChange={handleInputChange}
              required
            ></textarea>
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="estado" className="label">
            Estado:
            <input
              type="text"
              name="estado"
              value={cita.estado}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        <button type="submit" className="button-clicked">
          Guardar cita
        </button>

        <button className="button-clicked" onClick={() => setCitaSelectId(cita.id)}>
          Seleccionar Cita
        </button>
        <ul className="submit">
        {citas.map((cita, id) => (
            <li key={id}>
              <span>{cita.nombre}</span>
              <button onClick={() => handleRecuperarCita(cita.id)}>Recuperar</button>
              <button onClick={() => handleEliminarCita(cita.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </form>

      {citaSelect && (
        <CrearCita
          cita={citaSelect}
          handleGuardarCita={handleGuardarCita}
          handleActualizarCita={handleActualizarCita}
        />
      )}
    </div>
  );
}