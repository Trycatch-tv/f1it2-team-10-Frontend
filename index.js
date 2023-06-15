const http = require('http');
const express = require('express');
// const cors = require('cors');
const server = express();
const PORT = 3001;

const { Router } = require('express');
const router = Router();

const { getAppointmentById } = require('./controllers/getAppointmentById');
const { login } = require('./controllers/login');
const { postCreate } = require('./controllers/postCreate');
const { deleteApp } = require('./controllers/deleteApp');

router.get('/appointment/:id', getAppointmentById);
router.get('/login', login);
router.post('/create', postCreate);
router.delete('/deleteApp/:id', deleteApp);

// server.use(cors());

server.use(express.json());

server.use('/', router);

server.listen(PORT, () => {
  console.log('Server raised in port: ' + PORT);
});
