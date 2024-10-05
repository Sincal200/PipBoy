const Temperature = require('../models/Temperature');

const getAll = async () => {
    return await Temperature.find({});
}

const create = async (temperature) => {
    return await Temperature.create(temperature);
}

module.exports = {
    create,
    getAll
}