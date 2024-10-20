import React, { useState, useEffect } from 'react';
import { fetchDevices, createDevice } from '../functions/DeviceSelectionService';

const DeviceSelection = () => {
    const [devices, setDevices] = useState([]);
    const [newDevice, setNewDevice] = useState({ id: '', name: '' });
    const [error, setError] = useState('');

    useEffect(() => {
        loadDevices();
    }, []);

    const loadDevices = async () => {
        try {
            const devices = await fetchDevices();
            setDevices(devices);
        } catch (error) {
            console.error('Error al cargar los dispositivos');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'id' && value.length > 6) {
            setError('El código debe tener un máximo de 6 dígitos');
        } else {
            setError('');
            setNewDevice({
                ...newDevice,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newDevice.id.length > 6) {
            setError('El código debe tener un máximo de 6 dígitos');
            return;
        }

        try {
            await createDevice(newDevice);
            setNewDevice({ id: '', name: '' });
            loadDevices();
        } catch (error) {
            console.error('Error al crear el dispositivo');
        }
    };

    return (
        <div className="flex flex-col justify-center min-h-full bg-gradient-to-r from-green-200 to-blue-200 p-4">
            <div className="min-h-screen bg-gray-100 p-4 md:p-6">
                <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-4 md:p-6">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-gray-800">Gestión de Dispositivos</h2>

                    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                        <div>
                            <label htmlFor="id" className="block text-sm font-medium text-gray-700">Código del dispositivo:</label>
                            <input
                                type="text"
                                name="id"
                                value={newDevice.id}
                                onChange={handleInputChange}
                                maxLength="6"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre del dispositivo:</label>
                            <input
                                type="text"
                                name="name"
                                value={newDevice.name}
                                onChange={handleInputChange}
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>

                        {error && <p className="text-red-500 text-sm">{error}</p>}

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Agregar dispositivo
                        </button>
                    </form>

                    <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-gray-800">Lista de Dispositivos</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr className="bg-indigo-600 text-white">
                                    <th className="px-2 md:px-4 py-2 text-left">Código dispositivo</th>
                                    <th className="px-2 md:px-4 py-2 text-left">Nombre dispositivo</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {devices.map((device) => (
                                    <tr key={device.id} className="hover:bg-gray-100">
                                        <td className="px-2 md:px-4 py-2">{device.id}</td>
                                        <td className="px-2 md:px-4 py-2">{device.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeviceSelection;