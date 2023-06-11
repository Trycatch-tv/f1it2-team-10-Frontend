import React from 'react';
import { useDispatch } from 'react-redux';
import { crearCita } from '../../redux/actions/actions.js';
import Form from '../../components/Form/form';
import './create.css';

const Create = () => {
  const dispatch = useDispatch();

  const handleSubmit = (cita) => {
    dispatch(createCita(cita));
  };

  return (
    <div className="container">
      <h1>Crear nueva cita</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Create;
