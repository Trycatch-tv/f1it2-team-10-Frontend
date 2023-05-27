import { Cita } from "./Components/Cita";

export const buscarCita = (consulta, citas) => {
  const coincidencias = citas.filter((cita) =>
    cita.titulo.toLowerCase().includes(consulta.toLowerCase())
  );

  return coincidencias;
};

// Esta función filtra las citas que coinciden con la consulta de búsqueda 
// (ignorando mayúsculas y minúsculas).