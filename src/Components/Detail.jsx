import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Detail = () => {
  const { id } = useParams();
  const [searchKeyword, setSearchKeyword] = useState('');
  const citas = useSelector((state) => state.citas);

  const filteredCitas = citas.filter((cita) =>
    cita.nombre.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const cita = filteredCitas.find((cita) => cita.id === parseInt(id));

  if (!cita) {
    return <p>Cita no encontrada</p>;
  }

  return (
    <div>
      <h2>Detalle de cita</h2>
      <p>Nombre: {cita.nombre}</p>
      <p>Fecha: {cita.fecha}</p>
      <p>Hora: {cita.hora}</p>
      <p>Ubicación: {cita.ubicacion}</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        setSearchKeyword(e.target.searchKeyword.value);
      }}>
        <input type="text" name="searchKeyword" placeholder="Buscar cita" />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
};

export default Detail;
