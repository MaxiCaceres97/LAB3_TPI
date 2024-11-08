import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewTrip from './pages/NewTrip';
import Login from './pages/Login'; 
import TravelHistory from './pages/TravelHistory';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nuevo-viaje" element={<NewTrip />} />
        <Route path="/login" element={<Login />} />
        <Route path="/historial-viajes" element={<TravelHistory />} />
        <Route path="/contacto" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;

