import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ActivityProvider } from './activityContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActivityProvider>
      <App />
    </ActivityProvider>
  </React.StrictMode>,
);
