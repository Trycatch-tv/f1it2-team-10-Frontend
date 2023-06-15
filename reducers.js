import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appointments: []
};

const citasSlice = createSlice({
  name: "citas",
  initialState,
  reducers: {
    createAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    editAppointment: (state, action) => {
      const index = state.appointments.findIndex(appointment => appointment.id === action.payload.id);
      if (index !== -1) {
        state.appointments[index] = action.payload;
      }
    },
    deleteAppointment: (state, action) => {
      state.appointment = state.appointments.filter(appointment => appointment.id !== action.payload);
    }
  }
});

export const { createAppointment, editAppointment, deleteAppointment } = citasSlice.actions;

export default citasSlice.reducer;
