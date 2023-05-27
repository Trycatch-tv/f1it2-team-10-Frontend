import { ELIMINAR_CITA } from "../actions.js/citaActions";

const initialState = {
  citas: [
    // ... citas iniciales
  ],
};

const citaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ELIMINAR_CITA:
      return {
        ...state,
        citas: state.citas.filter((cita) => cita.id !== action.payload),
      };
    // ... otras acciones
    default:
      return state;
  }
};

export default citaReducer;

// maneja la acción de eliminar y actualiza el estado de las citas