import { configureStore } from "redux";
import citasReducer from "./reducers.js/citasReducer";

export default configureStore({
  reducer: {
    citas: citasReducer,
  },
});

// configurar el almacenamiento de Redux