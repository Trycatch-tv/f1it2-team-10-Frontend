import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./menu.css";
import axios from 'axios';


function useIsActive(pathname) {
  const location = useLocation();
  return location.pathname === pathname ? "active" : "";
}

function Menu() {
  const [access, setAccess] = useState(false);
  const [animationActive, setAnimationActive] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const URL = 'http://localhost:3001/api/';
    axios.post(URL)
      .then(({ data }) => {
        const { access } = data;
        setAccess(access);
        access && navigate('/crearCita');
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleAddClick = () => {
    navigate('/crearCita');
  };

  const handleExitClick = () => {
    navigate('/');
  };

  const handleAnimate = () => {
    setAnimationActive((prev) => !prev);
    dispatch({ type: "SET_ANIMATION_ACTIVE", payload: !animationActive });
  };

  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const handleHamburgerClick = () => {
    setIsNavExpanded((prev) => !prev);
  };

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    const navigationItems = document.querySelector('.navigation__items');

    if (hamburger && navigationItems) {
      const handleClick = () => {
        navigationItems.classList.toggle('visible');
      };

      hamburger.addEventListener('click', handleClick);

      return () => {
        hamburger.removeEventListener('click', handleClick);
      };
    }
  }, []);

  return (
    <>
      <nav>
        <Link to="/menu" />
        <div className='background'>
          <div className="hamburger" onClick={handleHamburgerClick}>
            <p>MENU</p>
          </div>
          <div className={`navigation__items ${isNavExpanded ? "visible" : ""}`}>
            <Link to="/crearCita">
              <button onClick={handleAddClick} className={useIsActive("/crearCita")}>CREAR CITA</button>
            </Link>
            <Link to="/detalle">
              <button className={useIsActive("/detalle")}>DETALLE CITA</button>
            </Link>
            <Link to="/listarCitas">
              <button className={useIsActive("/listarCitas")}>LISTA DE CITAS</button>
            </Link>
            <Link to="/about">
              <button className={useIsActive("/about")}>ABOUT</button>
            </Link>
            <div>
              <button onClick={handleExitClick} className={useIsActive("/exit")}>EXIT</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;
