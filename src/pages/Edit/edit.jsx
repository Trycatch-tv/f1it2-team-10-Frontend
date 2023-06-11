import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actualizarCita, eliminarCita } from '../../redux/actions/actions.js';
import Form from '../../components/Form/form';
import './edit.css';

function Edit() {
  const citas = useSelector((state) => state.citas);
  const dispatch = useDispatch();

  const handleUpdateCita = (updatedCita) => {
    dispatch(actualizarCita(updatedCita));
  };

  const handleEliminarCita = (id) => {
    dispatch(eliminarCita(id));
  };

  const citaId = {};
  const citaSeleccionada = useSelector((state) => state.citas.find((cita) => cita.id === citaId));

  return (
    <div className="container">
      <h1>Editar cita</h1>
      <Form cita={citaSeleccionada} onSubmit={handleUpdateCita} />
      <ul className="citas-list">
        {citas.map((cita) => (
          <li key={cita.id} className="cita">
            <h3>{cita.nombre}</h3>
            <p>{cita.fecha}</p>
            <button className="eliminar" onClick={() => handleEliminarCita(cita.id)}>
              Eliminar cita
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Edit;
