import React, { useState, useEffect } from 'react';

const Form = ({ onSubmit, initialValues }) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [duration, setDuration] = useState('');
    const [location, setLocation] = useState('');
    const [details, setDetails] = useState('');
    const [dateTime, setdateTime] = useState('');
  
    useEffect(() => {
      if (initialValues) {
        setName(initialValues.name);
        setDate(initialValues.date);
        setTime(initialValues.time);
        setDuration(initialValues.duration);
        setLocation(initialValues.location);
        setDetails(initialValues.details);
        setdateTime(initialValues.dateTime);
      }
    }, [initialValues]);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, date, time, duration, location, details, dateTime });
      setName('');
      setDate('');
      setTime('');
      setDuration('');
      setLocation('');
      setDetails('');
      setdateTime('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <label htmlFor="time">Hora:</label>
        <input
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <label htmlFor="duration">Duración:</label>
        <input
          type="number"
          id="duration"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <label htmlFor="location">Ubicación:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <label htmlFor="details">Detalles:</label>
        <textarea
          id="details"
          name="details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <label htmlFor="dateTime">Fecha de creación o modificación:</label>
        <textarea
          id="date"
          name="date"
          value={dateTime}
          onChange={(e) => setdateTime(e.target.value)}
        />
        <button type="submit">Crear cita</button>
      </form>
    );
  };
  

export default Form;