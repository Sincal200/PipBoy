const dataService = require('../services/dataService');
const WebSocket = require('ws');

const test = (req, res) => {
    res.json('Hello from the server!');
}

const getAll  = async (req, res) => {
    const temperatures = await dataService.getAll();
    res.json(temperatures);
}

const create = async (req, res) => {
    const temperature = req.body;
    const newTemperature = await dataService.create(temperature);
    res.json(newTemperature);
}

const getSensorData = (req, res) => {
    res.json(sensorService.getSensorData());
};

const getHeartRateData = (req, res) => {
    res.json(sensorService.getHeartRateData());
};

const getTemperatureData = (req, res) => {
    res.json(sensorService.getTemperatureData());
};

const sendStartSignal = (req, res) => {
    const wsClient = req.app.locals.wsClient;
    if (wsClient && wsClient.readyState === WebSocket.OPEN) {
        wsClient.send('STARTT');
        res.json({ message: 'Señal de inicio enviada al ESP32' });
    } else {
        res.status(500).json({ message: 'No hay conexión WebSocket con el ESP32' });
    }
};

const sendStopSignal = (req, res) => {
    const wsClient = req.app.locals.wsClient;
    if (wsClient && wsClient.readyState === WebSocket.OPEN) {
        wsClient.send('STOPT');
        res.json({ message: 'Señal de parada enviada al ESP32' });
    } else {
        res.status(500).json({ message: 'No hay conexión WebSocket con el ESP32' });
    }
};



module.exports = {
    create,
    test,
    getAll,
    getSensorData,
    getHeartRateData,
    getTemperatureData,
    sendStartSignal,
    sendStopSignal
}

