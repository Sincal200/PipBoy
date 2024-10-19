import React, { useState, useEffect } from 'react';
import { Container, Title, Button } from '../components/StyledComponents';
import {toast} from 'react-hot-toast'

function Alertas() {
  const [alertSettings, setAlertSettings] = useState({
    oxygenMin: '',
    oxygenMax: '',
    pulseMin: '',
    pulseMax: '',
    temperatureMin: '',
    temperatureMax: ''
  });
  
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedSettings = localStorage.getItem('alertSettings');
    if (savedSettings) {
      setAlertSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleChange = (e) => {
    setAlertSettings({ ...alertSettings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('alertSettings', JSON.stringify(alertSettings));
    setMessage('Configuración de alertas guardada exitosamente!');

    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <Container>
      <Title>Configuración de Alertas</Title>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Oxígeno (%)</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="oxygenMin"
              value={alertSettings.oxygenMin}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Mínimo"
            />
            <input
              type="number"
              name="oxygenMax"
              value={alertSettings.oxygenMax}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Máximo"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Pulso (BPM)</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="pulseMin"
              value={alertSettings.pulseMin}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Mínimo"
            />
            <input
              type="number"
              name="pulseMax"
              value={alertSettings.pulseMax}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Máximo"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Temperatura (°C)</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="temperatureMin"
              value={alertSettings.temperatureMin}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Mínimo"
            />
            <input
              type="number"
              name="temperatureMax"
              value={alertSettings.temperatureMax}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Máximo"
            />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Guardar Configuración
        </Button>
      </form>
    </Container>
  );
}

export default Alertas;
