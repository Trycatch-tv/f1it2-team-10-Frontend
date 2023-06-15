import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./menu.css";
import background from "../../assets/CitaSync.png"

function useIsActive(pathname) {
  const location = useLocation();
  return location.pathname === pathname ? "active" : "";
}

function Menu() {
  const [access, setAccess] = useState(false);
  const [animationActive, setAnimationActive] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddClick = () => {
    navigate('/add');
  };

  const handleMenuClick = () => {
    navigate('/menu');
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
            <Link to="/createForm">
              <button onClick={handleAddClick} className={useIsActive("/createForm")}>CREAR CITA</button>
            </Link>
            <Link to="/detail">
              <button className={useIsActive("/detail")}>DETALLE CITA</button>
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
