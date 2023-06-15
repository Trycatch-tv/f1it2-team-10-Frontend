export const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';
export const EDIT_APPOINTMENT = 'EDIT_APPOINTMENT';
export const DELETE_APPOINTMENT = 'DELETE_APPOINTMENT';
  
export const createAppointment = (appointment) => {
  return { type: CREATE_APPOINTMENT, payload: appointment };
};
  
export const editAppointment = (id, appointment) => {
  return { type: EDIT_APPOINTMENT, payload: { id, appointment } };
};
  
export const deleteAppointment = (id) => {
  return { type: DELETE_APPOINTMENT, payload: id };
};

  