import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import GlobalStyle from './styles/GlobalStyle';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
