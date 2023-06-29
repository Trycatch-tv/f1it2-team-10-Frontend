import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://citasync.onrender.com/api'
});

instance.interceptors.request.use(request => {
    console.log('Solicitud enviada: ', request);
    return request;
}, error => {
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    console.log('Respuesta recibida: ', response);
    return response;
}, error => {
    return Promise.reject(error);
});


export default instance;
