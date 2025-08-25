import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ScrollToTop } from 'nexious-library';
import './stylesheets/index.css';
import 'nexious-library/@index.css';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
    <App>
      <RoutesRouter />
    </App>
  </BrowserRouter>,
);
