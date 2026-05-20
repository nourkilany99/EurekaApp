import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RoutingApp from './RoutingApp';

/* Redirect the initial load to /splash so the splash screen
   always plays on a fresh app launch. */
if (window.location.pathname === '/') {
  window.history.replaceState(null, '', '/splash');
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RoutingApp />
  </React.StrictMode>
);
