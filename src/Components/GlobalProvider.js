import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  citas: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Acciones para cambiar el estado
  function agregarCita(cita) {
    dispatch({
      type: 'AGREGAR_CITA',
      payload: cita,
    });
  }

  function eliminarCita(id) {
    dispatch({
      type: 'ELIMINAR_CITA',
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        citas: state.citas,
        agregarCita,
        eliminarCita,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
