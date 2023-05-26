import { Provider } from "react-redux";
import React from 'react';
import store from "./store";
import CrearCita from "./components/acciones/citaService/citasSlice/crearCita";
import ListarCitas from "./components/acciones/citaService/citasSlice/listarCitas";
import BuscarCita from "./components/acciones/citaService/citasSlice/buscarCita";
import EliminarCita from "./components/acciones/citaService/citasSlice/eliminarCita";
import { useDispatch, useSelector } from "react-redux";
import { crearCita, editarCita, listarCitas, buscarCita, eliminarCita } from "./components/acciones/citaService/citasSlice";
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';


function App() {
  const dispatch = useDispatch();
  const citas = useSelector(
    estado => estado.accionesCitas.acciones.accionesCitas
  );

  // En CrearCita
const dispatch = useDispatch();
// Para agregar una cita
dispatch(crearCita(nuevaCita));

// En ListarCitas
const citas = useSelector((state) => state.citas);

// En BuscarCita
const cita = useSelector((state) => state.citas.find((c) => c.id === citaId));

// En EliminarCita
dispatch(eliminarCita(citaId));

// Función para obtener detalles de la cita
const listarCitas = async (id) => {
  const response = await axios.get(`/api/agenda/${id}`);
  // Manejar la respuesta según corresponda
};

// Función para agregar una nueva cita
const crearCita = async (cita) => {
  const response = await axios.post('/api/agenda', cita);
  // Manejar la respuesta según corresponda
};

// Función para actualizar una cita existente
const editarCita = async (citaId, citaActualizada) => {
  const response = await axios.put(`/api/agenda/${citaId}`, citaActualizada);
  // Manejar la respuesta según corresponda
};

// Función para eliminar una cita existente
const eliminarCita = async (citaId) => {
  const response = await axios.delete(`/api/agenda/${citaId}`);
  // Manejar la respuesta según corresponda
};

  return (
    <Provider store={store}>
      <div>
        <CrearCita />
        <ListarCitas />
        <BuscarCita />
        <EditarCita />
        <EliminarCita />
      </div>
    </Provider>
  );
}


export default App;