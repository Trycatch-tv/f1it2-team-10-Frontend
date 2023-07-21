const axios = require('axios');

const api = 'https://citasync.onrender.com'

api.interceptors.request.use((config) => { 
  console.log('Enviando petición:', config); 
  return config; }, (error) => { 
    console.error('Error en la petición:', error); 
    return Promise.reject(error); });

api.interceptors.response.use((response) => { 
  console.log('Respuesta recibida:', response); 
  return response; }, (error) => { 
    console.error('Error en la respuesta:', error); 
    return Promise.reject(error); });

module.exports = api; 