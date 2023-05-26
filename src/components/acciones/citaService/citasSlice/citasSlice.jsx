import { createSlice } from "@reduxjs/toolkit";

const citasSlice = createSlice({
  name: "citas",
  initialState: [],
  reducers: {
    agregarCita: (state, action) => {
      state.push(action.payload);
    },
    editarCita: (state, action) => {
      const index = state.findIndex(cita => cita.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    eliminarCita: (state, action) => {
      return state.filter(cita => cita.id !== action.payload);
    },
  },
});

export const { agregarCita, editarCita, eliminarCita } = citasSlice.actions;
export default citasSlice.reducer;