import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// ✅ 올바른 Font Awesome CSS import
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);