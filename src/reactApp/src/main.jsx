import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Extracted layout component that ensures a reactive layout
const MainLayout = () => (
  <div className=" w-auto w-100">
    <App/>
  </div>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainLayout/>
  </StrictMode>
);