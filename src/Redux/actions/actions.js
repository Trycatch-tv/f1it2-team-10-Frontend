import { createAction, createReducer } from 'redux';

export const addCita = createAction('ADD_CITA');
export const updateCita = createAction('UPDATE_CITA');
export const deleteCita = createAction('DELETE_CITA');
export const setQuery = createAction('SET_QUERY');
export const setResults = createAction('SET_RESULTS');

const initialState = {
  citas: [],
  searchResults: [],
  query: '',
};

export const AppReducer = createReducer(initialState, {
  [addCita.type]: (state, action) => {
    state.citas.push(action.payload);
  },
  [updateCita.type]: (state, action) => {
    const updatedCitas = state.citas.map((cita) =>
      cita.id === action.payload.id ? action.payload : cita
    );
    state.citas = updatedCitas;
  },
  [deleteCita.type]: (state, action) => {
    const updatedCitas = state.citas.filter((cita) => cita.id !== action.payload);
    state.citas = updatedCitas;
  },
  [setQuery.type]: (state, action) => {
    state.query = action.payload;
  },
  [setResults.type]: (state, action) => {
    state.searchResults = action.payload;
  },
});

export default AppReducer;
