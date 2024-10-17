import React from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Graficas from './pages/Graficas';
import Oxygen from './pages/Oxygen';
import Temperature from './pages/Temperature'


axios.defaults.baseURL = 'http://64.227.110.203:3000';
axios.defaults.withCredentials = true;



function AppContent() {

  let location = useLocation();
  const excludedPaths = ['/']; // Agrega más rutas según sea necesario
  const showHeader = !excludedPaths.includes(location.pathname);

  return (
    
    <div className={`grid ${showHeader ? 'lg:grid-cols-4 xl:grid-cols-6' : 'grid-cols-1'} h-screen`}>
    {showHeader && <Sidebar />}
    <main className={`lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 ${showHeader ? 'max-h-screen overflow-y-auto' : 'overflow-hidden'}`}>  
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/graficas" element={<Graficas />} />
            <Route path="/oxygen" element={<Oxygen />} />
            <Route path="/temperature" element={<Temperature />} />
          </Routes>
      </main>
    </div>
  );
}

function App(){
  return(
    <Router>
      <AppContent />
    </Router>
  )
}

export default App;
