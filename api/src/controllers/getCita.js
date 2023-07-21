const axios = require('axios');
const { info } = require('./models'); 
const api = 'https://citasync.onrender.com'; 

const getCita = async (req, res) => {
  try {
    const { id } = req.params;

    if (!isNaN(id)) {
      // Search for cita in the API:
      const { data } = await axios.get(`${api}/${id}`);

      if (!data) {
        throw Error(`Missing data for ID: ${id}`);
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
      // Search for cita in the database;
      const dataDb = await info.findOne({
        where: { id },
        include: ['name'], 
      });

      if (dataDb) {
        const cita = {
          id: dataDb.id,
          nombre: dataDb.nombre,
          fecha: dataDb.fecha,
          hora: dataDb.hora,
          duracion: dataDb.duracion,
          ubicacion: dataDb.ubicacion,
          detalles: dataDb.detalles,
          estado: dataDb.estado,
        };

        res.json(cita);
      } else {
        throw new Error(`Cita not found for ID: ${id}`);
      }
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

function actualizarCita(cita) {
  return getCitaList.some(existingCita => JSON.stringify(existingCita) === JSON.stringify(cita));
}

module.exports = {
  getCita,
  actualizarCita,
};

