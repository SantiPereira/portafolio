import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Estilos globales
import App from './App.jsx'; // Componente principal

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
