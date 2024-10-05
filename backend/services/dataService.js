const Temperature = require('../models/Temperature');

let sensorData = { ir: null, red: null };
let heartRateData = { bpm: null, avgBpm: null };
let temperatureData = { temperatureC: null, temperatureF: null };

const getAll = async () => {
    return await Temperature.find({});
}

const create = async (temperature) => {
    return await Temperature.create(temperature);
}


const getSensorData = () => sensorData;
const getHeartRateData = () => heartRateData;
const getTemperatureData = () => temperatureData;

const updateSensorData = (data) => {
    sensorData = data;
};

const updateHeartRateData = (data) => {
    heartRateData = data;
};

const updateTemperatureData = (data) => {
    temperatureData = data;
};

module.exports = {
    create,
    getAll,
    getSensorData,
    getHeartRateData,
    getTemperatureData,
    updateSensorData,
    updateHeartRateData,
    updateTemperatureData
}