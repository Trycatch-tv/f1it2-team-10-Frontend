import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/menu');
  };

  return (
    <div className="app">
      <div className="home-form">
        <h1>Bienvenido a nuestra aplicación</h1>
        <div className="button-container">
        <button
          type="button"
          className={handleClick ? 'button-clicked' : ''}
          onClick={handleClick}>
          Acceder a la app
        </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
