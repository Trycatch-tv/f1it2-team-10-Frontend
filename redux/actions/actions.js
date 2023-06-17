import axios from 'axios';
import { CREAR_CITA, ACTUALIZAR_CITA, ELIMINAR_CITA, LISTAR_CITAS } from "./action-types";

export const crearCita = (cita) => {
  return { type: CREAR_CITA, payload: cita };
};
  
export const actualizarCita = (id, cita) => {
  return { type: ACTUALIZAR_CITA, payload: { id, cita } };
};
  
export const eliminarCita = (id) => {
  return { type: ELIMINAR_CITA, payload: id };
};

const getCita = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get("https://your-api-endpoint");
      return dispatch({ type: LISTAR_CITAS, payload: response.data.results });
    } catch (error) {
      console.log(error);
    }
  };
};

export default getCita;
