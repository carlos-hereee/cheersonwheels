import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './stylesheets/index.css';
import 'nexious-library/@index.css';
import App from './pages/Landing.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
