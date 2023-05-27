import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import axios from "axios";
import HomePage from "./citaService/Components/HomePage";
import CrearCita from "./citaService/Components/CrearCita";
import ListarCitas from "./citaService/Components/ListarCitas";
import BuscarCita from "./citaService/Components/BuscarCita";
import EliminarCita from "./citaService/Components/EliminarCita";
import EditarCita from "./citaService/Components/EditarCita";

function App() {

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response) {
        // Manejar errores 4xx/5xx aquí
      }
      return Promise.reject(error);
    }
  );
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/crear-cita" exact component={CrearCita} />
          <Route path="/listar-citas" exact component={ListarCitas} />
          <Route path="/buscar-cita" exact component={BuscarCita} />
          <Route path="/editar-cita/:id" exact component={EditarCita} />
          <Route path="/eliminar-cita/:id" exact component={EliminarCita} />
        </Switch>
      </Router>
    </Provider>
  );
}

// Switch para manejar la navegación entre diferentes componentes. 
export default App;

// con redux en la aplicación podemos utilizar los hooks de Redux 
// (useSelector y useDispatch) en los componentes para manejar el 
//estado de las citas y las acciones relacionadas.