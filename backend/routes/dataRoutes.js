const express = require('express');
const router = express.Router();
const cors = require('cors');
const { create, test, getAll, getTemperatureData, sendStartSignal, sendStopSignal} = require('../controllers/dataController');



const corsOptions = {
    origin: 'http://localhost:3000', // Origen permitido
    credentials: false, // Permitir credenciales
  };

router.use(cors());

router.post('/temperatures', create);
router.get('/', test);
router.get('/getTemperatures', getAll);

router.get('/api/temperature-data', getTemperatureData);

router.post('/api/start-sending', sendStartSignal);
router.post('/api/stop-sending', sendStopSignal);

module.exports = router;