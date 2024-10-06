const express = require('express');
const router = express.Router();
const cors = require('cors');
const { create, test, getAll } = require('../controllers/dataController');



const corsOptions = {
    origin: 'http://localhost:3000', // Origen permitido
    credentials: false, // Permitir credenciales
  };

router.use(
    cors(corsOptions),
)

router.post('/temperatures', create);
router.get('/', test);
router.get('/getTemperatures', getAll);

module.exports = router;