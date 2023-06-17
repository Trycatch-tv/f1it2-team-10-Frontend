import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { crearCita, actualizarCita, eliminarCita } from '../../redux/reducer/reducers';
import CrearCita from '../CrearCita/crearCita';

export default function Actualizar() {
  const citas = useSelector((state) => state.citas);
  const dispatch = useDispatch();

  const handleActualizarCita = useCallback((cita) => {
    dispatch(actualizarCita(cita));
  }, [dispatch]);
  
  const handleEliminarCita = useCallback((id) => {
    dispatch(eliminarCita(id));
  }, [dispatch]);

  const [citaSelectId, setCitaSelectId] = useState(null);

  const citaSelect = useSelector((state) => state.citas.find((cita) => cita.id === citaSelectId));

  const navigate = useNavigate();
  const [cita, setCita] = useState({ nombre: '', fecha: '', hora: '', duracion: '', ubicacion: '', detalles: '' });
  
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
    <div className="container">
      {citaSelect ? (
        <>
          <CrearCita cita={citaSelect} onSubmit={handleActualizarCita} />
          <button className="eliminar" onClick={() => handleEliminarCita(citaSelect.id)}>
            Eliminar cita
          </button>
        </>
      ) : (
        <button className="seleccionar" onClick={() => setCitaSelectId(citas[0].id)}>
          Seleccionar cita
        </button>
      )}
      <form onSubmit={handleSubmit} className="cita-form">
        <label className="cita-label">
          Nombre:
          <input type="text" name="nombre" value={cita.nombre} onChange={handleInputChange} className="cita-input" />
        </label>
        <label className="cita-label">
          Fecha:
          <input
            type="date"
            value={cita.fecha}
            onChange={handleInputChange}
            name="fecha"
            className="cita-input"
          />
        </label>
        <label className="cita-label">
          Hora:
          <input
            type="time"
            value={cita.hora}
            onChange={handleInputChange}
            name="hora"
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
            name="detalles"
            value={cita.detalles}
            onChange={handleInputChange}
            className="cita-input cita-textarea"
          />
        </label>
        <button type="submit" className="cita-button">Guardar cita</button>
      </form>
    
      <h1>Actualizar cita</h1>
      <ul className="citas-list">
        {citas.map((cita, id) => (
          <li key={id} className="cita">
            <h3>{cita.nombre}</h3>
            <p>{cita.fecha}</p>
            <button className="seleccionar" onClick={() => setCitaSelectId(cita.id)}>
              Seleccionar Cita
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

