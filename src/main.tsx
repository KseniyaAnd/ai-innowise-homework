import React from 'react';
import ReactDOM from 'react-dom/client';
import UserDirectory from './components/UserDirectory';
import './components/UserDirectory.module.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserDirectory />
  </React.StrictMode>
);