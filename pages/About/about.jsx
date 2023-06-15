import React from 'react';
import { useNavigate } from 'react-router-dom';
import orli from '../../assets/orli.png';
import yeferson from '../../assets/yeferson.png';
import giovanni from '../../assets/giovanni.png';
import styles from './about.module.css';

const About = () => {
  const navigate = useNavigate();

  return (
      <div className={styles.background}>
        <div className={styles.title}>
          <h1>CITASYNC</h1>
        </div>
        <div className={styles.subtitle}>
          <h2>Tu Agenda de Citas</h2>
        </div>
        <p></p>
        <p>Bienvenidos al proyecto del Team-10</p>
        <p>Somos TECHNOMANCERS, un gusto que puedan ver nuestro proyecto con Try Catch.Tv y Dev Latam</p>
        <p>El team está conformado por:</p>
        <ul className={styles.fotos}>
          <div>
            <img
              src={orli}
              alt="Orli Dun"
              width="100px"
              style={{ borderRadius: '70%', marginTop: '35px', marginBottom: '0px' }}
            />
            <h5>Orli Dun</h5>
            <h6>FullStack Web Developer</h6>
            <h6>Team Lead</h6>
          </div>
          <div>
            <img
              src={yeferson}
              alt="Yeferson Agudelo"
              width="100px"
              style={{ borderRadius: '70%', marginTop: '35px', marginBottom: '0px' }}
            />
            <h5>Yeferson Agudelo</h5>
            <h6>Programador de Software</h6>
            <h6>Backend</h6>
          </div>
          <div>
            <img
              src={giovanni}
              alt="Giovanni Rodriguez"
              width="100px"
              style={{ borderRadius: '70%', marginTop: '35px', marginBottom: '0px' }}
            />
            <h5>Giovanni Rodriguez</h5>
            <h6>Ingeniero en Multimedia y Desarrollo</h6>
            <h6>Backend</h6>
          </div>
        </ul>
        <div className={styles.button}>
        <button onClick={() => navigate('/menu')} className="ov-btn-grow-ellipse">Back to Menu</button>
      </div>
    </div>
  );
};

export default About;

