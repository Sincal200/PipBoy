const WebSocket = require('ws');

let sensorData = { ir: null, red: null };
let heartRateData = { bpm: null, avgBpm: null };
let temperatureData = { temperatureC: null, temperatureF: null };
let wsClient = null;

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
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
});

const getSensorData = () => sensorData;
const getHeartRateData = () => heartRateData;
const getTemperatureData = () => temperatureData;
const getWsClient = () => wsClient;

module.exports = {
    wss,
    getSensorData,
    getHeartRateData,
    getTemperatureData,
    getWsClient
};