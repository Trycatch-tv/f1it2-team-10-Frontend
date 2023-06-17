const http = require('http');
const express = require('express');
const cors = require('cors');
const server = express();
const PORT = 3001;

const { Router } = require('express');
const router = Router();

const { getCitaById } = require('./controllers/getCitaById');
const { home } = require('./controllers/home');
const { postCrearCita } = require('./controllers/postCrearCita');
const { deleteCita } = require('./controllers/deleteCita');

router.get('/cita/:id', getCitaById);
router.get('/home', home);
router.post('/crearCita', postCrearCita);
router.delete('/deleteCita/:id', deleteCita);

// server.use(cors());

server.use(express.json());

server.use('/', router);

server.listen(PORT, () => {
  console.log('Server raised in port: ' + PORT);
});
