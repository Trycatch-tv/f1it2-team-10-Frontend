import axios from 'axios';
import { GET_APPOINTMENT, CREATE_APPOINTMENT, EDIT_APPOINTMENT, DELETE_APPOINTMENT } from "./actions-types";

export const createAppointment = (appointment) => {
  return { type: CREATE_APPOINTMENT, payload: appointment };
};
  
export const editAppointment = (id, appointment) => {
  return { type: EDIT_APPOINTMENT, payload: { id, appointment } };
};
  
export const deleteAppointment = (id) => {
  return { type: DELETE_APPOINTMENT, payload: id };
};

const getAppointment = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get("https://your-api-endpoint");
      return dispatch({ type: GET_APPOINTMENT, payload: response.data.results });
    } catch (error) {
      console.log(error);
    }
  }
};

export default getAppointment;
  
