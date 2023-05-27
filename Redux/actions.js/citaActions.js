export const deleteCita = (id) => {
    return {
      type: "ELIMINAR_CITA",
      payload: id,
    };
  };
  
  // acción de eliminar en el archivo 