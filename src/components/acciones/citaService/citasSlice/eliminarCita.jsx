import React, { Component } from "react";
import { connect } from "react-redux";
import { eliminarCita } from "../acciones/citaService/citasSlice/eliminarCita";

const EliminarCita = ({ cita, onDelete }) => {

  const handleDelete = () => {
    if (window.confirm('¿Está seguro de que desea eliminar esta cita?')) {
      onDelete(cita.id);
    }
  };

  return (
    <div>
      <h2>{cita.name}</h2>
      <p>Fecha: {cita.date}</p>
      <p>Hora: {cita.time}</p>
      <p>Duración: {cita.duration} minutos</p>
      <p>Ubicación: {cita.location}</p>
    </div>
  )
  };

export default connect(null, { eliminarCita })(EliminarCita);