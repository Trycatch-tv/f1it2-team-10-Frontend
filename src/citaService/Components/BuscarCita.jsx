import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buscarCita } from "../Components/BuscarCita";
import Cita from "./Cita";

const BuscarCita = () => {
  const dispatch = useDispatch();
  const citas = useSelector((state) => state.citas);
  const [consulta, setConsulta] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const coincidencias = buscarCita(consulta, citas);
    dispatch({ tipo: "actualizarCitas", nuevaLista: coincidencias });
    setConsulta("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar cita"
        value={consulta}
        onChange={(e) => setConsulta(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default BuscarCita;

// el hook useState se utiliza para manejar el estado de la consulta de búsqueda 
// la función handleSubmit se llama cuando se envía el formulario de búsqueda. 
// Esta función utiliza la función buscarCita para filtrar las citas según la consulta 
// de búsqueda y luego llama a la acción actualizarCitas de Redux para actualizar el 
// estado de las citas en el almacenamiento.