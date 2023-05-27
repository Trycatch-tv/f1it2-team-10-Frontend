import React from "react";

const DetalleCita = ({ cita }) => {
  return (
    <div>
      <h3>{cita.titulo}</h3>
      <p>Fecha: {cita.fecha}</p>
      <p>Lugar: {cita.lugar}</p>
      <p>Duración: {cita.duracion} minutos</p>
    </div>
  );
};

export default DetalleCita;
