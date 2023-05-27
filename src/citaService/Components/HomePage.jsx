import React, { useState } from "react";
import { useSelector } from "react-redux";
import ListarCitas from "../Components/ListarCitas";

const HomePage = () => {
  const [busqueda, setBusqueda] = useState("");
  const citas = useSelector((state) => state.citas);

  const handleBuscar = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
  };

  const citasFiltradas = citas.filter((cita) =>
    cita.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <h1>Resultados de búsqueda</h1>
      <form onSubmit={handleBuscar}>
        <input
          type="text"
          placeholder="Buscar cita"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <ListarCitas />
    </div>
  );
};

export default HomePage;

// muestra un formulario de búsqueda en la parte superior y, a continuación, 
// el componente ListarCitas muestra las citas filtradas según la consulta de búsqueda.
