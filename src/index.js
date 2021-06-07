import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {AppProvider} from './context';
import { HomeProvider } from './homeContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <HomeProvider>
        <BrowserRouter>
          <App />    
        </BrowserRouter>
      </HomeProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);