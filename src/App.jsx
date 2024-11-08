import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewTrip from './pages/NewTrip';
import Login from './pages/Login'; // Importa la página de inicio de sesión

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-viaje" element={<NewTrip />} />
        <Route path="/login" element={<Login />} /> {/* Ruta de inicio de sesión */}
      </Routes>
    </Router>
  );
}

export default App;

