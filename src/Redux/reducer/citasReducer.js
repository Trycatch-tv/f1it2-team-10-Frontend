import { initialState } from './initialState';

export default function citasReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CITA':
      return { ...state, citas: [...state.citas, action.cita] };
    case 'DELETE_CITA':
      return { ...state, citas: state.citas.filter(cita => cita.id !== action.citaId) };
    case 'SET_USUARIO':
      return { ...state, usuario: action.usuario };
    default:
      return state;
  }
}
