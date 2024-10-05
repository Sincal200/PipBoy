const dataService = require('../services/dataService');
const WebSocket = require('ws');
let wss; // Variable para almacenar el servidor WebSocket
let wsClient; // Variable para almacenar la conexión WebSocket del ESP32

const setWebSocketServer = (webSocketServer) => {
    wss = webSocketServer;
};

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

const handleWebSocketConnection = (ws) => {
    wsClient = ws; // Guardar la conexión WebSocket del ESP32

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message); // Parsear los datos recibidos
            if (data.type === 'sensor') {
                sensorData = data; // Guardar los datos del sensor
            } else if (data.type === 'heartRate') {
                heartRateData = data; // Guardar los datos de frecuencia cardíaca
            } else if (data.type === 'temperature') {
                temperatureData = data; // Guardar los datos de temperatura
            }
            console.log('Datos recibidos:', data);
        } catch (error) {
            console.error('Error al parsear los datos:', error);
        }
    });

    ws.send('Conexión establecida con el servidor WebSocket');
}

const startTemperature = (req, res) => {
    if (wsClient && wsClient.readyState === WebSocket.OPEN) {
        wsClient.send('STARTT');
        res.json({ message: 'Señal de inicio enviada al ESP32' });
    } else {
        res.status(500).json({ message: 'No hay conexión WebSocket con el ESP32' });
    }
}

const stopTemperature = (req, res) => {
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
    setWebSocketServer,
    handleWebSocketConnection,
    startTemperature,
    stopTemperature
}

