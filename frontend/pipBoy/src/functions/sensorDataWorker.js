/* eslint-disable no-restricted-globals */

self.onmessage = function (e) {
    const { maxDataPoints } = e.data;
  
    const fetchData = () => {
      fetch('https://pipboy-3s72.onrender.com/sensor-data')
        .then(response => response.json())
        .then(data => {
          if(data.type === 'sensor'){
              const newData = { time: new Date().toLocaleTimeString(), value: data.ir };
              self.postMessage({ type: 'newData', newData });
          }
        })
        .catch(error => {
          self.postMessage({ type: 'error', error: 'Error fetching sensor data: ' + error });
        });
    };
  
    setInterval(fetchData, 500); // Obtener datos cada 500ms
  };
  
  /* eslint-enable no-restricted-globals */