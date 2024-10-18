import axios from 'axios';


export const fetchDevices = async () => {
  try {
    const response = await axios.get('/getDevice');
    return response.data;
  } catch (error) {
    console.error('Error al obtener los dispositivos', error);
    throw error;
  }
};

export const createDevice = async (newDevice) => {
  try {
    await axios.post('/device', newDevice);
  } catch (error) {
    console.error('Error al crear el dispositivo', error);
    throw error;
  }
};
