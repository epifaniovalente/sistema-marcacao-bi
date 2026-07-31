import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ErroLimite } from './utils/ErroLimte.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErroLimite>
      <App />
    </ErroLimite>
  </StrictMode>
);
