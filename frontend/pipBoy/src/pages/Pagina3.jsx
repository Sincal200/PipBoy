import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { startTemperature, stopTemperature } from '../functions/apiFunctions';

function Pagina3() {
  const [temperature, setTemperature] = useState(null);
  const [sensorDataTemperature, setSensorDataTemperature] = useState([]);
  const [worker, setWorker] = useState(null);
  const [fetchActive, setFetchActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!fetchActive) return;

    const sensorTemperature = async () => {
      try {
        const response = await axios.get('https://pipboy-3s72.onrender.com/sensor-temperature');
        if (response.data.temperatureC !== undefined) {
          setTemperature(response.data.temperatureC);
        }
      } catch (error) {
        console.error('Error fetching temperature data:', error);
      }
    };

    const intervalId = setInterval(sensorTemperature, 500); // Obtener datos cada 500ms

    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar el componente
  }, [fetchActive]);

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleButtonClick = () => {
    console.log('fetchActive before click:', fetchActive);
    if (fetchActive) {
      stopTemperature(setFetchActive);
    } else {
      startTemperature(setFetchActive);
    }
    console.log('fetchActive after click:', !fetchActive);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-200 to-blue-200 p-4 relative">
      <button 
        onClick={handleNavigateHome} 
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 absolute top-4 left-4">
        Volver
      </button>
      <div className="bg-white p-8 rounded-3xl shadow-2xl text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Temperatura Actual</h1>
        {temperature !== null ? (
          <div className="text-7xl font-bold text-blue-500 mb-4">
            {temperature}°C
          </div>
        ) : (
          <div className="text-2xl text-gray-500 mb-4">Cargando...</div>
        )}
        <button 
          onClick={handleButtonClick}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 mb-4">
          {fetchActive ? 'Detener Medición' : 'Iniciar Medición'}

        </button>
      </div>
    </div>
  );
}

export default Pagina3;