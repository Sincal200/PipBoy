/* eslint-disable no-restricted-globals */

self.onmessage = function (event) {

  const fetchData = () => {
    fetch('https://pipboy-3s72.onrender.com/sensor-temperature')
      .then(response => response.json())
      .then(data => {
        if (data.temperatureC !== undefined) {
          const newData = { value: data.temperatureC };
          self.postMessage({ type: 'newData', newData });
        }
      })
      .catch(error => {
        self.postMessage({ type: 'error', error: 'Error fetching temperature data: ' + error });
      });
  };

  setInterval(fetchData, 500); // Obtener datos cada 500ms
};

/* eslint-enable no-restricted-globals */