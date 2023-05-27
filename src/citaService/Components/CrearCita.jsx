import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { crearCita } from "../Components/CrearCita";

const CrearCita = () => {
  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [lugar, setLugar] = useState("");
  const [duracion, setDuracion] = useState("");
  
// useDispatch para llamar a la acción agregarCita cuando se envíe el formulario de creación de cita.
  const dispatch = useDispatch();
// función handleSubmit: se llama cuando se envía el formulario. Esta función crea una nueva cita con las propiedades requeridas y luego utiliza el hook useDispatch para llamar a la acción agregarCita de Redux.
  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaCita = {
      titulo,
      fecha,
      lugar: lugar.toLowerCase(),
      duracion: parseInt(duracion),
    };

    dispatch(crearCita(nuevaCita));
    setTitulo("");
    setFecha("");
    setLugar("");
    setDuracion("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título de la cita"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <input
        type="text"
        placeholder="Lugar de la cita"
        value={lugar}
        onChange={(e) => setLugar(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duración en minutos (0-1440)"
        value={duracion}
        onChange={(e) => setDuracion(e.target.value)}
      />
      <button type="submit">Crear cita</button>
    </form>
  );
};

export default CrearCita;
