import { action, actiontypes, reducer, accionesCitas, reducción } from "redux";

const accionesCitas = {
  agregarCita: acciones.crearCita,
  editarCita: acciones.editarCita,
  eliminarCita: acciones.eliminarCita,
  buscarCita: acciones.buscarCita,
  listarCitas: acciones.listarCitas,
};

const reduccion = {
  inicializarCitas: (estado) => {
    return estado.init.pa.slice(0, estado.página);
  },
  agregarCita: (estado, acción) => {
    const nuevoEstado = estado.acciones.agregarCita(acción);
    return nuevoEstado;
  },
  editarCita: (estado, acción) => {
    const nuevoEstado = estado.acciones.actualizarCita(acción);
    return nuevoEstado;
  },
  eliminarCita: (estado, acción) => {
    const nuevoEstado = estado.acciones.eliminarCita(acción);
    return nuevoEstado;
  },
  buscarCita: (estado, acción) => {
    const nuevoEstado = estado.acciones.buscarCita(acción);
    return nuevoEstado;
  },
};

export const acciones = {
  agregarCita,
  editarCita,
  eliminarCita,
  buscarCita,
  listarCitas,
};