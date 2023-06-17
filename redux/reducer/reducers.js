import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  citas: [],
  listarCitas: [],
};

export const crearCita = createAsyncThunk(
  "citas/crearCita",
  async (cita) => {
    const response = await axios.post("http://localhost:3001", cita);
    return response.data;
  }
);

export const actualizarCita = createAsyncThunk(
  "citas/actualizarCita",
  async ({ id, actualizarCita }) => {
    const response = await axios.put(`http://localhost:3001/${id}`, actualizarCita);
    return response.data;
  }
);

export const eliminarCita = createAsyncThunk(
  "citas/eliminarCita",
  async (id) => {
    await axios.delete(`http://localhost:3001/${id}`);
    return id;
  }
);

export const listarCitas = createAsyncThunk(
  "citas/listarCitas",
  async () => {
    const response = await axios.get("http://localhost:3001/citas");
    return response.data;
  }
);

const citasSlice = createSlice({
  name: "citas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(crearCita.fulfilled, (state, action) => {
        state.citas.push(action.payload);
      })
      .addCase(actualizarCita.fulfilled, (state, action) => {
        const index = state.citas.findIndex((cita) => cita.id === action.payload.id);
        if (index !== -1) {
          state.citas[index] = action.payload;
        }
      })
      .addCase(eliminarCita.fulfilled, (state, action) => {
        const index = state.citas.findIndex((cita) => cita.id === action.payload);
        if (index !== -1) {
          state.citas.splice(index, 1);
        }
      })
      .addCase(listarCitas.fulfilled, (state, action) => {
        state.listarCitas = action.payload;
      });
  },
});

export const { actions } = citasSlice;
export default citasSlice.reducer;
