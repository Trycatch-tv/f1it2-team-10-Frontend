const axios = require('axios');
const router = express.Router();

const api = axios.create({
  baseURL: 'https://citasync.onrender.com',
});

export const getCita = (id) => api.get(`/citas/${id}`);
export const getCitas = () => api.get(`/citas`);
export const crearCita = (cita) => api.post('/citas', cita);
export const actualizarCita = (id, data) => api.put(`/citas/${id}`, data);
export const deleteCita = (id) => api.delete(`/citas/${id}`);

