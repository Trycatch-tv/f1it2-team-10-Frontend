import { createSlice } from '@reduxjs/toolkit';
import { setGlobalState } from '../context/GlobalState';

const AppReducer = createSlice({
  name: 'app',
  initialState: {
    citas: [],
  },
  reducers: {
    addCita: (state, action) => {
      setGlobalState({
        citas: [...state.citas, action.payload],
      });
    },
    updateCita: (state, action) => {
      const updatedCitas = state.citas.map((cita) =>
        cita.id === action.payload.id ? action.payload : cita
      );
      setGlobalState({
        citas: updatedCitas,
      });
    },
    deleteCita: (state, action) => {
      const updatedCitas = state.citas.filter((cita) => cita.id !== action.payload);
      setGlobalState({
        citas: updatedCitas,
      });
    },
    setQuery: (state, action) => {
      setGlobalState({
        query: action.payload,
      });
    },
    setResults: (state, action) => {
      setGlobalState({
        results: action.payload,
      });
    },
  },
});

export default AppReducer;
