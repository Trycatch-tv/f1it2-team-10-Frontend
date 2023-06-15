const axios = require('axios');

const URL = "https://your-api-endpoint.com/appointments/";

const getAppointmentById = (req, res) => {
  const id = req.params.id;

  axios
    .get(URL + id)
    .then((response) => {
      const data = response.data;

      if (data.error) {
        res.status(404).json({ message: "Not found" });
      } else {
        const appointment = {
          username: data.username,
          password: data.password,
          nombre: data.nombre,
          fecha: data.fecha,
          hora: data.hora,
          duracion: data.duracion,
          detalles: data.detalles,
        };

        res.json(appointment);
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

module.exports = {
  getAppointmentById,
};
