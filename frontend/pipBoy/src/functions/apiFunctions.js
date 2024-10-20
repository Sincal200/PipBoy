import axios from 'axios';

export const startSending = (setFetchActive) => {
  axios.post('/start-sending', {}, { withCredentials: true })
    .then(response => {
      console.log(response.data.message);
      setFetchActive(true);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar la señal de inicio');
    });
};

export const stopSending = (setFetchActive) => {
  axios.post('/stop-sending')
    .then(response => {
      console.log(response.data.message);
      setFetchActive(false);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar la señal de parada');
    });
};

export const startHeartRate = (setHeartRateActive) => {
  axios.post('/start-heart-rate')
    .then(response => {
      console.log(response.data.message);
      setHeartRateActive(true);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar la señal de inicio de frecuencia cardíaca');
    });
};

export const stopHeartRate = (setHeartRateActive) => {
  axios.post('/stop-heart-rate')
    .then(response => {
      console.log(response.data.message);
      setHeartRateActive(false);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar la señal de parada de frecuencia cardíaca');
    });
};

export const startTemperature = (setTemperatureActive) => {
  axios.post('/start-temperature')
    .then(response => {
      console.log(response.data.message);
      setTemperatureActive(true);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar la señal de inicio de temperatura');
    });
};

export const stopTemperature = (setTemperatureActive) => {
  axios.post('/stop-temperature')
    .then(response => {
      console.log(response.data.message);
      setTemperatureActive(false);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar la señal de parada de temperatura');
    });
};

export const startOxygen = (setOxygenActive) => {
  axios.post('/start-oxygen')
    .then(response => {
      console.log(response.data.message);
      setOxygenActive(true);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar la señal de inicio de oxigeno');
    });
};

export const stopOxygen = (setOxygenActive) => {
  axios.post('/stop-oxygen')
    .then(response => {
      console.log(response.data.message);
      setOxygenActive(false);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar la señal de detener oxigeno');
    });
};

