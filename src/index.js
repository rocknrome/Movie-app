import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const root = document.getElementById('root');
const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(root).render(rootElement);
