import React from "react";
import { connect } from "react-redux";
import { listarCitas } from "../acciones/citaService/citasSlice/listarCitas";
import { Link } from 'react-router-dom';

const ListarCitas = ({ citas, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha de Cita</th>
          <th>Hora de Cita</th>
          <th>Duración</th>
          <th>Ubicación</th>
          <th>Detalles</th>
          <th>Estado</th>
          <th>Fecha de creación</th>
          <th>Fecha de modificación</th>
        </tr>
      </thead>
      <tbody>
        {citas.map((cita) => (
          <tr key={cita.id}>
            <td>{cita.name}</td>
            <td>{cita.date}</td>
            <td>{cita.time}</td>
            <td>{cita.duration}</td>
            <td>{cita.location}</td>
            <td>{cita.dateTime}</td>
            <td>
              <Link to={`/citas/${cita.id}`}>Detalles</Link>
              <button onClick={() => onDelete(cita.id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default connect(null, { listarCitas })(ListarCitas);