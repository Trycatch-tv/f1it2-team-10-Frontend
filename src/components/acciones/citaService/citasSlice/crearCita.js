import React, { Component } from "react";
import { connect } from "react-redux";
import { crearCita } from "../acciones/citaService/citasSlice/crearCita";
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import { citaService } from '../acciones/citaService';

const CrearCita = ({ history }) => {
  const handleSubmit = (cita) => {
    citaService.create(cita).then(() => {
      alert('Cita creada');
      history.push('/');
    }).catch((error) => {
      alert(`Error al crear la cita: ${error.message}`);
    });
  };


  return (
    <div>
      <Navbar />
      <h1>Crear cita</h1>
      <Form onSubmit={handleSubmit} />
    </div>
  );
};


export default connect(null, { crearCita })(CrearCita);