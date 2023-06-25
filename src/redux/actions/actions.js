import axios from 'axios';
import { CREAR_CITA, ACTUALIZAR_CITA, ELIMINAR_CITA, BUSCAR_CITAS, RECUPERAR_CITA } from "./action-types";

export const crearCita = (cita) => {
  return { type: CREAR_CITA, payload: cita };
};
  
export const actualizarCita = (id, cita) => {
  return { type: ACTUALIZAR_CITA, payload: { id, cita } };
};
  
export const eliminarCita = (id) => {
  return { type: ELIMINAR_CITA, payload: id };
};

export const buscarCitas = (terminoBusqueda) => {
  return { type: BUSCAR_CITAS, payload: terminoBusqueda };
};

export const recuperarCita = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get("https://citasync.onrender.com/");
      return dispatch({ type: RECUPERAR_CITA, payload: response.data.results });
    } catch (error) {
      console.log(error);
    }
  };
};

export default recuperarCita;
