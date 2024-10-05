import React from 'react';
import { useNavigate } from 'react-router-dom';

function Graficas() {
  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl">
      <h1 className="text-2xl font-bold mb-4">Graficas</h1>
      
      
      <button onClick={handleNavigateHome} className="bg-primary-100 py-2 px-6 rounded-xl text-white inline-block mt-4">
        Volver
      </button>
      {/* aca añadi boton de regreso */}
    </div>
  );
}

export default Graficas;