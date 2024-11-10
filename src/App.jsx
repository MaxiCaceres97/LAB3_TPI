import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewTrip from './pages/NewTrip';
import Login from './pages/Login';
import TravelHistory from './pages/TravelHistory';
import ContactUs from './pages/ContactUs';
import AuthenticationContextProvider from './components/contexts/AuthenticationContext'; // Proveedor del contexto
import ProtectedRoute from './components/contexts/ProtectedRoute'; // Ruta protegida
import Bill from './pages/Bill';  

function App() {
  return (
    <AuthenticationContextProvider> {/* Envuelve toda la aplicación */}
      <Router>
        <Routes>
          {/* Ruta pública */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contac" element={<ContactUs />} />

          {/* Rutas protegidas */}
          <Route
            path="/nuevo-viaje"
            element={
              <ProtectedRoute>
                <NewTrip />
              </ProtectedRoute>
            }
          />
          <Route
            path="/historial-viajes"
            element={
              <ProtectedRoute>
                <TravelHistory />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bills"
            element={
              <ProtectedRoute>
                <Bill />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthenticationContextProvider>
  );
}

export default App;