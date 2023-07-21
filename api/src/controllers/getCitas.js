const express = require('express');
const app = express();
const axios = require('axios');
const { info } = require('./models'); 
const api = 'https://citasync.onrender.com';

app.use(express.json());

const getCitaList = [];

const getCitas = async (req, res) => {
  try {
    const { citas } = req.params;

    if (!isNaN(citas)) {
      // Search for cita in the API:
      const { data } = await axios.get(`${api}/${citas}`);

      if (!data) {
        throw new Error(`Missing data`);
      }

      const cita = {
        id: data.id,
        nombre: data.nombre,
        fecha: data.fecha,
        hora: data.hora,
        duracion: data.duracion,
        ubicacion: data.ubicacion,
        detalles: data.detalles,
        estado: data.estado,
      };

      res.json(cita);

    } else {
      const { data } = await axios.get(`${api}`);

      if (!data.citas) {
        throw new Error(`Missing data`);
      }

      res.json(data.citas);
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const postCita = (req, res) => {
  try {
    const cita = req.body;

    if (getCitaList.some((c) => c.id == cita.id)) {
      throw new Error("La cita ya existe");
    }

    getCitaList.push(cita);

    res.status(201).json(getCitaList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteCita = (req, res) => {
  const { id } = req.params;

  const citaIndex = getCitaList.findIndex((cita) => cita.id === id);

  if (citaIndex === -1) {
    res.status(404).send("Cita no encontrada");
  } else {
    getCitaList.splice(citaIndex, 1);
    res.status(201).json(getCitaList);
  }
};

// Middleware de manejo de errores
app.use((error, req, res, next) => {
  console.log("Middleware de manejo de errores llamado")
  console.log('Path: ', req.path)
  next() 
});

module.exports = {
  getCitas,
  postCita,
  deleteCita,
};
