import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from './pages/Home';
import Graficas from './pages/Graficas';
import Oxygen from './pages/Oxygen';
import Temperature from './pages/Temperature';
import Login from './pages/Login';  // Importa la página de Login
import axios from 'axios';

axios.defaults.baseURL = 'http://64.227.110.203:3000';
axios.defaults.withCredentials = true;

function AppContent() {
  let location = useLocation();
  const isLoginPage = location.pathname === '/login'; // Verifica si es la página de login

  return (
    <div className={`${isLoginPage ? 'flex justify-center items-center h-screen' : 'grid lg:grid-cols-4 xl:grid-cols-6 h-screen bg-gray-100'}`}>
      {/* Sidebar solo se muestra si no es la página de login */}
      {!isLoginPage && <Sidebar />}
  
      <main className={`p-8 min-h-screen overflow-y-auto ${isLoginPage ? 'w-full flex justify-center items-center' : 'lg:col-span-3 xl:col-span-5'}`}>
        {/* Header solo se muestra si no es la página de login */}
        {!isLoginPage && <Header />}
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graficas" element={<Graficas />} />
          <Route path="/oxygen" element={<Oxygen />} />
          <Route path="/temperature" element={<Temperature />} />
          <Route path="/login" element={<Login />} /> {/* Ruta del login */}
        </Routes>
      </main>
    </div>
  );
  
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
