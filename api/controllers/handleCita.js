const { getCita } = require("../../src/redux/actions/actions");

let getCita = [];

function postCita(req, res) {
  const cita = req.body.cita;
  getCita.push(cita);
  res.status(200).json(getCita);
}

function deleteCita(req, res) {
  const citaId = req.params.id;
  getCita = getCita.filter((cita) => cita.id !== citaId);
  res.status(200).json(getCita);
}

module.exports = { postCita, deleteCita, getCita };
