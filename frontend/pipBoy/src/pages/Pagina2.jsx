import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { startOxygen, stopOxygen } from '../functions/apiFunctions';

function Pagina2() {
  const [fetchActive, setFetchActive] = useState(false);
  const [oxygenLevel, setOxygenLevel] = useState(null);
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


  useEffect(() => {
    if (!fetchActive) return;

    // Primera medición a los 500ms
    const timeout = setTimeout(() => {
      sensorOxygen();
      // Luego configurar el intervalo para cada 25 segundos
      const interval = setInterval(sensorOxygen, 25000);
      setIntervalId(interval);
    }, 500);
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
  };

  const handleStopOxygen = () => {
    stopOxygen(setFetchActive);
    clearTimeout(timeoutId);
    clearInterval(intervalId);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <button onClick={handleNavigateHome} className="bg-primary-100 py-2 px-6 rounded-xl text-white inline-block mb-4">
        Volver
      </button>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Nivel de Oxígeno en Sangre</h1>
        <div className="text-6xl font-bold text-blue-500 mb-4">
          {oxygenLevel !== null ? `${oxygenLevel}%` : '--'}
        </div>
        <div className="flex justify-around">
          <button onClick={handleStartOxygen} className="bg-green-500 py-2 px-6 rounded-xl text-white">
            Iniciar
          </button>
          <button onClick={handleStopOxygen} className="bg-red-500 py-2 px-6 rounded-xl text-white">
            Detener
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pagina2;