import { configureStore } from "@reduxjs/toolkit";
import citasReducer from "./citasSlice";

const store = configureStore({
  reducer: {
    citas: citasReducer,
  },
});

export default store;