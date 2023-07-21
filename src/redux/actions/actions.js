import axios from 'axios';

export const CREAR_CITA = 'CREAR_CITA';
export const GET_CITAS = 'GET_CITAS';
export const ACTUALIZAR_CITA = 'ACTUALIZAR_CITA';
export const ELIMINAR_CITA = 'ELIMINAR_CITA';
export const GET_CITA = 'GET_CITA';

export const crearCita = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post('/api/citas', payload);
      dispatch({ type: CREAR_CITA, payload: response.data });
    } catch (error) {
      console.error('Error al crear cita:', error);
      throw error; 
    }
  }
}

export const getCitas = () => {
  return async function (dispatch) {
    try {
        const response = await axios.get('/api/citas');
        dispatch({
            type: GET_CITAS,
            payload: response.data
        })
    } catch (error) {
        console.error('Error al obtener citas:', error);
        throw error; 
    }
  }
};

export const actualizarCita = (id, cita) => {
  return async function (dispatch) {
    try {
      const response = await axios.put(`/api/citas/${id}`, cita);
      dispatch({ type: ACTUALIZAR_CITA, payload: response.data });
    } catch (error) {
        console.error(`Error al actualizar cita con id=${id}:`, error);
        throw error; 
    }
  };
};

export const eliminarCita = (id) => {
  return async function (dispatch) {
    try {
      await axios.delete(`/api/citas/${id}`);
      dispatch({ type: ELIMINAR_CITA, payload: id });
    } catch (error) {
      console.error(`Error al eliminar cita con id ${id}:`, error);
    }
  };
};

export const getCita = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/api/citas/${id}`);
      dispatch({ type: GET_CITA, payload: response.data });
    } catch (error) {
      console.error(`Error al obtener cita con id ${id}:`, error);
    }
  };
};
