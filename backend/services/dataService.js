const Temperature = require('../models/Temperature');
const Oxygen = require('../models/Oxygen');
const Device = require('../models/Device');
const HeartData = require('../models/HeartData');

const getAll = async () => {
    return await Temperature.find({});
}

const create = async (temperature) => {
    return await Temperature.create(temperature);
}

const getAllOxygen = async () => {
    return await Oxygen.find({});
}

const createOxygen = async (oxygen) => {
    return await Oxygen.create(oxygen);
}

const createDevice = async (device) => {
    return await Device.create(device);
}

const getDevice = async () => {
    return await Device.find({});
}

const createHeartData = async (heartData) => {
    return await HeartData.create(heartData);
}

const getHeartData = async () => {
    return await HeartData.find({});
}

const getAverageTemperature = async (userId) => {
    const temperatures = await Temperature.find({ user: userId });
    const totalTemperatures = temperatures.length;

    if (totalTemperatures === 0) {
        return {
            averageTemperatureC: 0,
            averageTemperatureF: 0
        };
    }

    const sumTemperaturesC = temperatures.reduce((sum, temp) => sum + temp.temperatureC, 0);
    const sumTemperaturesF = temperatures.reduce((sum, temp) => sum + temp.temperatureF, 0);
    
    const averageTemperatureC = (sumTemperaturesC / totalTemperatures).toFixed(2);
    const averageTemperatureF = (sumTemperaturesF / totalTemperatures).toFixed(2);
    
    return {
        averageTemperatureC,
        averageTemperatureF
    };
}

module.exports = {
    create,
    getAll,
    createOxygen,
    getAllOxygen,
    createDevice,
    getDevice,
    createHeartData,
    getHeartData,
    getAverageTemperature
}