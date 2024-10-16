const Temperature = require('../models/Temperature');
const Oxygen = require('../models/Oxygen');

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

module.exports = {
    create,
    getAll,
    createOxygen,
    getAllOxygen
}