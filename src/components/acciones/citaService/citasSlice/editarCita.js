import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import { citaService } from '../acciones/citaService';

const EditarCita = ({ match, history }) => {
  const [cita, setCita] = useState(null);
  const citaId = match.params.id;

  useEffect(() => {
    citaService.getById(citaId).then((data) => setCita(data));
  }, [citaId]);

  const handleSubmit = (updatedCita) => {
    citaService.update(citaId, updatedCita).then(() => {
      alert('Cita actualizada');
      history.push('/');
    });
  };

  if (!cita) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Navbar />
      <h1>Editar cita</h1>
      <Form
        onSubmit={handleSubmit}
        initialValues={{
          name: cita.name,
          date: cita.date,
          time: cita.time,
          duration: cita.duration,
          location: cita.location,
          details: cita.details,
          dateTime: cita.dateTime,
        }}
      />
    </div>
  );
};

export default EditarCita;