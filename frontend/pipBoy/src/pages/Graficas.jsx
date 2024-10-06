import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Container, Title, Button, ChartContainer } from '../components/StyledComponents';
import { startSending, stopSending, startHeartRate, stopHeartRate, startTemperature, stopTemperature } from '../functions/apiFunctions';

function Graficas() {
  const navigate = useNavigate();
  const [sensorData, setSensorData] = useState([]);
  const [fetchActive, setFetchActive] = useState(false);
  const [heartRateActive, setHeartRateActive] = useState(false);
    const [temperatureActive, setTemperatureActive] = useState(false);
  const maxDataPoints = 20; // Limitar a los últimos 20 puntos de datos
  
  useEffect(() => {
    if (!fetchActive && !heartRateActive) return;
  
    const worker = new Worker(new URL('../functions/sensorDataWorker.js', import.meta.url));
    worker.postMessage({ maxDataPoints });
  
    worker.onmessage = (event) => {
      const { type, newData, error } = event.data;
      if (type === 'newData') {
        setSensorData(prevData => {
          const updatedData = [...prevData, newData];
          if (updatedData.length > maxDataPoints) {
            updatedData.shift(); // Quitar el dato más antiguo
          }
          return updatedData;
        });
      } else if (type === 'error') {
        console.error(error);
      }
    };
  
    return () => worker.terminate();
  }, [fetchActive, heartRateActive]);

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleButtonClick = () => {
    console.log('fetchActive before click:', fetchActive);
    if (fetchActive) {
      stopSending();
    } else {
      startSending();
    }
    setFetchActive(!fetchActive);
    console.log('fetchActive after click:', !fetchActive);
  };

  return (
    <div>
      <button onClick={handleNavigateHome} className="bg-primary-100 py-2 px-6 rounded-xl text-white inline-block mt-4">
        Volver
      </button>
      <Container>
        <Title>Heart Rate Monitor</Title>
        <Button onClick={handleButtonClick} style={{ marginBottom: '20px' }}>
          {fetchActive ? 'Stop Monitoring' : 'Start Monitoring'}
        </Button>
        <ChartContainer>
          <ResponsiveContainer>
            <LineChart data={sensorData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="time" stroke="#00c6ff" />
              <YAxis stroke="#00c6ff" domain={['dataMin', 'dataMax']} />
              <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#00c6ff' }} itemStyle={{ color: '#121212' }} />
              <Legend wrapperStyle={{ color: '#00c6ff' }} />
              <Line 
                type="linear" 
                dataKey="value" 
                stroke="#00c6ff" 
                dot={false} 
                isAnimationActive={true} 
                animationDuration={300} 
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Container>
    </div>
  );
}

export default Graficas;