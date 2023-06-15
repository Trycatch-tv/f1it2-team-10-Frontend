let editApp = [];

function postApp(req, res) {
  const appointment = req.body.appointment;
  editApp.push(appointment);
  res.status(200).json(editApp);
}

function deleteApp(req, res) {
  const appointmentId = req.params.id;
  editApp = editApp.filter((appointment) => appointment.id !== appointmentId);
  res.status(200).json(editApp);
}

module.exports = { postApp, deleteApp, editApp };
