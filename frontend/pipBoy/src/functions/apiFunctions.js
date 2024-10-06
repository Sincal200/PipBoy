export const startSending = (setFetchActive) => {
  fetch('https://pipboy-3s72.onrender.com/start-sending', {
    method: 'POST',
    credentials: 'include',
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    setFetchActive(true);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al enviar la señal de inicio');
  });
};

export const stopSending = (setFetchActive) => {
  fetch('https://pipboy-3s72.onrender.com/stop-sending', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    setFetchActive(false);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al enviar la señal de parada');
  });
};

export const startHeartRate = (setHeartRateActive) => {
  fetch('https://esp32-jk3y.onrender.com/api/start-heart-rate', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    setHeartRateActive(true);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al enviar la señal de inicio de frecuencia cardíaca');
  });
};

export const stopHeartRate = (setHeartRateActive) => {
  fetch('https://esp32-jk3y.onrender.com/api/stop-heart-rate', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    setHeartRateActive(false);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al enviar la señal de parada de frecuencia cardíaca');
  });
};

export const startTemperature = (setTemperatureActive) => {
  fetch('https://esp32-jk3y.onrender.com/api/start-temperature', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    setTemperatureActive(true);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al enviar la señal de inicio de temperatura');
  });
};

export const stopTemperature = (setTemperatureActive) => {
  fetch('https://esp32-jk3y.onrender.com/api/stop-temperature', {
    method: 'POST'
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    setTemperatureActive(false);
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Error al enviar la señal de parada de temperatura');
  });
};