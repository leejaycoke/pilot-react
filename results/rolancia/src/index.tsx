import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HttpClient from './service/httpClient';

const httpClient = new HttpClient();

ReactDOM.render(
  <React.StrictMode>
    <App httpClient={httpClient}/>
  </React.StrictMode>,
  document.getElementById('root')
);
