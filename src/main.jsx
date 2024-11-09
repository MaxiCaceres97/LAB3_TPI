import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthenticationContextProvider from './components/contexts/AuthenticationContext';
import ProtectedRoute from './components/contexts/ProtectedRoute';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
