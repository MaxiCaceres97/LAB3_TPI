import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Asegúrate de que la ruta sea correcta
import './App.css';
import NewTrip from './pages/NewTrip';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-viaje" element={<NewTrip />} />
        
      </Routes>
    </Router>
  );
}

export default App;

