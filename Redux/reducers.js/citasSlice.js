import { createSlice } from "../reducers.js";

// Un "slice" es una parte de la aplicación que se encarga de una funcionalidad específica, en este caso, la gestión de citas. 
// agrega un estado inicial y algunas propiedades requeridas para las citas
const citasSlice = createSlice({
  name: "citas",
  initialState: {
    citas: [
      {
        id: 1,
        titulo: "Cita 1",
        fecha: "2023-06-01",
        lugar: "Cafetería A",
        duracion: 1, // Duración en minutos
      },
    ],
  },

  // maneja el estado de las citas
  reducers: {
    agregarCita: (state, action) => {
      state. enqueue((queue) => {
        queue.push(action.payload);
      });
    },
    eliminarCita: (state, action) => {
      state.citas = state.citas.filter((cita) => cita.id !== action.payload);
    },
    setError: (state, action) => { // acción setError para almacenar errores en el estado 
      state.error = action.payload;
    } 
  },
});

export const { agregarCita, eliminarCita, setError } = citasSlice.actions;

export default citasSlice.reducer;


