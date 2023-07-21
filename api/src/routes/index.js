const express = require('express');
const router = express.Router();
const { getCita, actualizarCita } = require('../controllers/getCita');
const { getCitas, postCita, deleteCita } = require('../controllers/getCitas');

router.get('/citas/:id', getCita);
router.get('/citas', getCitas);
router.put('/citas/:id', actualizarCita);
router.post('/citas', postCita);
router.delete('/citas/:id', deleteCita);

module.exports = router;

