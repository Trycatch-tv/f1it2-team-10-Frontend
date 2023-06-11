import React from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Form from './components/Form/form';
import List from './components/List';
import Create from './pages/Create/create';
import Edit from './pages/Edit/edit';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  const [access, setAccess] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = (user) => {
    console.log("Inicio de sesión exitoso:", user);
    if (user.password === PASSWORD && user.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);


  return (
    <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form login={Form} />} />  
          <Route path="/list" element={<List />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>
  );
}

export default App;

