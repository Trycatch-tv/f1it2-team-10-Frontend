import { acciones, reductores } from "redux";

const accionesCitas = reductores.combineReducers(
  acciones.acciónAgregarCita,
  acciones.acciónActualizarCita,
  acciones.buscarCita,
  acciones.listarCitas,
  acciones.acciónEliminarCita
);

export default accionesCitas;