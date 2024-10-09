import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from './pages/Home';
import Graficas from './pages/Graficas';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import axios from 'axios';

axios.defaults.baseURL = 'https://pipboy-3s72.onrender.com';
axios.defaults.withCredentials = true;

function AppContent() {
  const location = useLocation();
  const excludedPaths = ['/graficas', '/pagina2', '/pagina3']; // Agrega más rutas según sea necesario
  const showHeader = !excludedPaths.includes(location.pathname);

  return (
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 min-h-screen overflow-y-auto">
        {showHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graficas" element={<Graficas />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path="/pagina3" element={<Pagina3 />} />
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