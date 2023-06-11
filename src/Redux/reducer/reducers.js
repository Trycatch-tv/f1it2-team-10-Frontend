import { combineReducers } from 'redux';


const initialState = {
  citas: []
};


const actionHandlers = {
  [CREAR_CITA]: (state, action) => {
    return { ...state, citas: [...state.citas, action.payload] };
  },
  [ACTUALIZAR_CITA]: (state, action) => {
    return {
      ...state,
      citas: state.citas.map((cita) =>
        cita.id === action.payload.id ? action.payload.cita : cita
      )
    };
  },
  [ELIMINAR_CITA]: (state, action) => {
    return {
      ...state,
      citas: state.citas.filter((cita) => cita.id !== action.payload)
    };
  }
};

export const citasReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  if (handler) {
    return handler(state, action);
  } else {
    return state;
  }
};

const rootReducer = combineReducers({
  citas: citasReducer
});

export default rootReducer;
