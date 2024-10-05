const WebSocket = require('ws');
const sensorService = require('../services/sensorService');

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message); // Parsear los datos recibidos
            if (data.type === 'sensor') {
                sensorService.updateSensorData(data); // Guardar los datos del sensor
            } else if (data.type === 'heartRate') {
                sensorService.updateHeartRateData(data); // Guardar los datos de frecuencia cardíaca
            } else if (data.type === 'temperature') {
                sensorService.updateTemperatureData(data); // Guardar los datos de temperatura
            }
            console.log('Datos recibidos:', data);
        } catch (error) {
            console.error('Error al parsear los datos:', error);
        }
    });

    ws.send('Conexión establecida con el servidor WebSocket');
});

module.exports = wss;