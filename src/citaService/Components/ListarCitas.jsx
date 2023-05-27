import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cita from "./Cita";
import DetalleCita from "./DetalleCita";
import EditarCita from "./EditarCita";
import { deleteCita } from "../../Redux/actions.js/citaActions";

const ListarCitas = () => {
  const citas = useSelector((state) => state.citas);
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);
  const dispatch = useDispatch();

  const handleMostrarDetalle = (cita) => {
    setCitaSeleccionada(cita);
  };

  const handleEliminarCita = (id) => {
    setCitaSeleccionada(id);
  };

  const handleConfirmarEliminar = (id) => {
    dispatch(deleteCita(id));
    setCitaSeleccionada(null);
  };

  return (
    <div>
      {citas.map((cita) => (
        <div key={cita.id}>
          <Cita cita={cita} />
          <button onClick={() => handleMostrarDetalle(cita)}>
            Mostrar detalle
          </button>
          {citaSeleccionada && citaSeleccionada.id === cita.id && (
            <DetalleCita cita={cita} />
          )}
          <button onClick={() => handleConfirmarEliminar(cita.id)}>Eliminar</button>
          <button onClick={() => setCitaSeleccionada(cita.id)}>Editar</button>
          {citaSeleccionada && citaSeleccionada.id === cita.id && (
            <EditarCita cita={cita} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ListarCitas;


// utilizamos el hook useSelector para acceder al estado de las citas en Redux. 
// Luego, iteramos sobre el array de citas y renderizamos un componente Cita para cada cita.
// el hook useState maneja el estado de la cita seleccionada
// la función handleMostrarDetalle se llama cuando se hace clic en el botón "Mostrar detalle". 
// Esta función establece la cita seleccionada en el estado y luego renderiza el componente DetalleCita 
// si la cita seleccionada coincide con la cita actual.
// la función handleConfirmarEliminar recibe un parámetro id y esto evita llamar a e.preventDefault() y simplifica el código.
// para eliminar se pasa directamente el cita.id a la función handleConfirmarEliminar.