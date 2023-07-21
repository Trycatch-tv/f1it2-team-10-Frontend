import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const crearCita = createAsyncThunk(
  '/citas/crearCita',
  async (cita) => {
    const response = await axios.post('/citas', cita);
    return response.data;
  }
);

export const actualizarCita = createAsyncThunk(
  'citas/actualizarCita',
  async ({ id, cita }) => {
    const response = await axios.put(`/citas/${id}`, cita);
    return response.data;
  }
);

export const eliminarCita = createAsyncThunk(
  'citas/eliminarCita',
  async (id) => {
    await axios.delete(`/citas/${id}`);
    return id;
  }
);


export const getCita = createAsyncThunk(
  'citas/obtenerCita',
  async (id) => {
    const response = await axios.get(`/citas/${id}`);
    return response.data;
  }
);

export const getCitas = createAsyncThunk(
  'citas/obtenerCitas',
  async () => {
    const response = await axios.get('/citas');
    return response.data;
  }
);

const citasSlice = createSlice({
  name: 'citas',
  initialState: {
    citas: [],
    getCitas: [],
  },
  reducers: {
    crearCita(state, action) {
      state.citas.push(action.payload);
    },
    actualizarCita(state, action) {
      const index = state.citas.findIndex((cita) => cita.id === action.payload.id);
      if (index !== -1) {
        state.citas[index] = action.payload;
      }
    },
    eliminarCita(state, action) {
      const index = state.citas.findIndex((cita) => cita.id === action.payload);
      if (index !== -1) {
        state.citas.splice(index, 1);
      }
    },
    getCitas(state, action) {
      state.getCitas = action.payload;
    },
    getCita(state, action) {
      state.cita = action.payload;
    }
  },
});

export const { actions } = citasSlice;
export default citasSlice.reducer
