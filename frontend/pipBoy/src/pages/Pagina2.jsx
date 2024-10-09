import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pagina2() {
  const navigate = useNavigate();
  
  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <button onClick={handleNavigateHome} className="bg-primary-100 py-2 px-6 rounded-xl text-white inline-block mt-4">
        Volver
      </button>
  );
}

export default Pagina2;