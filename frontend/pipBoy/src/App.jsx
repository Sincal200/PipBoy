import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from './pages/Home';
import Graficas from './pages/Graficas';
import Oxygen from './pages/Oxygen';
import axios from 'axios';
import Temperature from './pages/Temperature';

axios.defaults.baseURL = 'https://pipboy-3s72.onrender.com';
axios.defaults.withCredentials = true;

function AppContent() {
  let location = useLocation();
  const excludedPaths = ['/graficas', '/oxygen', '/temperature']; // Agrega más rutas según sea necesario
  const showHeader = !excludedPaths.includes(location.pathname);

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 min-h-screen overflow-y-auto">
        {showHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graficas" element={<Graficas />} />
          <Route path="/oxygen" element={<Oxygen />} />
          <Route path="/temperature" element={<Temperature />} />
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