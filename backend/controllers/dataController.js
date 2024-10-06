const dataService = require('../services/dataService');
const { getSensorData, getHeartRateData, getTemperatureData, getWsClient } = require('../handlers/webSocketHandler');
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


const sensorData = async (req, res) => {
    res.json(getSensorData());
}

const startSensorData = async (req, res) => {
    const wsClient = getWsClient();
    if (wsClient && wsClient.readyState === WebSocket.OPEN) {
        wsClient.send('START');
        res.json({ message: 'Señal de inicio enviada al ESP32' });
    } else {
        res.status(500).json({ message: 'No hay conexión WebSocket con el ESP32' });
    }
};

const stopSensorData = async (req, res) => {
    const wsClient = getWsClient();
    if (wsClient && wsClient.readyState === WebSocket.OPEN) {
        wsClient.send('STOP');
        res.json({ message: 'Señal de inicio enviada al ESP32' });
    } else {
        res.status(500).json({ message: 'No hay conexión WebSocket con el ESP32' });
    }
};

const startTemperature = async (req, res) => {
    const wsClient = getWsClient();
    if (wsClient && wsClient.readyState === WebSocket.OPEN) {
        wsClient.send('STARTT');
        res.json({ message: 'Señal de inicio enviada al ESP32' });
    } else {
        res.status(500).json({ message: 'No hay conexión WebSocket con el ESP32' });
    }
}

const stopTemperature = async (req, res) => {
    const wsClient = getWsClient();
    if (wsClient && wsClient.readyState === WebSocket.OPEN) {
        wsClient.send('STOPT');
        res.json({ message: 'Señal de parada enviada al ESP32' });
    } else {
        res.status(500).json({ message: 'No hay conexión WebSocket con el ESP32' });
    }
}


module.exports = {
    create,
    test,
    getAll,
    startTemperature,
    stopTemperature,
    sensorData,
    startSensorData,
    stopSensorData
}

