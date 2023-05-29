import React from 'react';
import { useGlobalState } from '../GlobalState';
import { Link } from 'react-router-dom';

const Home = () => {
  const { citas } = useGlobalState();

  return (
    <div>
      <h1>Lista de citas</h1>
      <ul>
        {citas.map((cita) => (
          <li key={cita.id}>
            <Link to={`/detail/${cita.id}`}>
              <h3>{cita.nombre}</h3>
              <p>{cita.fecha}</p>
              <p>{cita.hora}</p>
              <p>{cita.duracion}</p>
              <p>{cita.ubicacion}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
