import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import GlobalStyle from './Global.styles';

const $root = document.getElementById('root');

ReactDOM.render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  $root
);
