export const CREAR_CITA = 'CREAR_CITA';
export const ACTUALIZAR_CITA = 'ACTUALIZAR_CITA';
export const ELIMINAR_CITA = 'ELIMINAR_CITA';
  
  export const crearCita = (cita) => {
    return { type: CREAR_CITA, payload: cita };
  };
  
  export const actualizarCita = (id, cita) => {
    return { type: ACTUALIZAR_CITA, payload: { id, cita } };
  };
  
  export const eliminarCita = (id) => {
    return { type: ELIMINAR_CITA, payload: id };
  };
  