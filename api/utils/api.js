import axios from 'axios';

const api = axios.createAppointment({
  baseURL: 'https://tu-backend-url.com/api',
});

export default api;
