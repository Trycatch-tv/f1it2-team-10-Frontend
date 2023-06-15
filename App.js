import React, { useState, useEffect } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import Detail from './components/Detail/detail';
import About from './pages/About/about';
import Menu from './components/Menu/menu';
import CreateForm from './pages/CreateForm/createForm';
import List from './components/List/list';
import Login from './components/Login';

function App() {

  const navigate = useNavigate();
   const [access, setAccess] = useState(true);

   function login(userData) {
      const { username, password } = userData;
      const URL = 'http://localhost:3001/api/';
      axios.post(URL, { username, password }).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/menu');
      });
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);


  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/createForm" element={<CreateForm />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
