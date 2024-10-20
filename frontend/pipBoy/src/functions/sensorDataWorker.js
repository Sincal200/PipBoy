/* eslint-disable no-restricted-globals */

self.onmessage = function (event) {
    const { maxDataPoints } = event.data;
  
    const fetchData = () => {
      fetch('http://64.227.110.203:3000/sensor-data')
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