import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from './pages/Home';
import Graficas from './pages/Graficas';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
import axios from 'axios'
{/* aca añadi lo de las rutas y otras cositas*/}

axios.defaults.baseURL = 'https://pipboy-3s72.onrender.com';
axios.defaults.withCredentials = true;

function App() {
  return (
    <Router> 
      {/*todo el contenido que estaba en esta parte lo movi para las paginas como Home*/}
      <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
        <Sidebar />
        <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
          <Header />
            {/* las rutas se añaden aca y arriba y se crean en pages*/}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/graficas" element={<Graficas />} />
            <Route path="/pagina2" element={<Pagina2 />} />
            <Route path="/pagina3" element={<Pagina3 />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;