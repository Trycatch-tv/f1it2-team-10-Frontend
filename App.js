import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';
import store from './redux/store';
import rootReducer from './redux/reducer/reducers';
import Detalle from './components/Detalle/detalle';
import About from './pages/About/about';
import Menu from './components/Menu/menu';
import CrearCita from './pages/CrearCita/crearCita';
import ListarCitas from './components/ListarCitas/listarCitas';
import Home from './components/Home';


function App() {

  const navigate = useNavigate();
  const [access, setAccess] = useState(true);


  return (
    <Provider store={store}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/crearCita" element={<CrearCita />} />
          <Route path="/detalle" element={<Detalle />} />
          <Route path="/listarCitas" element={<ListarCitas />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
