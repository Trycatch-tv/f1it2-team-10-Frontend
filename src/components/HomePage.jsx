import React from 'react';
import Navbar from '../components/Navbar';
import listarCita from '../components/acciones/citaService';

const HomePage = () => {
  const citas = [
    { id: 1, name: 'Cita 1' },
    { id: 2, name: 'Cita 2' },
  ];

  return (
    <div>
      <Navbar />
      <h1>Inicio</h1>
      <listarCita citas={citas} />
    </div>
  );
};

export default HomePage;