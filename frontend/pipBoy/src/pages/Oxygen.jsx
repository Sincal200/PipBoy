import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { startOxygen, stopOxygen ,startHeartRate, stopHeartRate } from '../functions/apiFunctions';

function Oxygen() {
  const [fetchActive, setFetchActive] = useState(false);
  const [oxygenLevel, setOxygenLevel] = useState(null);
  const [averageBPM, setaverageBPM] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const navigate = useNavigate();

  const sensorOxygen = async () => {
    try {
      const response = await axios.get('/sensor-oxygen');
      if (response.data.value !== undefined) {
        setOxygenLevel(response.data.value);
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  };

  const sensorHeartRate = async () => {
    try {
      const response = await axios.get('sensor-heart-rate');
      if (response.data.avgBpm !== undefined) {
        setaverageBPM(response.data.avgBpm);
      }
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  };

  useEffect(() => {
    if (!fetchActive) return;

    // Primera medición a los 500ms
    const timeout = setTimeout(() => {
      sensorOxygen();
      sensorHeartRate();
      // Luego configurar el intervalo para cada 25 segundos
      const interval = setInterval(() => {
        sensorOxygen();
        sensorHeartRate();
      }, 25000);
      setIntervalId(interval);
    }, 1000);
    setTimeoutId(timeout);

    // Limpiar el timeout y el intervalo al desmontar el componente o cuando fetchActive cambie
    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [fetchActive]);

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleStartOxygen = () => {
    startOxygen(setFetchActive);
    startHeartRate(setFetchActive);
  };

  const handleStopOxygen = () => {
    stopOxygen(setFetchActive);
    stopHeartRate(setFetchActive);
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-gradient-to-r from-green-200 to-blue-200 p-4 relative">
      <button 
        onClick={handleNavigateHome} 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 absolute top-4 left-4">
        Back
      </button>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">BPM Average</h1>
      <div className="text-4xl md:text-6xl font-bold text-red-500 mb-4">
          {averageBPM !== null ? `${averageBPM}` : '--'}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">Blood Oxygen Level</h1>
        <div className="text-4xl md:text-6xl font-bold text-blue-500 mb-4">
          {oxygenLevel !== null ? `${oxygenLevel}%` : '--'}
        </div>
        <div className="flex flex-col md:flex-row justify-around">
          <button 
            onClick={handleStartOxygen} 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mb-4 md:mb-0">
            Start
          </button>
          <button 
            onClick={handleStopOxygen} 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

export default Oxygen;