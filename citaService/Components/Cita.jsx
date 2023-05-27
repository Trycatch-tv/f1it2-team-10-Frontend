import React from 'react';
import ErrorBoundary from './errors/ErrorBoundary';
import Cita from '../Components/Cita';


const Cita = ({ cita }) => {
  return (
    <div>
    {/* Renderizar listas de citas y otros componentes relacionados con citas */}
    <ErrorBoundary>
      <Cita>
        <h3>{cita.titulo}</h3>
        <p>Fecha: {cita.fecha}</p>
        <p>Lugar: {cita.lugar}</p>
        <p>Duración: {cita.duracion} minutos</p>
      </Cita>
    </ErrorBoundary>
    </div>
  );
};

export default Cita;

// componente de cita individual