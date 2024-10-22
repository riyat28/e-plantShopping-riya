import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Import the main App component
import './index.css'; // Import your CSS styles
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store.js'; // Import the Redux store

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap App with Provider to pass the store */}
      <App />
    </Provider>
  </React.StrictMode>,
);
