import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  appointments: []
};

const citasSlice = createSlice({
  name: "citas",
  initialState,
  reducers: {
    CREATE_APPOINTMENT: (state, action) => {
      state.appointments.push(action.payload);
    },
    EDIT_APPOINTMENT: (state, action) => {
      const index = state.appointments.findIndex(appointment => appointment.id === action.payload.id);
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
    },
    DELETE_APPOINTMENT: (state, action) => {
      state.appointments = state.appointments.filter(appointment => appointment.id !== action.payload);
    }
  }
});

export const { CREATE_APPOINTMENT, EDIT_APPOINTMENT, DELETE_APPOINTMENT } = citasSlice.actions;

export const createAppointment = (appointment) => {
  const endpoint = 'http://localhost:3001/';
  return (dispatch) => {
    axios.post(endpoint, appointment).then(({ data }) => {
      return dispatch(CREATE_APPOINTMENT(data));
    });
  };
};

export const editAppointment = (id, updatedAppointment) => {
  const endpoint = `http://localhost:3001/${id}`;
  return (dispatch) => {
    axios.put(endpoint, updatedAppointment).then(({ data }) => {
      return dispatch(EDIT_APPOINTMENT(data));
    });
  };
};

export const deleteAppointment = (id) => {
  const endpoint = `http://localhost:3001/${id}`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch(DELETE_APPOINTMENT(data));
    });
  };
};

export default citasSlice.reducer;
