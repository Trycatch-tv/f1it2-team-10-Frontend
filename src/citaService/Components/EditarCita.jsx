import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateCita } from "../../Redux/actions.js/citaActions";

const EditarCita = ({ cita }) => {
  const [descripcion, setDescripcion] = useState(cita.descripcion);
  const dispatch = useDispatch();

  const handleActualizarCita = (e) => {
    e.preventDefault();
    dispatch(updateCita(cita.id, descripcion));
    setDescripcion("");
  };

  return (
    <div>
      <label htmlFor={cita.id}>Descripción:</label>
      <textarea
        id={cita.id}
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <button onClick={handleActualizarCita}>Actualizar</button>
    </div>
  );
};

export default EditarCita;


// el hook useState maneja el estado de la descripción de la cita a editar
// el hook useDispatch es para acceder al método updateCita de Redux. Cuando se hace 
// clic en el botón "Actualizar", se llama a la función handleActualizarCita que actualiza 
// la cita en Redux y limpia el campo de texto.