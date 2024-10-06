const WebSocket = require('ws');
const EventEmitter = require('events');
const { debounce } = require('lodash');

let sensorData = { ir: null, red: null };
let heartRateData = { bpm: null, avgBpm: null };
let temperatureData = { temperatureC: null, temperatureF: null };
let wsClient = null;

const dataEmitter = new EventEmitter();

const handleSensorData = async (data) => {
    sensorData = data;
    console.log('Sensor data processed:', sensorData);
};

const handleHeartRateData = async (data) => {
    heartRateData = data;
    console.log('Heart rate data processed:', heartRateData);
};

const handleTemperatureData = async (data) => {
    temperatureData = data;
    console.log('Temperature data processed:', temperatureData);
};

// Register event listeners with debouncing
dataEmitter.on('sensor', debounce(handleSensorData, 100));
dataEmitter.on('heartRate', debounce(handleHeartRateData, 100));
dataEmitter.on('temperature', debounce(handleTemperatureData, 100));

const wss = new WebSocket.Server({ noServer: true });

wss.on('connection', (ws) => {
    wsClient = ws; // Save the WebSocket connection

    ws.on('message', (message) => {
        try {
            const data = JSON.parse(message); // Parse the received data
            dataEmitter.emit(data.type, data); // Emit event based on data type
            console.log('Data received:', data);
        } catch (error) {
            console.error('Error parsing data:', error);
        }
    });

    ws.send('Connection established with WebSocket server');
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