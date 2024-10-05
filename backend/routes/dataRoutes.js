const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test } = require('../controllers/dataController');


const corsOptions = {
    origin: 'http://localhost:3000', // Origen permitido
    credentials: false, // Permitir credenciales
  };

router.use(
    cors(corsOptions),
)

router.get('/', test);

module.exports = router;