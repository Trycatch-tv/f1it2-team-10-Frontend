import React, { Component } from "react";
import { connect } from "react-redux";
import { buscarCita } from "../acciones/citaService/citasSlice/buscarCita";

const BuscarCita = () => {
  const cita = { id: 1, name: 'Cita 1' };

  return (
    <div>
      <Navbar />
      <h1>Detalles de la cita</h1>
      <buscarCita cita={cita} />
    </div>
  );
};

export default connect(null, { buscarCita })(BuscarCita);