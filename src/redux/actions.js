export const agregarCita = (cita) => ({
    tipo: "AGREGAR_CITA",
    payload: cita,
  });
  
  export const editarCita = (cita) => ({
    tipo: "EDITAR_CITA",
    payload: cita,
  });
  
  export const buscarCita = (cita) => ({
    tipo: "BUSCAR_CITA",
    payload: cita,
  });

  export const listarCitas = (cita) => ({
    tipo: "LISTAR_CITAS",
    payload: cita,
  });

  
  export const eliminarCita = (citaId) => ({
    tipo: "ELIMINAR_CITA",
    payload: citaId,
  });