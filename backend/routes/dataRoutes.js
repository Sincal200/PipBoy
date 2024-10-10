const express = require('express');
const router = express.Router();
const cors = require('cors');
const { create, test, getAll, startTemperature, stopTemperature, 
  startSensorData, stopSensorData, sensorData, sensorTemperature, 
  sensorOxygen, startOxygen, stopOxygen} = require('../controllers/dataController');

const allowedOrigins = [
  'https://pipboy-frontend.onrender.com',
  'http://localhost:5173',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization'
};

router.use(cors(corsOptions));

router.post('/temperatures', create);
router.get('/', test);
router.get('/getTemperatures', getAll);
router.get('/sensor-data', sensorData);
router.post('/start-temperature', startTemperature);
router.post('/stop-temperature', stopTemperature);
router.post('/start-sending', startSensorData);
router.post('/stop-sending', stopSensorData);
router.get('/sensor-temperature', sensorTemperature);
router.post('/start-oxygen', startOxygen);
router.post('/stop-oxygen', stopOxygen);
router.get('/sensor-oxygen', sensorOxygen);



module.exports = router;